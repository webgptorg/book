# 💙 The Book language

<!-- Nonce: 1 -->

Following is the documentation and blueprint of the Book language.

## Example

```markdown
# 🌟 My first Book

-   BOOK VERSION 1.0.0
-   URL https://promptbook.studio/my-first-book/

# Write an article

-   PERSONA Jane, marketing specialist with prior experience in writing articles about technology and artificial intelligence
-   KNOWLEDGE https://ptbk.io
-   KNOWLEDGE ./promptbook.pdf
-   EXPECT MIN 1 Sentence
-   EXPECT MAX 1 Paragraph

> Write an article about the future of artificial intelligence in the next 10 years and how metalanguages will change the way AI is used in the world.
> Look specifically at the impact of Promptbook on the AI industry.

-> {article}
```

## **What:** Workflows, Tasks and Parameters

-   [PARAMETER](https://github.com/webgptorg/promptbook/blob/main/documents/commands/PARAMETER.md)

## **Who:** Personas

-   [PERSONA](https://github.com/webgptorg/promptbook/blob/main/documents/commands/PERSONA.md)

## **How:** Knowledge, Instruments and Actions

-   [KNOWLEDGE](https://github.com/webgptorg/promptbook/blob/main/documents/commands/KNOWLEDGE.md)
-   [INSTRUMENT](https://github.com/webgptorg/promptbook/blob/main/documents/commands/INSTRUMENT.md)
-   [ACTION](https://github.com/webgptorg/promptbook/blob/main/documents/commands/ACTION.md)

## General principles of book language

Book language is based on markdown. It is subset of markdown. It is designed to be easy to read and write. It is designed to be understandable by both humans and machines and without specific knowledge of the language.

The file has `.book` extension. It uses `UTF-8` non BOM encoding.

Book has two variants: flat - which is just a prompt with no structure, and full - which has a structure with tasks, commands and prompts.

As it is source code, it can leverage all the features of version control systems like git and does not suffer from the problems of binary formats, proprietary formats, or no-code solutions.

But unlike programming languages, it is designed to be understandable by non-programmers and non-technical people.

<!--
## 🏛 Organization

Organization groups together workflows, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources _(i.e. import workflows, teams, personas, knowledge, instruments and actions from each other)_.

Each organization has a unique URL; for example, `https://promptbook.studio/my-cool-project/`.

## 🏗 Workflow

A workflow represents a piece of work that has specific input and output.

Private workflows can be imported within the organization, while public workflows can be imported inside the organization or used everywhere through their unique URLs. Each workflow has a unique URL; for example, `https://promptbook.studio/my-cool-project/workflows/generate-website`.

As a programmer, you can imagine a workflow as an async function that can be used inside your code. It exposes an interface with a record of input and output parameters but hides the internal implementation.

You can use workflows in other workflows, use it in classic programming languages as async functions that can be called, [run workflow in CLI](https://github.com/webgptorg/hello-world), or use Promptbook Studio to **create instant miniapps**.

### Task

A task is one step in a workflow. Each task is divided into two parts: the actual task job and a check that the result of the job is correct.

Each task can use results from previous tasks. Tasks in a workflow form a directed acyclic graph.

#### Task job

A task job is the actual work that needs to be done. It can be:

-   **Asking a persona** to do a job; this is a higher abstraction of the calling model
-   **Asking the user** to do a job
-   **Searching the knowledge base** for information
-   **Using an action** to perform external work and get the result
-   **Using an instrument**, for example, a calculator
-   **A simple template** to concatenate parameters to a hardcoded template
-   **Script execution** to run custom code _(Python/JavaScript/TypeScript/...)_
-   **Calling a model** directly to perform a job, bypassing the organization's workforce—for example, calling GPT's Assistant

#### Task check

After the task job is done, the result can be checked to see if it is correct. If it is not correct, the task is repeated a certain number of times.

**You can expect:**

-   **Result** is in the expected format; for example, an available domain name
-   **Result** is in the expected range; for example, **between 1 sentence and 2 paragraphs**
-   **Adversarial check** by another persona to approve the result

## 🏋️‍♂️ Workforce

The workforce is an abstraction above LLM models, tokens, temperature, top-k, top-p, and other model parameters. You can describe what you desire in human language like `Jane, creative writer with a sense of sharp humor` instead of `gpt-4-2024-13-31, temperature 1.2, top-k 40, STOP token ".\n",...`.

### Persona

A persona is the basic unit of the workforce. It is defined by its description; for example, `Jane, creative writer with a sense of sharp humor`.

This persona description is used to select the best model and parameters for the job. If the persona has conflicting requirements, Promptbook will try to find the best compromise or even combine multiple models to achieve the best result.

> For example, `Josh, lawyer with perfect language and logic capabilities and a strong sense of privacy` is not possible to achieve with one model. Big models like `GPT-4` or `Claude-3.5` are great for language and logic, but they send data to the cloud. On the other hand, `LLAMA-3` is great for privacy but not as strong in language and logic. Therefore, Promptbook will create an ad-hoc meta-model using `LLAMA-3` to strip all data, `GPT-4` for language and logic, and then back to `LLAMA-3` to reintroduce sensitive data.

Each persona can have access to different knowledge, instruments, and actions.

### Team

A team groups personas together. A team can also group other teams to form a complex responsibility hierarchy. Each team can have access to different knowledge, instruments, and actions.

### Role

A role is an ad-hoc modification of a persona. A role can be defined for a specific task; for example, `Jane (email writer)`. Roles have access to the same knowledge, instruments, and actions as their parent persona.

## 💡 Knowledge

Knowledge is external information that is used in task jobs. Knowledge can be:

-   `Explicit` as a text directly in the workflow, team, or persona
-   `File` which is referenced from the workflow, team, or persona
    We support various file types like `pdf`, `docx`, `txt`, `md`, `odt`, `doc`, `rtf`, and it's possible to easily add support for other file types. The file is parsed and stored in the knowledge base
-   `Website` which is referenced from the workflow, team, or persona
    The website is scraped and stored in the knowledge base

### Knowledge piece

A knowledge piece is the smallest unit of knowledge that makes sense on its own. Every type of knowledge—explicit text, file, or website—is parsed/scraped and divided into knowledge pieces. These pieces are indexed, put into the knowledge base, and can be used in task jobs via techniques like retrieval-augmented generation.

## 🛠 Instruments

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

## ☎ Actions

Actions are similar to instruments but can change the state of the world. For example:

-   **Sending email**
-   **Creating a file**
-   **Ending a workflow**
-   Calling a **POST** endpoint of an API

<!-- GRM 2024-11 -->
