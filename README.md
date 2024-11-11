# ![Promptbook logo](https://github.com/webgptorg/promptbook/raw/main/other/design/logo-h1.png) Book language


<!--
!!!!!!! Better text

Promptbook [pipelines](https://github.com/webgptorg/promptbook/discussions/64) are written in custom markdown format [_(It it a best solution?!)_](https://github.com/webgptorg/promptbook/discussions/161) in our language called [Book / Shem / _(We need to decide)_](https://github.com/webgptorg/promptbook/discussions/162)
-->


<!--Import book/WHITEPAPER.md-->
<!--⚠️ WARNING: This section was imported, make changes in source -->
<!-- <- TODO: [💜] Actually implement the system for auto-imports -->

## 🤍 The Promptbook Whitepaper

<!-- TODO: [💜] !!!!!! Make some system to sync this section across the repositories dynamically -->

When you have a simple, single prompt for ChatGPT, GPT-4, Anthropic Claude, Google Gemini, Llama 3, or whatever, it doesn't matter how you integrate it. Whether it's calling a REST API directly, using the SDK, hardcoding the prompt into the source code, or importing a text file, the process remains the same.

But often you will struggle with the **limitations of LLMs**, such as **hallucinations, off-topic responses, poor quality output, language and prompt drift, word repetition repetition repetition repetition or misuse, lack of context, or just plain w𝒆𝐢rd resp0nses**. When this happens, you generally have three options:

1. **Fine-tune** the model to your specifications or even train your own.
2. **Prompt-engineer** the prompt to the best shape you can achieve.
3. Orchestrate **multiple prompts** in a [pipeline](https://github.com/webgptorg/promptbook/discussions/64) to get the best result.

In all of these situations, but especially in 3., the **✨ Promptbook can make your life waaaaaaaaaay easier**.

-   [**Separates concerns**](https://github.com/webgptorg/promptbook/discussions/32) between prompt-engineer and programmer, between code files and prompt files, and between prompts and their execution logic. For this purpose, it introduces a new language called [the **💙 Book**](https://github.com/webgptorg/book).
-   Book allows you to **focus on the business** logic without having to write code or deal with the technicalities of LLMs.
-   **Forget** about **low-level details** like choosing the right model, tokens, context size, `temperature`, `top-k`, `top-p`, or kernel sampling. **Just write your intent** and [**persona**](https://github.com/webgptorg/promptbook/discussions/22) who should be responsible for the task and let the library do the rest.
-   We have built-in **orchestration** of [pipeline](https://github.com/webgptorg/promptbook/discussions/64) execution and many tools to make the process easier, more reliable, and more efficient, such as caching, [compilation+preparation](https://github.com/webgptorg/promptbook/discussions/78), [just-in-time fine-tuning](https://github.com/webgptorg/promptbook/discussions/33), [expectation-aware generation](https://github.com/webgptorg/promptbook/discussions/37), [agent adversary expectations](https://github.com/webgptorg/promptbook/discussions/39), and more.
-   Sometimes even the best prompts with the best framework like Promptbook `:)` can't avoid the problems. In this case, the library has built-in **[anomaly detection](https://github.com/webgptorg/promptbook/discussions/40) and logging** to help you find and fix the problems.
-   Versioning is build in. You can test multiple **A/B versions** of pipelines and see which one works best.
-   Promptbook is designed to use [**RAG** (Retrieval-Augmented Generation)](https://github.com/webgptorg/promptbook/discussions/41) and other advanced techniques to bring the context of your business to generic LLM. You can use **knowledge** to improve the quality of the output.


<!--/Import ./WHITEPAPER.md-->

<!--
TODO: !!!!!! Remove
## 🔗 Links

-   [🤍 Promptbook whitepaper](https://github.com/webgptorg/promptbook?tab=readme-ov-file#-the-promptbook-whitepaper)
-   [✨ Examples](./examples)
-   [🖥 Promptbook typescript project](https://github.com/webgptorg/promptbook?tab=readme-ov-file#-the-promptbook-whitepaper)
-   [💫 Misc aspects of language](https://github.com/webgptorg/promptbook/discussions/categories/concepts?discussions_q=is%3Aopen+category%3AConcepts+label%3A%22%F0%9F%90%8A+Concept+working%22+label%3A.ptbk.md)
-   [💬 Discussion about how to name the book language](https://github.com/webgptorg/promptbook/discussions/162)

-->

<!--Import ./SIGNPOST.md-->
<!--⚠️ WARNING: This section was imported, make changes in source -->
<!-- <- TODO: [💜] Actually implement the system for auto-imports -->

## 💜 The Promptbook Project

Promptbook project is ecosystem of multiple projects and tools, following is a list of most important pieces of the project:

<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Description</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <!--
    <tr>
      <td>Promptbook whitepaper</td>
      <td>Basic motivations and problems which we are trying to solve</td>
      <td rowspan=3>https://github.com/webgptorg/book</td>
    </tr>
    -->
    <tr>
      <td>Core</td>
      <td>Promptbook core is a description and documentation of basic innerworkings how should be Promptbook implemented and defines which fetures must be descriable by book language</td>
      <td rowspan=2>https://ptbk.io<br/>https://github.com/webgptorg/book</td>
    </tr>
    <tr>
      <td>Book language</td>
      <td>
          Book is a markdown-like language to define core entities like projects, pipelines, knowledge,.... It is designed to be understandable by non-programmers and non-technical people
      </td>
    </tr>
    <tr>
      <td>Promptbook typescript project</td>
      <td>Implementation of Promptbook in TypeScript published into multiple packages to NPM</td>
      <td>https://github.com/webgptorg/promptbook + Multiple packages on NPM</td>
    </tr>
    <tr>
      <td>Promptbook studio</td>
      <td>No-code studio to write book without need to write even the markdown</td>
      <td rowspan=2>https://promptbook.studio<br/>https://github.com/hejny/promptbook-studio</td>
    </tr>
    <tr>
      <td>Promptbook miniapps</td>
      <td>Builder of LLM miniapps from book notation</td>
    </tr>
  </tbody>
</table>


<!--/Import ./SIGNPOST.md-->

<!--Import book/CORE.md-->
<!--⚠️ WARNING: This section was imported, make changes in source -->
<!-- <- TODO: [💜] Actually implement the system for auto-imports -->

## 💙 Core of the Promptbook

### Organization

*(legacy name collection)* group jobs, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources (= import resources from each other).



<!--/Import ./CORE.md-->

<!--Import book/BLUEPRINT.md-->
<!--⚠️ WARNING: This section was imported, make changes in source -->
<!-- <- TODO: [💜] Actually implement the system for auto-imports -->


# 💙 The blueprint of book language

Following is the documentation and blueprint of the Book language.

### Example

```markdown
# 🌟 My first Book

- PERSONA Jane, marketing specialist with prior experience in writing articles about technology and artificial intelligence
- KNOWLEDGE https://ptbk.io
- KNOWLEDGE ./promptbook.pdf
- EXPECT MIN 1 Sentence
- EXPECT MAX 1 Paragraph

> Write an article about the future of artificial intelligence in the next 10 years and how metalanguages will change the way AI is used in the world.
> Look specifically at the impact of Promptbook on the AI industry.

-> {article}
```

### Goals and principles of book language

File is designed to be easy to read and write. It is strict subset of markdown. It is designed to be understandable by both humans and machines and without specific knowledge of the language.

It has file with `.ptbk.md` or `.book` extension with `UTF-8` non BOM encoding.

As it is source code, it can leverage all the features of version control systems like git and does not suffer from the problems of binary formats, proprietary formats, or no-code solutions.

But unlike programming languages, it is designed to be understandable by non-programmers and non-technical people.

### Structure

Book is divided into sections. Each section starts with heading. The language itself is not sensitive to the type of heading _(`h1`, `h2`, `h3`, ...)_ but it is recommended to use `h1` for header section and `h2` for other sections.

### Header

Header is the first section of the book. It contains metadata about the pipeline. It is recommended to use `h1` heading for header section but it is not required.

### Parameter

Foo bar

#### Parameter names

Reserved words:

- _each command_ like `PERSONA`, `EXPECT`, `KNOWLEDGE`, etc.
- `content`
- `context`
- `knowledge`
- `examples`
- `modelName`
- `currentDate`

#### Parameter notation

### Template

Foo bar

### Command

Foo bar

### Block

Foo bar

### Return parameter

### Examples


<!--/Import ./BLUEPRINT.md-->




<!--Import book/DICTIONARY.md-->
<!--⚠️ WARNING: This section was imported, make changes in source -->
<!-- <- TODO: [💜] Actually implement the system for auto-imports -->

# 📚 Dictoniary

## General LLM / AI terms

*Note: Following is not complete dictionary, more list of general AI / LLM terms that has connection with Promptbook*


-   **Prompt drift** is a phenomenon where the AI model starts to generate outputs that are not aligned with the original prompt. This can happen due to the model's training data, the prompt's wording, or the model's architecture.
-   **Pipeline, workflow or chain** is a sequence of tasks that are executed in a specific order. In the context of AI, a pipeline can refer to a sequence of AI models that are used to process data.
-   **Fine-tuning** is a process where a pre-trained AI model is further trained on a specific dataset to improve its performance on a specific task.
-   **Zero-shot learning** is a machine learning paradigm where a model is trained to perform a task without any labeled examples. Instead, the model is provided with a description of the task and is expected to generate the correct output.
-   **Few-shot learning** is a machine learning paradigm where a model is trained to perform a task with only a few labeled examples. This is in contrast to traditional machine learning, where models are trained on large datasets.
-   **Meta-learning** is a machine learning paradigm where a model is trained on a variety of tasks and is able to learn new tasks with minimal additional training. This is achieved by learning a set of meta-parameters that can be quickly adapted to new tasks.
-  **Retrieval-augmented generation** is a machine learning paradigm where a model generates text by retrieving relevant information from a large database of text. This approach combines the benefits of generative models and retrieval models.

<!-- <- TODO: Better -->


## Promptbook core

- **Organization** *(legacy name collection)* group jobs, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources (= import resources from each other).
    - **Jobs** 
        - **Task**
        - **Subtask**
    - **Workforce** 
        - **Persona**
        - **Team**
        - **Role**
    - **Knowledge**
        - **P**
        - **Role**
    - **Instruments**
    - **Actions**

## Book language

- **Book file**
    - **Section**  
        - **Heading** 
        - **Description** 
        - **Command**
        - **Block** 
        - **Return statement**
    - **Comment**
    - **Import** 
    - **Scope**



<!--/Import ./DICTIONARY.md-->
