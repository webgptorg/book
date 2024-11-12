import { spaceTrim } from 'spacetrim';

export function removeComments(content: string): string {
    return spaceTrim(content.replace(/<!--(.*?)-->/gs, ''));
}
