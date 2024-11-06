import type { ExecutionTools } from '../../execution/ExecutionTools';
import type { PrepareAndScrapeOptions } from '../../prepare/PrepareAndScrapeOptions';
import type { ScraperConstructor } from '../_common/register/ScraperConstructor';
import { websiteScraperMetadata } from './register-metadata';
import { WebsiteScraper } from './WebsiteScraper';

/**
 * @@@
 *
 * @public exported from `@promptbook/website-crawler`
 */
export const createWebsiteScraper = Object.assign(
    (tools: Pick<ExecutionTools, 'llm'>, options: PrepareAndScrapeOptions): WebsiteScraper => {
        return new WebsiteScraper(tools, options);
    },
    websiteScraperMetadata,
) satisfies ScraperConstructor; /* <- TODO: [🤛] */

/**
 * TODO: [🎶] Naming "constructor" vs "creator" vs "factory"
 */
