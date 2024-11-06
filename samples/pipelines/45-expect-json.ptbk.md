# ✨ Sample: Parsing data to JSON

-   PIPELINE URL https://promptbook.studio/samples/expect-json.ptbk.md
-   INPUT  PARAMETER {sentence} Sentence to be processed
-   OUTPUT PARAMETER `{parsedSentence}`

<!--Graph-->
<!-- ⚠️ WARNING: This code has been generated so that any manual changes will be overwritten -->

```mermaid
%% 🔮 Tip: Open this on GitHub or in the VSCode website to see the Mermaid graph visually

flowchart LR
  subgraph "✨ Sample: Parsing data to JSON"

      direction TB

      input((Input)):::input
      templateQuestion("💬 Question")
      input--"{sentence}"-->templateQuestion

      templateQuestion--"{parsedSentence}"-->output
      output((Output)):::output

      click templateQuestion href "#question" "💬 Question";

      classDef input color: grey;
      classDef output color: grey;

  end;
```

<!--/Graph-->

## 💬 Question

-   MODEL VARIANT Completion
-   MODEL NAME `gpt-3.5-turbo-instruct`
-   POSTPROCESSING `trimEndOfCodeBlock`
-   FORMAT JSON

```
Dark horse hopping over the fence.

\`\`\`json
{
  "subject": "horse",
  "action": "hopping",
  "object": "fence"
}
\`\`\`

---

{sentence}

\`\`\`json
```

`-> {parsedSentence}`

### Sample

Sample must pass the expectations

-   SAMPLE

```json
{
    "subject": "dog",
    "action": "running",
    "object": "park"
}
```

`-> {parsedSentence}`
