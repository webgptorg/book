import { spaceTrim } from 'spacetrim';
import { GENERATOR_WARNING, IMPORT_REGEX } from '../config';
import { removeComments } from './removeComments';

/**
 * Place the imports in the markdown content
 *
 * @param content The markdown content
 * @param getFileContent The function to get imported content
 * @returns The markdown content with the imports placed
 */
export async function placeImports(
    content: string,
    getFileContent: (importPath: string) => Promise<string>,
): Promise<string> {
    const importMatches = content.matchAll(IMPORT_REGEX);

    let newContent = content;

    for (const importMatch of importMatches) {
        const importPath = importMatch.groups!.importPath;
        const importStatement = importMatch[0];

        if (!importPath) {
            throw new Error(`Invalid import statement: ${importStatement}`);
        }

        let importedContent = await getFileContent(importPath);

        // Note: Recursively process imports in the imported content
        importedContent = await placeImports(importedContent, getFileContent);

        importedContent = removeComments(importedContent);

        // TODO: !!!!!! Increase header levels in imported content

        const placedContent = spaceTrim(
            (block) => `
                <!--Import ${importPath}-->
                <!--${GENERATOR_WARNING}-->

                ${block(importedContent)}

                <!--/Import ${importPath}-->
            `,
        );

        newContent = newContent.replace(importStatement, placedContent);
    }

    return newContent;
}
