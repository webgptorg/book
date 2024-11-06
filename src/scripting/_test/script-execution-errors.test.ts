import { describe, expect, it } from '@jest/globals';
import { spaceTrim } from 'spacetrim';
import { pipelineStringToJson } from '../../conversion/pipelineStringToJson';
import { CallbackInterfaceTools } from '../../dialogs/callback/CallbackInterfaceTools';
import { assertsExecutionSuccessful } from '../../execution/assertsExecutionSuccessful';
import { createPipelineExecutor } from '../../execution/createPipelineExecutor/00-createPipelineExecutor';
import { MockedEchoLlmExecutionTools } from '../../llm-providers/mocked/MockedEchoLlmExecutionTools';
import type { PipelineString } from '../../types/PipelineString';
import { JavascriptExecutionTools } from '../javascript/JavascriptExecutionTools';

describe('createPipelineExecutor + executing scripts in promptbook', () => {
    it('should work when every INPUT  PARAMETER is allowed', async () => {
        const pipelineExecutor = await getPipelineExecutor();

        expect(pipelineExecutor({ thing: 'a cup of coffee' }, () => {})).resolves.toMatchObject({
            isSuccessful: true,
            errors: [],
            outputParameters: {
                bhing: 'b cup of coffee',
            },
        });
        expect(pipelineExecutor({ thing: 'arrow' }, () => {})).resolves.toMatchObject({
            isSuccessful: true,
            errors: [],
            outputParameters: {
                bhing: 'brrow',
            },
        });
        expect(pipelineExecutor({ thing: 'aaa' }, () => {})).resolves.toMatchObject({
            isSuccessful: true,
            errors: [],
            outputParameters: {
                bhing: 'bbb',
            },
        });
    });

    it('should fail when INPUT  PARAMETER is NOT allowed', async () => {
        const pipelineExecutor = await getPipelineExecutor();

        for (const thing of ['apple', 'apples', 'an apple', 'Apple', 'The Apple', '🍏 Apple', 'Apple 🍎']) {
            expect(pipelineExecutor({ thing }, () => {})).resolves.toMatchObject({
                isSuccessful: false,
                errors: [/Error: I do not like Apples!/i],
                warnings: [
                    /PipelineExecutionError: Parameter {bhing} should be an output parameter, but it was not generated/i,
                ],
            });

            expect(() => pipelineExecutor({ thing }, () => {}).then(assertsExecutionSuccessful)).rejects.toThrowError(
                /I do not like Apples!/i,
            );
        }
    });
});

async function getPipelineExecutor() {
    const pipeline = await pipelineStringToJson(
        spaceTrim(`
            # Sample prompt

            Show how to execute a script

            -   PROMPTBOOK VERSION 1.0.0
            -   INPUT  PARAMETER {thing} Any thing to buy
            -   OUTPUT PARAMETER {bhing}

            ## Execution

            -   SCRIPT TEMPLATE

            \`\`\`javascript
            if(/Apple/i.test(thing)){
                throw new Error('I do not like Apples!');
            }
            return thing.split('a').join('b')
            \`\`\`

            -> {bhing}
       `) as PipelineString,
    );
    const pipelineExecutor = createPipelineExecutor({
        pipeline,
        tools: {
            llm: new MockedEchoLlmExecutionTools({ isVerbose: true }),
            script: [
                new JavascriptExecutionTools({
                    isVerbose: true,
                    // Note: [🕎] Custom functions are tested elsewhere
                }),
            ],
            userInterface: new CallbackInterfaceTools({
                isVerbose: true,
                async callback() {
                    return 'Hello';
                },
            }),
        },
    });

    return pipelineExecutor;
}
