# 📖 The Book Whitepaper

Nowadays, the biggest challenge for most business applications isn't the raw capabilities of AI models. Large language models such as GPT-5.2 and Claude-4.5 are incredibly capable.

The main challenge lies in **managing the context**, providing rules and knowledge, and narrowing the personality.

In Promptbook, you can define your context **using simple Books** that are very explicit, easy to understand and write, reliable, and highly portable.

```book
Paul Smith

PERSONA You are a company lawyer.
Your job is to provide legal advice and support to the company and its employees.
RULE You are knowledgeable, professional, and detail-oriented.
TEAM You are part of the legal team of Paul Smith & Associés, you discuss with {Emily White}, the head of the compliance department. {George Brown} is expert in corporate law and {Sophia Black} is expert in labor law.
```

<div style="page-break-after: always;"></div>

## Aspects of great AI agent

We have created a language called **Book**, which allows you to write AI agents in their native language and create your own AI persona. Book provides a guide to define all the traits and commitments.

You can look at it as "prompting" _(or writing a system message)_, but decorated by **commitments**.

**Commitments** are special syntax elements that define contracts between you and the AI agent. They are transformed by Promptbook Engine into low-level parameters like which model to use, its temperature, system message, RAG index, MCP servers, and many other parameters. For some commitments _(for example `RULE` commitment)_ Promptbook Engine can even create adversary agents and extra checks to enforce the rules.

### `Persona` commitment

Personas define the character of your AI persona, its role, and how it should interact with users. It sets the tone and style of communication.

```book
Paul Smith & Associés

PERSONA You are a company lawyer.
```

### `Knowledge` commitment

Knowledge Commitment allows you to provide specific information, facts, or context that the AI should be aware of when responding.

This can include domain-specific knowledge, company policies, or any other relevant information.

Promptbook Engine will automatically enforce this knowledge during interactions. When the knowledge is short enough, it will be included in the prompt. When it is too long, it will be stored in vector databases and RAG retrieved when needed. But you don't need to care about it.

```book
Paul Smith & Associés

PERSONA You are a company lawyer.
Your job is to provide legal advice and support to the company and its employees.
You are knowledgeable, professional, and detail-oriented.

KNOWLEDGE  https://company.com/company-policies.pdf
KNOWLEDGE https://company.com/internal-documents/employee-handbook.docx
```

### `Rule` commitment

Rules will enforce specific behaviors or constraints on the AI's responses. This can include ethical guidelines, communication styles, or any other rules you want the AI to follow.

Depending on rule strictness, Promptbook will either propagate it to the prompt or use other techniques, like adversary agent, to enforce it.

```book
Paul Smith & Associés

PERSONA You are a company lawyer.
Your job is to provide legal advice and support to the company and its employees.
You are knowledgeable, professional, and detail-oriented.

RULE Always ensure compliance with laws and regulations.
RULE Never provide legal advice outside your area of expertise.
RULE Never provide legal advice about criminal law.
KNOWLEDGE  https://company.com/company-policies.pdf
KNOWLEDGE https://company.com/internal-documents/employee-handbook.docx
```

### `Team` commitment

Team commitment allows you to define the team structure and advisory fellow members the AI can consult with. This allows the AI to simulate collaboration and consultation with other experts, enhancing the quality of its responses.

```book
Paul Smith & Associés

PERSONA You are a company lawyer.
Your job is to provide legal advice and support to the company and its employees.
You are knowledgeable, professional, and detail-oriented.

RULE Always ensure compliance with laws and regulations.
RULE Never provide legal advice outside your area of expertise.
RULE Never provide legal advice about criminal law.
KNOWLEDGE  https://company.com/company-policies.pdf
KNOWLEDGE https://company.com/internal-documents/employee-handbook.docx
TEAM You are part of the legal team of Paul Smith & Associés, you discuss with {Emily White}, the head of the compliance department. {George Brown} is expert in corporate law and {Sophia Black} is expert in labor law.
```

<!--
TODO: Link to dynamically generated dictionary of commitments
[Read more about the language](./BLUEPRINT.md)
-->

## Promptbook Ecosystem

!!!@@@

### Promptbook Server

!!!@@@

### Promptbook Engine

!!!@@@

<!--
TODO: Enhance or use

<div style="page-break-after: always;"></div>

## Where to use your AI agent in book

Books can be useful in various applications and scenarios. Here are some examples:

### Chat apps:

Create your own chat shopping assistant and place it in your eShop.
You will be able to answer customer questions, help them find products, and provide personalized recommendations. Everything is tightly controlled by the book you have written.

### Reply Agent:

Create your own AI agent, which will look at your emails and reply to them. It can even create drafts for you to review before sending.

### Coding Agent:

Do you love Vibecoding, but the AI code is not always aligned with your coding style and architecture, rules, security, etc.? Create your own coding agent to help enforce your specific coding standards and practices.

This can be integrated to almost any Vibecoding platform, like GitHub Copilot, Amazon CodeWhisperer, Cursor, Cline, Kilocode, Roocode,...

They will work the same as you are used to, but with your specific rules written in book.

### Internal Expertise

Do you have an app written in TypeScript, Python, C#, Java, or any other language, and you are integrating the AI.

You can avoid struggle with choosing the best model, its settings like temperature, max tokens, etc., by writing a book agent and using it as your AI expertise.

Doesn't matter if you do automations, data analysis, customer support, sentiment analysis, classification, or any other task. Your AI agent will be tailored to your specific needs and requirements.

Even works in no-code platforms!

<div style="page-break-after: always;"></div>

## How to create your AI agent in book

Now you want to use it. There are several ways how to write your first book:

### From scratch with help from Paul

We have written ai asistant in book who can help you with writing your first book.

<!-- TODO: Link -- >

### Your AI twin

Copy your own behavior, personality, and knowledge into book and create your AI twin. It can help you with your work, personal life, or any other task.

<!-- TODO: Link -- >

### AI persona workpool

Or you can pick from our library of pre-written books for various roles and tasks. You can find books for customer support, coding, marketing, sales, HR, legal, and many other roles.

<!-- TODO: Link -- >

-->
