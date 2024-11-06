import type { AvailableModel } from '../../../execution/AvailableModel';

/**
 * Socket.io error for remote text generation
 *
 * This is sent from server to client when models are listed
 */
export type PromptbookServer_ListModels_Response = {
    /**
     * Available models that can be used
     */
    readonly models: ReadonlyArray<AvailableModel>;
};

/**
 * TODO: [👒] Listing models (and checking configuration) probbably should go through REST API not Socket.io
 */
