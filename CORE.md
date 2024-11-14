# 💙 Core of the Promptbook

## Organization

Organization groups together workflows, workforce, knowledge, instruments, and actions into one package. Entities in one organization can share resources _(i.e. import workflows, teams, personas, knowledge, instruments and actions from each other)_.

Each organization has unique URL, for example `https://promptbook.studio/my-cool-project/`.

## Workflow

Represents a piece of work that has exact input and output.

Private worfklows can be imported within the organization, public worfklows can be imported inside organization or used through unique url everywhere. Each workflow has unique URL, for example `https://promptbook.studio/my-cool-project/workflows/generate-website`.

As a programmer, you can imagine workflow as async function which can be used inside your code and exposes interface with record of input and record of output parameters but hides internal implementation.

### Task

Task is one step in a workflow. Each task is divided into two parts: actual task job and check that result of the job is correct.

Each task can use results from previous tasks. Tasks in a workflow forms a directed acyclic graph.

#### Task job

Task job is actual work that needs to be done. It can be:

-   **Asking persona** to do a job, this is higher abstraction of calling model
-   **Asking user** to do a job
-   **Search in knowledgebase** for information
-   **Using action** to do some external work and get the result
-   **Using instrument** for example a calculator
-   **Simple template** to just concatenate parameters to hardcoded template
-   **Script execution** to run custom _(Python/JavaScript/TypeScript/...)_ code
-   **Calling model** to do a job directly and get around organization workforce, for example calling GPTs Assistant

#### Task check

After task job is done, result can be checked if it is correct. If it is not correct, task is repeated certain amount of times.

**You can expect:**

-   **Result** is in expected format, for example aviable domain name
-   **Result** is in expected range, for example **between 1 sentence and 2 paragraphs**
-   **Advesarial check** by another persona to approve the result

## Workforce

Workforce an abstraction above LLM models, tokens, temperature, top-k, top-p, and other model parameters.
You can describe what you desire in human language like `Jane, creative writer with sence of sharp humor` instead of `gpt-4-2024-13-31, temperature 1.2, top-k 40, STOP token ".\n",...`.

### Persona

Persona basic unit of workforce. Persona is defined by its description, for example `Jane, creative writer with sence of sharp humor`.

This persona description is used to select best model and parameters for the job. If the persona has conflicting requirements, Promptbook will try to find the best compromise or even combine multiple models to achieve the best result.

> For example, `Josh, lawer with perfect language and logic capabilities and strong sence of privacy` is not possible to achieve with one model - big models like `GPT-4` or `Claude-3.5` are great for language and logic, but they are sending data to the cloud. On the other hand, `LLAMA-3` is great for privacy, but it is not so good in language and logic. so Promptbook will make ad-hoc meta-model from `LLAMA-3` which strips all data and `GPT-4` which is used for language and logic and back to `LLAMA-3` to add back sensitive data.

Each persona can have access to different knowledge, instruments, and actions.

### Team

Team groups personas together. Team can also group another teams to form a complex responsibility hierarchy.
Each team can have access to different knowledge, instruments, and actions.

### Role

Role is a ad-hoc modification of persona. Role can be defined for specific task, for example `Jane (email writer)`.
Rolehave access to same knowledge, instruments, and actions as its parent persona.

## Knowledge

Knowledge is external information that is used in task jobs. Knowledge can be:

-   `Explicit` as a text directly in the workflow, team, or persona
-   `File` which is referenced from the workflow, team, or persona
    We support various file types like `pdf`, `docx`, `txt`, `md`, `odt`, `doc`, `rtf`,... and it is possible to add support very easily for another file types
    The file is parsed and stored in the knowledgebase
-   `Website` which is referenced from the workflow, team, or persona
    The website is scraperd and stored in the knowledgebase

### Knowledge piece

Knowledge piece is a smallest unit of knowledge which makes sense by its own. Every type of knowledge explicit, file, or website is parsed/scraperd and divided into knowledge pieces. These pieces are indexed, put into knowledgebase, and can be used in task jobs via techniques like Retrieval-augmented generation.

## Instruments

Instruments are external information that cannot be pre-scraped but needs to be fetched at the moment of task job. For example:

-
-   Current **Time and date**
-   User's **Location**
-   **Searching** the internet
-   Computing some **mathematical expression**
-   **Weather** in some location
-   **Stock price** of some company
-   Aviability of some **Domain name**
-   Calling **GET** endpoint of some API

This is an abstraction above function calling and API calling in models.

## Actions

Actions are similar to instruments but they can change the state of the world. For example:

-   **Sending email**
-   **Creating a file**
-   **Ending a workflow**
-   Calling **POST** endpoint of some API
