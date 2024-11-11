import { describe, expect, it } from '@jest/globals';
import { spaceTrim } from 'spacetrim';
import { replaceImports } from './replaceImports';

describe('how replacing imports works', () => {
    it('should keep markdown without imports', () =>
        expect(
            replaceImports(
                spaceTrim(`
                    # Heading

                    Foo bar baz
                `),
                () => {},
            ),
        ).resolves.toBe(
            spaceTrim(`
                    # Heading

                    Foo bar baz
            `),
        ));

    it('should replace imports', () =>
        expect(
            replaceImports(
                spaceTrim(`
                      # Heading

                      Foo bar baz
                  `),
                () => {},
            ),
        ).resolves.toBe(
            spaceTrim(`
                      # Heading

                      Foo bar baz
              `),
        ));

    it('should replace multiple levels of imports', () =>
        expect(
            replaceImports(
                spaceTrim(`
                      # Heading

                      Foo bar baz
                  `),
                () => {},
            ),
        ).resolves.toBe(
            spaceTrim(`
                      # Heading

                      Foo bar baz
              `),
        ));
});
