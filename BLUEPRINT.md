
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

### Goals and principles

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

---

<!-- GRM 2024-11 -->
