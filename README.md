# ![Promptbook logo](https://github.com/webgptorg/promptbook/raw/main/design/logo-h1.png) Book language

<!--Import ./ABSTRACT.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 🤍 The Book Abstract

**It's time for a paradigm shift! The future of software is in plain English, French or Latin.**

During the computer revolution, we have seen [multiple generations of computer languages](https://github.com/webgptorg/promptbook/discussions/180), from the physical rewiring of the vacuum tubes through low-level machine code to the high-level languages like Python or JavaScript. And now, we're on the edge of the **next revolution**!



It's a revolution of writing software in **plain human language** that is understandable and executable by both humans and machines – and it's going to change everything!

The incredible growth in power of microprocessors and the Moore's Law have been the driving force behind the ever-more powerful languages, and it's been an amazing journey! Similarly, the large language models (like GPT or Claude) are the next big thing in language technology, and they're set to transform the way we interact with computers.

This shift is going to happen, whether we are ready for it or not. Our mission is to make it excellently, not just good.

**Join us in this journey!**

<!--/Import ./ABSTRACT.md-->

<!--Import ./SIGNPOST.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 💜 The Promptbook Project

Promptbook project is ecosystem of multiple projects and tools, following is a list of most important pieces of the project:

<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>About</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/webgptorg/book">Book language</a></td>
      <td>
          Book is a human-understandable markup language for writing AI applications such as chatbots, knowledge bases, agents, avarars, translators, automations and more.
          <hr>
          There is also <a href="https://github.com/webgptorg/book-extension">a plugin for VSCode</a> to support <code>.book</code> file extension
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/webgptorg/promptbook">Promptbook Engine</a></td>
      <td>
          Promptbook engine can run applications written in Book language. It is released as <a href="https://www.npmjs.com/package/@promptbook/core#-packages-for-developers">multiple NPM packages</a> and <a href="https://hub.docker.com/r/hejny/promptbook">Docker HUB</a>
      </td>
    </tr>
    <tr>
      <td><a href="https://promptbook.studio">Promptbook Studio</a></td>
      <td>
          Promptbook.studio is a web-based editor and runner for book applications. It is still in the experimental MVP stage.
      </td>
    </tr>
  </tbody>
</table>

We also have a community of developers and users of **Promptbook**:

-   [Discord community](https://discord.gg/x3QWNaa89N)
-   [Landing page `ptbk.io`](https://ptbk.io)
-   [Github discussions](https://github.com/webgptorg/promptbook/discussions)
-   [LinkedIn `Promptbook`](https://linkedin.com/company/promptbook)
-   [Facebook `Promptbook`](https://www.facebook.com/61560776453536) 

And **Promptbook.studio** branded socials:



-   [Instagram `@promptbook.studio`](https://www.instagram.com/promptbook.studio/)

And **Promptujeme** sub-brand:

_/Subbrand for Czech clients/_




-   [Promptujeme.cz](https://www.promptujeme.cz/)
-   [Facebook `Promptujeme`](https://www.facebook.com/promptujeme/)

And **Promptbook.city** branded socials:

_/Sub-brand for images and graphics generated via Promptbook prompting/_

-   [Instagram `@promptbook.city`](https://www.instagram.com/promptbook.city/)
-   [Facebook `Promptbook City`](https://www.facebook.com/61565718625569)

<!--/Import ./SIGNPOST.md-->

<!--Import ./BLUEPRINT.md-->
<!--⚠️ WARNING: This section was imported, make changes in source; any manual changes here will be overwritten-->

## 💙 The Book language



Following is the documentation and blueprint of the [Book language](https://github.com/webgptorg/book).

Book is a language that can be used to write AI applications, agents, workflows, automations, knowledgebases, translators, sheet processors, email automations and more. It allows you to harness the power of AI models in human-like terms, without the need to know the specifics and technicalities of the models.

### Example

```markdown
# 🌟 My first Book

-   BOOK VERSION 1.0.0
-   URL https://promptbook.studio/hello.book
-   INPUT PARAMETER {topic}
-   OUTPUT PARAMETER {article}

# Write an article

-   PERSONA Jane, marketing specialist with prior experience in writing articles about technology and artificial intelligence
-   KNOWLEDGE https://wikipedia.org/
-   KNOWLEDGE ./journalist-ethics.pdf
-   EXPECT MIN 1 Sentence
-   EXPECT MAX 5 Pages

> Write an article about {topic}

-> {article}
```

Each part of the book defines one of 3 circles:

### **What:** Workflows, Tasks and Parameters

What work needs to be done. Each book defines a workflow, which is one or more tasks. Each workflow has a fixed input and output. For example, you have a book that generates an article from a topic. Once it generates an article about AI, once about marketing, once about cooking. The workflow (= your AI program) is the same, only the input and output change.

**Related commands:**

-   [PARAMETER](https://github.com/webgptorg/promptbook/blob/main/documents/commands/PARAMETER.md)

### **Who:** Personas

Who does the work. Each task is performed by a persona. A persona is a description of your virtual employee. It is a higher abstraction than the model, tokens, temperature, top-k, top-p and other model parameters.

You can describe what you want in human language like `Jane, creative writer with a sense of sharp humour` instead of `gpt-4-2024-13-31, temperature 1.2, top-k 40, STOP token ".\n",...`.

Personas can have access to different knowledge, tools and actions. They can also consult their work with other personas or user, if allowed.

**Related commands:**

-   [PERSONA](https://github.com/webgptorg/promptbook/blob/main/documents/commands/PERSONA.md)



### **How:** Knowledge, Instruments and Actions

The resources used by the personas are used to do the work.

**Related commands:**

-   [KNOWLEDGE](https://github.com/webgptorg/promptbook/blob/main/documents/commands/KNOWLEDGE.md) of documents, websites, and other resources
-   [INSTRUMENT](https://github.com/webgptorg/promptbook/blob/main/documents/commands/INSTRUMENT.md) for real-time data like time, location, weather, stock prices, searching the internet, calculations, etc.
-   [ACTION](https://github.com/webgptorg/promptbook/blob/main/documents/commands/ACTION.md) for actions like sending emails, creating files, ending a workflow, etc.

### General principles of book language

Book language is based on markdown. It is subset of markdown. It is designed to be easy to read and write. It is designed to be understandable by both humans and machines and without specific knowledge of the language.

The file has `.book` extension. It uses `UTF-8` non BOM encoding.

Book has two variants: flat - which is just a prompt with no structure, and full - which has a structure with tasks, commands and prompts.

As it is source code, it can leverage all the features of version control systems like git and does not suffer from the problems of binary formats, proprietary formats, or no-code solutions.

But unlike programming languages, it is designed to be understandable by non-programmers and non-technical people.

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



### 💯 Core concepts

-   [📚 Collection of pipelines](https://github.com/webgptorg/promptbook/discussions/65)
-   [📯 Pipeline](https://github.com/webgptorg/promptbook/discussions/64)
-   [🙇‍♂️ Tasks and pipeline sections](https://github.com/webgptorg/promptbook/discussions/88)
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
