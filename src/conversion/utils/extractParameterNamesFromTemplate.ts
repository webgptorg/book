import type { ReadonlyDeep } from 'type-fest';
import type { TemplateJson } from '../../types/PipelineJson/TemplateJson';
import type { string_parameter_name } from '../../types/typeAliases';
import { extractParameterNames } from '../../utils/parameters/extractParameterNames';
import { extractVariables } from './extractVariables';

/**
 * Parses the template and returns the set of all used parameters
 *
 * @param template the template with used parameters
 * @returns the set of parameter names
 * @throws {ParseError} if the script is invalid
 * @public exported from `@promptbook/utils`
 */
export function extractParameterNamesFromTemplate(
    template: ReadonlyDeep<
        Pick<
            TemplateJson,
            'title' | 'description' | 'templateType' | 'content' | 'preparedContent' | 'jokerParameterNames' | 'foreach'
        >
    >,
): Set<string_parameter_name> {
    const { title, description, templateType, content, preparedContent, jokerParameterNames, foreach } = template;
    const parameterNames = new Set<string_parameter_name>();

    for (const parameterName of [
        ...extractParameterNames(title),
        ...extractParameterNames(description || ''),
        ...extractParameterNames(content),
        ...extractParameterNames(preparedContent || ''),
    ]) {
        parameterNames.add(parameterName);
    }

    if (templateType === 'SCRIPT_TEMPLATE') {
        for (const parameterName of extractVariables(content)) {
            parameterNames.add(parameterName);
        }
    }

    for (const jokerName of jokerParameterNames || []) {
        parameterNames.add(jokerName);
    }

    parameterNames.delete('content');
    //                      <- Note {websiteContent} is used in `preparedContent`

    // Note: [🍭] Fixing dependent subparameterName from FOREACH command
    if (foreach !== undefined) {
        for (const subparameterName of foreach.inputSubparameterNames) {
            if (parameterNames.has(subparameterName)) {
                parameterNames.delete(subparameterName);
                parameterNames.add(foreach.parameterName);
                // <- TODO: [🚎] Warn/logic error when `subparameterName` not used
            }
        }
    }

    return parameterNames;
}

/**
 * TODO: [🔣] If script require contentLanguage
 */
