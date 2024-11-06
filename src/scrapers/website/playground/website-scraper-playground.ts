#!/usr/bin/env ts-node

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import colors from 'colors'; // <- TODO: [🔶] Make system to put color and style to both node and browser
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { stringifyPipelineJson } from '../../../conversion/utils/stringifyPipelineJson';
import { titleToName } from '../../../conversion/utils/titleToName';
import { usageToHuman } from '../../../execution/utils/usageToHuman';
import { $provideLlmToolsForTestingAndScriptsAndPlayground } from '../../../llm-providers/_common/register/$provideLlmToolsForTestingAndScriptsAndPlayground';
import { $provideFilesystemForNode } from '../../_common/register/$provideFilesystemForNode';
import { makeKnowledgeSourceHandler } from '../../_common/utils/makeKnowledgeSourceHandler';
import { WebsiteScraper } from '../WebsiteScraper';

playground()
    .catch((error) => {
        console.error(colors.bgRed(error.name || 'NamelessError'));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function playground() {
    console.info(`🧸  Scrape knowledge from Markdown (playground)`);

    // Do here stuff you want to test
    //========================================>

    const sample = 'https://www.pavolhejny.com/'; // <- TODO: Not scraping really important information, just one-two paragraph
    //const sample = 'https://koralkykatlas.cz/cs/blog/prispevek/-rijna-zhorseni-kvality-kovove-bizuterie.html';
    //               <- TODO: [👩🏿‍🤝‍👩🏼] Read here website-scraper-playground.ts and itterate

    const llmTools = $provideLlmToolsForTestingAndScriptsAndPlayground({ isCacheReloaded: true });
    const rootDirname = join(__dirname, 'samples');

    const websiteScraper = new WebsiteScraper(
        { llm: $provideLlmToolsForTestingAndScriptsAndPlayground() },
        {
            rootDirname,
        },
    );

    const source = await makeKnowledgeSourceHandler(
        { sourceContent: sample },
        { fs: $provideFilesystemForNode() },
        { rootDirname },
    );

    const converted = await websiteScraper.$convert(source);

    console.info(colors.bgGreen(' Converted: '), converted);

    const knowledge = await websiteScraper.scrape(source);

    console.info(colors.cyan(usageToHuman(llmTools.getTotalUsage())));
    console.info(colors.bgGreen(' Knowledge: '));
    console.info(knowledge);

    await writeFile(
        join(
            __dirname,
            `../samples/${titleToName(
                sample,
            )}.knowledge.json` /* <- TODO: [👩🏿‍🤝‍👩🏼] Read here the samples directory and itterate through all of them */,
        ),
        stringifyPipelineJson(knowledge),
        'utf-8',
    );
    /**/

    //========================================/
}

/**
 * Note: [⚫] Code in this file should never be published in any package
 */
