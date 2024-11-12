import { spaceTrim } from 'spacetrim';

/**
 * Remove comments from the markdown content
 *
 * @param content The markdown content
 * @returns The markdown content without comments
 */
export function removeComments(content: string): string {
    return spaceTrim(content.replace(/<!--(.*?)-->/gs, ''));
}
