#!/usr/bin/env ts-node
// update-version-in-config.ts

import colors from 'colors';
import commander from 'commander';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { spaceTrim } from 'spacetrim';
import { version } from '../../package.json';
import { GENERATOR_WARNING } from '../../src/config';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';

if (process.cwd() !== join(__dirname, '../..')) {
    console.error(colors.red(`CWD must be root of the project`));
    process.exit(1);
}

const program = new commander.Command();
program.option('--commit', `Autocommit changes`, false);
program.parse(process.argv);

const { commit: isCommited } = program.opts();

generatePackages({ isCommited })
    .catch((error: Error) => {
        console.error(colors.bgRed(error.name /* <- 11:11 */));
        console.error(colors.red(error.stack || error.message));
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generatePackages({ isCommited }: { isCommited: boolean }) {
    console.info(`🆚 Update version in config`);

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    await writeFile(
        `./src/version.ts`, // <- Note: [🏳‍🌈] Maybe use json file (used .ts file (not .json) to avoid support of json files in bundle)
        spaceTrim(
            (block) => `
                // ${block(GENERATOR_WARNING)}

                import type { string_semantic_version } from './types/typeAliases';

                /**
                 * The version of the Promptbook library
                 */
                export const PROMPTBOOK_VERSION: string_promptbook_version = '${version}';

                export type string_promptbook_version = string_semantic_version;
                // TODO: [main] !!!! List here all the versions and annotate + put into script

            `,
        ),
    );

    // Note: Just append the version into loooong list
    // TODO: Is there a secure and simple way to write in append-only mode?
    // TODO: [🧠] Maybe handle this dynamically via `npm view ptbk/* versions` (but its not complete)

    const allVersions = await readFile(`./src/versions.txt`, 'utf-8');
    const newAllVersions = `${spaceTrim(allVersions)}\n${version}\n`;
    await writeFile(`./src/versions.txt`, newAllVersions, 'utf-8');

    if (isCommited) {
        await commit(['src'], `🆚 Update version in config`);
    }
}

/**
 * TODO: [main] !!! The version is lagged one behind the actual version
 * Note: [⚫] Code in this file should never be published in any package
 */
