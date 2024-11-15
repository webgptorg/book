# ![Promptbook logo](https://github.com/webgptorg/promptbook/raw/main/other/design/logo-h1.png) Book language

Build responsible, controlled and transparent applications on top of LLM models written in the **next-generation language - the Book**!

<!--Import ./WHITEPAPER.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 🤍 The Promptbook Whitepaper

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

<!--Import ./SIGNPOST.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

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

<!--Import ./CORE.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 💙 Core of the Promptbook

### 🏛 Organization

Organization groups together workflows, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources _(i.e. import workflows, teams, personas, knowledge, instruments and actions from each other)_.

Each organization has a unique URL; for example, `https://promptbook.studio/my-cool-project/`.

### 🏗 Workflow

A workflow represents a piece of work that has specific input and output.

Private workflows can be imported within the organization, while public workflows can be imported inside the organization or used everywhere through their unique URLs. Each workflow has a unique URL; for example, `https://promptbook.studio/my-cool-project/workflows/generate-website`.

As a programmer, you can imagine a workflow as an async function that can be used inside your code. It exposes an interface with a record of input and output parameters but hides the internal implementation.

You can use workflows in other workflows, use it in classic programming languages as async functions that can be called, [run workflow in CLI](https://github.com/webgptorg/hello-world), or use Promptbook Studio to **create instant miniapps**.

#### Task

A task is one step in a workflow. Each task is divided into two parts: the actual task job and a check that the result of the job is correct.

Each task can use results from previous tasks. Tasks in a workflow form a directed acyclic graph.

##### Task job

A task job is the actual work that needs to be done. It can be:

-   **Asking a persona** to do a job; this is a higher abstraction of the calling model
-   **Asking the user** to do a job
-   **Searching the knowledge base** for information
-   **Using an action** to perform external work and get the result
-   **Using an instrument**, for example, a calculator
-   **A simple template** to concatenate parameters to a hardcoded template
-   **Script execution** to run custom code _(Python/JavaScript/TypeScript/...)_
-   **Calling a model** directly to perform a job, bypassing the organization's workforce—for example, calling GPT's Assistant

##### Task check

After the task job is done, the result can be checked to see if it is correct. If it is not correct, the task is repeated a certain number of times.

**You can expect:**

-   **Result** is in the expected format; for example, an available domain name
-   **Result** is in the expected range; for example, **between 1 sentence and 2 paragraphs**
-   **Adversarial check** by another persona to approve the result

### 🏋️‍♂️ Workforce

The workforce is an abstraction above LLM models, tokens, temperature, top-k, top-p, and other model parameters. You can describe what you desire in human language like `Jane, creative writer with a sense of sharp humor` instead of `gpt-4-2024-13-31, temperature 1.2, top-k 40, STOP token ".\n",...`.

#### Persona

A persona is the basic unit of the workforce. It is defined by its description; for example, `Jane, creative writer with a sense of sharp humor`.

This persona description is used to select the best model and parameters for the job. If the persona has conflicting requirements, Promptbook will try to find the best compromise or even combine multiple models to achieve the best result.

> For example, `Josh, lawyer with perfect language and logic capabilities and a strong sense of privacy` is not possible to achieve with one model. Big models like `GPT-4` or `Claude-3.5` are great for language and logic, but they send data to the cloud. On the other hand, `LLAMA-3` is great for privacy but not as strong in language and logic. Therefore, Promptbook will create an ad-hoc meta-model using `LLAMA-3` to strip all data, `GPT-4` for language and logic, and then back to `LLAMA-3` to reintroduce sensitive data.

Each persona can have access to different knowledge, instruments, and actions.

#### Team

A team groups personas together. A team can also group other teams to form a complex responsibility hierarchy. Each team can have access to different knowledge, instruments, and actions.

#### Role

A role is an ad-hoc modification of a persona. A role can be defined for a specific task; for example, `Jane (email writer)`. Roles have access to the same knowledge, instruments, and actions as their parent persona.

### 💡 Knowledge

Knowledge is external information that is used in task jobs. Knowledge can be:

-   `Explicit` as a text directly in the workflow, team, or persona
-   `File` which is referenced from the workflow, team, or persona
    We support various file types like `pdf`, `docx`, `txt`, `md`, `odt`, `doc`, `rtf`, and it's possible to easily add support for other file types. The file is parsed and stored in the knowledge base
-   `Website` which is referenced from the workflow, team, or persona
    The website is scraped and stored in the knowledge base

#### Knowledge piece

A knowledge piece is the smallest unit of knowledge that makes sense on its own. Every type of knowledge—explicit text, file, or website—is parsed/scraped and divided into knowledge pieces. These pieces are indexed, put into the knowledge base, and can be used in task jobs via techniques like retrieval-augmented generation.

### 🛠 Instruments

Instruments are external information that cannot be pre-scraped and need to be fetched at the moment of the task job. For example:

-   Current **Time and date**
-   User's **Location**
-   **Searching** the internet
-   Computing some **mathematical expression**
-   **Weather** in some location
-   **Stock price** of some company
-   Availability of some **Domain name**
-   Calling a **GET** endpoint of an API

This is an abstraction above function calling and API calling in models.

### ☎ Actions

Actions are similar to instruments but can change the state of the world. For example:

-   **Sending email**
-   **Creating a file**
-   **Ending a workflow**
-   Calling a **POST** endpoint of an API

<!--/Import ./CORE.md-->

<!--Import ./BLUEPRINT.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 💙 The blueprint of book language

Following is the documentation and blueprint of the Book language.

### Example

```markdown
# 🌟 My first Book

-   PERSONA Jane, marketing specialist with prior experience in writing articles about technology and artificial intelligence
-   KNOWLEDGE https://ptbk.io
-   KNOWLEDGE ./promptbook.pdf
-   EXPECT MIN 1 Sentence
-   EXPECT MAX 1 Paragraph

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

-   _each command_ like `PERSONA`, `EXPECT`, `KNOWLEDGE`, etc.
-   `content`
-   `context`
-   `knowledge`
-   `examples`
-   `modelName`
-   `currentDate`

#### Parameter notation

### Template

Todo todo

### Command

Todo todo

### Block

Todo todo

### Return parameter

### Examples

<!--/Import ./BLUEPRINT.md-->

<!--Import ./DICTIONARY.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 📚 Dictionary

The following glossary is used to clarify certain concepts:

### General LLM / AI terms

-   **Prompt drift** is a phenomenon where the AI model starts to generate outputs that are not aligned with the original prompt. This can happen due to the model's training data, the prompt's wording, or the model's architecture.
-   **Pipeline, workflow or chain** is a sequence of tasks that are executed in a specific order. In the context of AI, a pipeline can refer to a sequence of AI models that are used to process data.
-   **Fine-tuning** is a process where a pre-trained AI model is further trained on a specific dataset to improve its performance on a specific task.
-   **Zero-shot learning** is a machine learning paradigm where a model is trained to perform a task without any labeled examples. Instead, the model is provided with a description of the task and is expected to generate the correct output.
-   **Few-shot learning** is a machine learning paradigm where a model is trained to perform a task with only a few labeled examples. This is in contrast to traditional machine learning, where models are trained on large datasets.
-   **Meta-learning** is a machine learning paradigm where a model is trained on a variety of tasks and is able to learn new tasks with minimal additional training. This is achieved by learning a set of meta-parameters that can be quickly adapted to new tasks.
-   **Retrieval-augmented generation** is a machine learning paradigm where a model generates text by retrieving relevant information from a large database of text. This approach combines the benefits of generative models and retrieval models.
-   **Longtail** refers to non-common or rare events, items, or entities that are not well-represented in the training data of machine learning models. Longtail items are often challenging for models to predict accurately.



_Note: Thos section is not complete dictionary, more list of general AI / LLM terms that has connection with Promptbook_

### Promptbook core

-   **Organization** _(legacy name collection)_ group jobs, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources (= import resources from each other).
    -   **Jobs**
        -   **Task**
        -   **Subtask**
    -   **Workforce**
        -   **Persona**
        -   **Team**
        -   **Role**
    -   **Knowledge**
        -   **Public**
        -   **Private**
        -   **Protected**
    -   **Instruments**
    -   **Actions**

### Book language

-   **Book file**
    -   **Section**
        -   **Heading**
        -   **Description**
        -   **Command**
        -   **Block**
        -   **Return statement**
    -   **Comment**
    -   **Import**
    -   **Scope**

### 💯 Core concepts

-   [📚 Collection of pipelines](https://github.com/webgptorg/promptbook/discussions/65)
-   [📯 Pipeline](https://github.com/webgptorg/promptbook/discussions/64)
-   [🎺 Pipeline templates](https://github.com/webgptorg/promptbook/discussions/88)
-   [🤼 Personas](https://github.com/webgptorg/promptbook/discussions/22)
-   [⭕ Parameters](https://github.com/webgptorg/promptbook/discussions/83)
-   [🚀 Pipeline execution](https://github.com/webgptorg/promptbook/discussions/84)
-   [🧪 Expectations](https://github.com/webgptorg/promptbook/discussions/30)
-   [✂️ Postprocessing](https://github.com/webgptorg/promptbook/discussions/31)
-   [🔣 Words not tokens](https://github.com/webgptorg/promptbook/discussions/29)
-   [☯ Separation of concerns](https://github.com/webgptorg/promptbook/discussions/32)

#### Advanced concepts

-   [📚 Knowledge (Retrieval-augmented generation)](https://github.com/webgptorg/promptbook/discussions/41)
-   [🌏 Remote server](https://github.com/webgptorg/promptbook/discussions/89)
-   [🃏 Jokers (conditions)](https://github.com/webgptorg/promptbook/discussions/66)
-   [🔳 Metaprompting](https://github.com/webgptorg/promptbook/discussions/35)
-   [🌏 Linguistically typed languages](https://github.com/webgptorg/promptbook/discussions/53)
-   [🌍 Auto-Translations](https://github.com/webgptorg/promptbook/discussions/42)
-   [📽 Images, audio, video, spreadsheets](https://github.com/webgptorg/promptbook/discussions/54)
-   [🔙 Expectation-aware generation](https://github.com/webgptorg/promptbook/discussions/37)
-   [⏳ Just-in-time fine-tuning](https://github.com/webgptorg/promptbook/discussions/33)
-   [🔴 Anomaly detection](https://github.com/webgptorg/promptbook/discussions/40)
-   [👮 Agent adversary expectations](https://github.com/webgptorg/promptbook/discussions/39)
-   [view more](https://github.com/webgptorg/promptbook/discussions/categories/concepts)

<!--/Import ./DICTIONARY.md-->
