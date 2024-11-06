/**
 * @@@
 *
 * Note: Keep it public to allow people to make their own execution tools
 */
export type CommonToolsOptions = {
    /**
     * If true, the internal executions will be logged
     */
    readonly isVerbose?: boolean;
};

/**
 * TODO: [🈁] Maybe add here `isDeterministic`
 * TODO: [🧠][💙] Distinct between options passed into ExecutionTools and to ExecutionTools.execute
 */
