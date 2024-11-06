import { describe, expect, it } from '@jest/globals';
import { extractParameterNamesFromTemplate } from './extractParameterNamesFromTemplate';

describe('extractParameterNamesFromTemplate', () => {
    it('should parse parameters from template', () => {
        const template = {
            title: 'name of {foo}',
            description: 'description of {foo} and {bar}',
            templateType: 'PROMPT_TEMPLATE',
            content: 'hello {name}',
        } as const;

        expect(extractParameterNamesFromTemplate(template)).toContain('foo');
        expect(extractParameterNamesFromTemplate(template)).toContain('bar');
        expect(extractParameterNamesFromTemplate(template)).toContain('name');
    });

    it('should parse parameters from javascript script', () => {
        expect(
            extractParameterNamesFromTemplate({
                title: 'Script',
                templateType: 'SCRIPT_TEMPLATE',
                content: 'const greeting = hello;',
            }),
        ).toContain('hello');
    });
});
