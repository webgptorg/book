/**
 *
 * @param content
 */
export async function replaceImports(
    content: string,
    getFileContent: (importedPath: string) => Promise<string>,
): Promise<string> {
    return content;
}
