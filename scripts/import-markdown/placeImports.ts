import spaceTrim from 'spacetrim';
import { GENERATOR_WARNING, IMPORT_REGEX } from '../config';
import { removeComments } from './removeComments';

export async function placeImports(
    content: string,
    getFileContent: (importPath: string) => Promise<string>,
): Promise<string> {
    const importMatches = content.matchAll(IMPORT_REGEX);

    let newContent = content;

    for (const importMatch of importMatches) {
        const importPath = importMatch.groups!.importPath;
        const importStatement = importMatch[0];

        console.log({ importPath, importStatement });

        if (!importPath) {
            throw new Error(`Invalid import statement: ${importStatement}`);
        }

        let importedContent = await getFileContent(importPath);

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
