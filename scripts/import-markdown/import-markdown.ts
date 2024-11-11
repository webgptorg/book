#!/usr/bin/env -S deno run --allow-env --allow-read --allow-sys

/**
 * This script itterates over all markdown files in cwd
 * Searches for the `<!-- Import ./path/to/file.md -->`
 * and replaces it with the content of the imported file.
 */

import { walk } from 'https://deno.land/std/fs/mod.ts';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import colors from 'colors';
import { replaceImports } from './replaceImports.ts';

const cwd = process.cwd();

const files = walk(cwd, {
    includeDirs: false,
    exts: ['.md'],
    // <- TODO: Exclude `node_modules`
});

for await (const file of files) {
    if (file.isFile === false) {
        continue;
    }

    if (file.path.endsWith('.ptbk.md')) {
        continue;
    }

    console.log(colors.gray(file.path));
    //console.log(file);

    const content = await readFile(file.path, 'utf-8');
    const newContent = replaceImports(content, async (importedPath: string) =>
        readFile(join(file.path, importedPath), 'utf-8'),
    );
}
