# 📖 The Book Whitepaper

The world is changing, and in 5 years most of you won't do the work or job what you are doing now. When an agent can do your work for $5.74, it is economically unviable to not use the AI agent.

For most business applications nowadays the biggest challenge isn't about the raw capabilities of AI models. Large language models like GPT-5 or Claude-4.1 are extremely capable.

The main challenge is to narrow it down, constrain it, set the proper **context, rules, knowledge, and personality**. There are a lot of tools which can do exactly this. In one side, there are no-code platforms which can launch your agent in seconds. On the other side, there are heavy frameworks like Langchain or Semantic Kernel which can give you deep control.

Promptbook, takes the best from both worlds. You are defining your AI behavior by simple **books** which are very explicit. They are automatically enforced, but they are very easy to understand, very easy to write, and very reliable and portable.

```book
Creative writing assistant

PERSONA You are a creative writing assistant.
You help users to write stories, poems, and other creative texts.
You are imaginative, inspiring, and supportive.
Always encourage creativity and originality.
```

<div style="page-break-after: always;"></div>

## Aspects of great AI agent

We have created language called **Book** which allows you to write AI agents in their native language and create truly **your AI persona**. Book provides a guide to **define all the traits and commitments**.

You can look at it as prompting (or writing a system message) but decorated by **commitments**.

### `Persona` commitment

Persona defines the character of your AI persona, its role, and how it should interact with users. It sets the tone and style of communication.

```book
Rose Lovegood

PERSONA You are a creative writing assistant.
You help users to write stories, poems, and other creative texts.
You are imaginative, inspiring, and supportive.
Always encourage creativity and originality.
```

### `Knowledge` commitment

Knowledge commitment allows you to provide specific information, facts, or context that the AI should be aware of when responding.

This can include domain-specific knowledge, company policies, or any other relevant information.

Promptbook engine will automatically enforce this knowledge during interactions. When the knowledge is short enough it will be included in the prompt. When it is too long, it will be stored in vector database and RAG retrieved when needed. But you don't need to care about it.

```book
Jane Helper

PERSONA You are a HR buddy.
You assist employees with HR-related questions and tasks.
You are friendly, approachable, and knowledgeable about company policies and procedures.
KNOWLEDGE The company is a tech startup specializing in AI and machine learning.
It was founded in 2020 and has 50 employees. The company values innovation, collaboration, and customer satisfaction.
KNOWLEDGE https://example.com/company-policies.pdf
KNOWLEDGE ./internal-documents/employee-handbook.docx
```

### `Rule` commitment

Rule will enforce specific behaviors or constraints on the AI's responses. This can include ethical guidelines, communication styles, or any other rules you want the AI to follow.

Dependent on rule strictness Promptbook will either propagate it to the prompt or use other techniques like adversay agent to enforce it.

```book
Paul Smith et Associés

PERSONA You are a company lawyer.
RULE You provide legal advice and support to the company and its employees.
You are knowledgeable, professional, and detail-oriented.
Always ensure compliance with laws and regulations.
RULE Never provide legal advice that is outside your area of expertise.
KNOWLEDGE https://example.com/company-policies.pdf
KNOWLEDGE ./internal-documents/employee-handbook.docx
```

### `Action` commitment

Action commitment allows you to define specific actions that the AI can take during interactions. This can include things like posting on a social media platform, sending emails, creating calendar events or interacting with your internal systems.

```book
Peter Poster

PERSONA You are a social media manager. You help users to create and manage their social media presence. You are creative, strategic, and data-driven. Always stay up-to-date with the latest trends and best practices.
ACTION You can post on company Facebook page /supercompany
```

[Read more about the language](./BLUEPRINT.md)

<div style="page-break-after: always;"></div>

## Where to use your AI agent in book

Books can be useful in various applications and scenarios. Here are some examples:

### Chat apps

Create your own chat shopping assistant and place it in your eshop.
You will be able to answer customer questions, help them find products, and provide personalized recommendations. Everything is tightly controlled by the book you have written.

### Reply Agent

Create your own AI agent which will look at your emails and reply to them. It can even create drafts for you to review before sending.

### Coding Agent

Do you love Vibecoding but the AI code is not always inlined with your coding style and architecture, rules, security etc,? Create your own coding agent to help enforce your specific coding standards and practices.

This can be integrated to almost any vibecoding platform like GitHub Copilot, Amazon CodeWhisperer, Cursor, Cline, Kilocode, Roocode,...

They will work same as you are used to but with your specific rules written in book.

### Internal Expertize

Do you have app written in TypeScript, Python, C#, Java, or any other language and you are integrating the AI.

You can avoid struggle with choosing the best model, its settings like temperature, max tokens, etc. by writing a book agent and using it as your AI expertize.

Doestnt matter if you do automations, data analysis, customer support, sentiment analysis, classification, or any other task. Your AI agent will be tailored to your specific needs and requirements.

Even works in no-code platforms

<div style="page-break-after: always;"></div>

## How to create your AI agent in book

Now you want to use it. There are several ways how to write your first book:

### From scratch with help from Paul

We have written ai asistant in book who can help you with writing your first book.

<!-- TODO: Link -->

### Your AI twin

Copy your own behavior, personality, and knowledge into book and create your AI twin. It can help you with your work, personal life, or any other task.

<!-- TODO: Link -->

### AI persona workpool

Or you can pick from our library of pre-written books for various roles and tasks. You can find books for customer support, coding, marketing, sales, HR, legal, and many other roles.

<!-- TODO: Link -->
