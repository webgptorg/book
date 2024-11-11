#!/usr/bin/env -S deno run --allow-env


/**
 * This script itterates over all markdown files in cwd
 * Searches for the `<!-- Import ./path/to/file.md -->`
 * and replaces it with the content of the imported file.
 */



import { walk } from "https://deno.land/std/fs/mod.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";

const cwd = Deno.cwd();

const files = walk(cwd, {
  includeDirs: false,
  exts: [".md"],
});

const importRegex = /<!-- Import (.*) -->/;

for await (const file of files) {
  const content = await Deno.readTextFile(file.path);

  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = importRegex.exec(line);

    if (match) {
      const importedFile = match[1];
      const importedContent = await Deno.readTextFile(
        `${cwd}/${importedFile}`,
      );

      lines[i] = importedContent;
    }
  }

  const newContent = lines.join("\n");

  await Deno.writeTextFile(file.path, newContent);
}