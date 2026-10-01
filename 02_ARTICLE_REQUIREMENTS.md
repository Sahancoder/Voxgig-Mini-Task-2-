# Voxgig Mini Task 2 — Article Requirements

## Deliverable

Write an approximately **1,000-word critical technical review** of Jostraca.

The article should read like a developer independently discovered Jostraca, tested it, and formed a genuine technical opinion.

This is NOT:

- a marketing article
- a documentation rewrite
- a Wikipedia-style introduction
- a generic AI-generated review
- a feature list

The article must reflect actual testing.

---

# Intended Reader

Assume the reader is a software developer interested in:

- code generation
- SDK generation
- developer tooling
- automation
- maintaining generated source code

They may never have heard of Jostraca.

---

# Suggested Title Style

The title should communicate an opinion or experiment.

Possible styles:

```text
I Tested Jostraca's Approach to Code Generation Twice
```

or:

```text
Jostraca Solves an Awkward Code Generation Problem — But There Are Trade-offs
```

or something better based on the actual findings.

Do not use clickbait.

Do not decide the final title until testing is complete.

---

# Article Structure

## 1. Opening

Approximately 100 words.

Start with the problem, not a generic definition.

For example, discuss the common code-generation problem:

```text
Generating a source file once is easy.

Generating it again after a developer has modified it is much harder.
```

Then explain that this is the reason Jostraca was interesting enough to test.

Do not use those exact sentences unless appropriate.

---

# 2. What Jostraca Is

Approximately 100–120 words.

Explain briefly:

- what Jostraca does
- its relationship to code generation
- why Voxgig uses it
- why regeneration matters

Avoid a long history section.

---

# 3. Getting It Running

Approximately 120 words.

Describe the actual installation experience.

Include:

- environment
- installation
- basic example
- first impression

If something failed, explain it.

If everything worked perfectly, say that.

Do not manufacture criticism.

---

# 4. Code Example

Include at least one real code example that was actually executed.

Prefer the custom example over blindly copying documentation.

Keep the snippet focused.

Example article format:

```javascript
// real tested code here
```

Then explain:

- what input it takes
- what it generates
- what was intuitive
- what was not intuitive

Code counts toward the article but should not dominate it.

---

# 5. The Important Test: Running It Again

Approximately 180–220 words.

This should probably be the most important section if testing supports it.

Explain:

1. generated file was created
2. file was manually modified
3. generator was run again
4. what Jostraca actually did

Discuss:

- preservation
- overwrite behaviour
- diff
- merge behaviour
- developer control
- potential surprises

Only mention features that were actually verified.

---

# 6. What Worked Well

Approximately 120 words.

Use concrete points.

Bad:

```text
Jostraca has an amazing developer experience.
```

Better:

```text
The API required only X to produce Y, and the generated directory
structure made it obvious where output was written.
```

Possible topics:

- API design
- composability
- generated output
- regeneration strategy
- documentation
- architecture

Only use verified observations.

---

# 7. Where It Fell Short

Approximately 150 words.

Critical review means weaknesses matter.

Potential categories:

- learning curve
- documentation gaps
- abstraction
- error messages
- confusing naming
- debugging
- examples
- regeneration assumptions

Do not invent flaws.

Describe actual friction.

Good pattern:

```text
When I tried X, I received Y.

The message told me A, but it did not tell me B.

A developer unfamiliar with the internal model would probably need
to inspect C before understanding the problem.
```

---

# 8. What I Would Change

Approximately 80–120 words.

Make practical suggestions.

Examples:

- clearer quick-start
- better error context
- clearer regeneration example
- more real-world examples
- improved API naming
- troubleshooting section

Tie every suggestion to something observed during testing.

---

# 9. Who It Is For

Approximately 80 words.

Discuss which developers/projects might benefit.

Possible contexts:

- SDK generators
- scaffolding tools
- repeated source generation
- projects where generated files coexist with manual changes

Also mention cases where it may be unnecessary.

Do not turn this into a sales pitch.

---

# 10. Conclusion

Approximately 80 words.

Give a balanced technical conclusion.

Do not use rating scores.

Do not say:

```text
10/10
Highly recommended
Best tool
Game-changing
```

Prefer:

```text
The most interesting part for me was...
```

or:

```text
After testing it, I can see why...
```

based on actual evidence.

---

# Style Requirements

Use simple professional English.

Prefer:

- short paragraphs
- concrete observations
- developer vocabulary
- active voice
- specific examples

Avoid excessive headings.

Avoid overly dramatic language.

---

# AI Writing Patterns to Avoid

Avoid phrases such as:

```text
In today's rapidly evolving landscape...
It's important to note...
Let's dive in...
At its core...
This powerful tool...
Robust and seamless...
Game changer...
Whether you're a beginner or experienced developer...
In conclusion...
```

Avoid repetitive structures such as:

```text
It's not just X — it's Y.
```

Avoid unnecessary em dashes everywhere.

Avoid fake quotes.

Avoid fake personal experiences.

Avoid repeatedly saying:

```text
I was impressed
I was surprised
```

unless there is a specific reason.

---

# Critical Requirement

The article must distinguish:

## Observed fact

```text
The command generated three files.
```

from:

## Opinion

```text
I found the resulting structure easier to inspect than a deeply
nested template directory.
```

Never present an opinion as fact.

---

# Source Handling

Use official documentation and repository material for factual background.

Do not copy documentation language.

Paraphrase it.

If the final publishing format supports links, link to:

- official Jostraca repository
- official documentation
- Voxgig open-source page where appropriate

Do not overload the article with references.

---

# Final Verification Checklist

Before marking the article complete:

- [ ] approximately 1,000 words
- [ ] includes real code
- [ ] code was actually tested
- [ ] installation genuinely tested
- [ ] basic generation tested
- [ ] regeneration tested
- [ ] failure case tested
- [ ] strengths are evidence-based
- [ ] weaknesses are evidence-based
- [ ] no invented behaviour
- [ ] no fabricated errors
- [ ] no fake personal experience
- [ ] not promotional
- [ ] not unnecessarily negative
- [ ] simple professional English
- [ ] no generic AI introduction
- [ ] no excessive AI-style phrases
- [ ] final opinion matches evidence
