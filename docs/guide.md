ඔව්. Claude එකට direct දෙන්න පුළුවන් විදිහට files 3ක් හදාගන්න. මේවා project folder එකේ save කරලා Claude එකට “follow these files exactly” කියන්න.

### 1) `00_CLAUDE_TASK.md`

# Voxgig Mini Task 2 — Claude Working Instructions

## Goal

Complete Voxgig Mini Task 2 by genuinely testing one Voxgig-supported open-source project and then writing an approximately 1,000-word critical technical article based only on real observations.

Selected project:

**Jostraca**

The final article must NOT be a generic AI-generated review.

It must be based on:

- actual installation
- actual commands executed
- actual code written
- actual generated output
- actual errors
- actual regeneration behaviour
- actual developer experience observations

Do not invent any test result.

---

# Important Constraints

The employer requested that human work be time-boxed to approximately 30 minutes.

Therefore:

- Keep the manual testing workflow short.
- Automate repetitive work where reasonable.
- Do not spend time building a large application.
- Use a minimal Node.js project.
- Record the commands and results clearly.

AI can help organize, analyze, and write, but the article must reflect real technical observations.

---

# Your Role

Act as a senior developer assistant.

You must:

1. Research the current official Jostraca documentation.
2. Inspect the current Jostraca GitHub repository.
3. Determine the correct installation method.
4. Create a small reproducible test project.
5. Run Jostraca.
6. Test its normal behaviour.
7. Test regeneration behaviour.
8. Test at least one failure case.
9. Record all findings.
10. Write a critical technical article based only on verified results.

Never fabricate commands, outputs, errors, or project behaviour.

If something does not work:

- keep the failed result
- investigate briefly
- document the problem
- document any workaround
- use that as part of the review

A failure is useful evidence.

---

# Working Folder

Use this structure:

```text
voxgig-mini-task-2/
├── README.md
├── 00_CLAUDE_TASK.md
├── 01_TEST_PLAN.md
├── 02_ARTICLE_REQUIREMENTS.md
│
├── examples/
│   ├── basic/
│   └── regeneration/
│
├── generated/
│
├── evidence/
│   ├── commands.md
│   ├── observations.md
│   ├── errors.md
│   └── results.md
│
└── article/
    └── jostraca-critical-review.md
```

Do not unnecessarily create many files.

---

# Phase 1 — Verify the Project

Before coding, verify:

- official Jostraca repository
- latest README
- package name
- installation command
- supported Node.js version if documented
- latest basic usage example
- relationship between Jostraca and Voxgig SDK Generator

Record sources in:

```text
evidence/observations.md
```

Do not rely on old tutorials when official documentation exists.

---

# Phase 2 — Create the Test Project

Create a clean Node.js project.

Example:

```bash

cd voxgig-mini-task-2
npm init -y
```

Then install Jostraca using the CURRENT official installation instructions.

Do not assume the package name.

Verify it first.

Record:

- Node version
- npm version
- OS
- installation command
- warnings
- errors
- installation duration approximately

Add these details to:

```text
evidence/commands.md
```

---

# Phase 3 — Basic Usage Test

Find the smallest valid Jostraca example from the official documentation.

Implement it in:

```text
examples/basic/
```

Run it.

Record:

### Expected

What the documentation suggests should happen.

### Actual

What actually happened.

### Result

PASS / PARTIAL / FAIL

### Notes

- Was setup obvious?
- Did the code work first time?
- Were imports intuitive?
- Were configuration options understandable?
- Was generated output readable?

Save the information in:

```text
evidence/results.md
```

---

# Phase 4 — Create Our Own Example

Do not only repeat the documentation example.

Create one small realistic example.

The example should demonstrate Jostraca generating multiple related source files or text files.

Possible concept:

```text
Input:
simple service definition

Generated:
UserService.js
ProductService.js
README fragment
```

Keep the example small.

We are testing Jostraca, not building a full SDK.

The example must be easy to understand in the article.

Record:

- source code
- generated files
- command used
- result

---

# Phase 5 — Regeneration Test

This is one of the most important tests.

Procedure:

1. Generate files.
2. Open one generated file.
3. Make a small manual change.
4. Save it.
5. Run generation again.
6. Inspect what happens.

Investigate whether Jostraca:

- overwrites the change
- preserves the change
- produces a diff
- performs merging
- requires a specific preservation strategy
- gives warnings

If the project provides multiple regeneration strategies, test one or two important ones only.

Record exact behaviour.

Do not assume Jostraca protects changes automatically.

Store results in:

```text
evidence/results.md
```

---

# Phase 6 — Failure Test

Create at least one controlled failure.

Examples:

- missing required input
- invalid configuration
- malformed input
- wrong file path
- unsupported value

Do NOT perform destructive or security attacks.

Observe the error.

Evaluate:

- Is the error readable?
- Does it identify the actual problem?
- Does it show the location?
- Does it explain how to fix the issue?
- Is the stack trace useful or noisy?

Copy the important part of the actual error into:

```text
evidence/errors.md
```

Do not clean up or rewrite the error before recording it.

---

# Phase 7 — Developer Experience Review

Assess Jostraca from a developer's perspective.

Consider:

## Installation

- easy?
- confusing?
- hidden requirements?

## API

- understandable naming?
- too much abstraction?
- good defaults?

## Documentation

- enough working examples?
- clear architecture?
- easy onboarding?

## Errors

- actionable?
- cryptic?

## Generated Files

- readable?
- predictable?
- easy to debug?

## Regeneration

- useful?
- surprising?
- safe?

## Maintenance

- does the approach look maintainable for larger generators?

Record both positive and negative observations.

Do not force criticism where there is none.

Do not force praise either.

---

# Phase 8 — Evidence Table

Create the following table in:

```text
evidence/results.md
```

| Test | Result | Evidence | Technical Opinion |
|---|---|---|---|
| Installation | PASS/PARTIAL/FAIL | Actual observation | Opinion |
| Basic example | PASS/PARTIAL/FAIL | Actual observation | Opinion |
| Custom example | PASS/PARTIAL/FAIL | Actual observation | Opinion |
| Regeneration | PASS/PARTIAL/FAIL | Actual observation | Opinion |
| Invalid input | PASS/PARTIAL/FAIL | Actual error | Opinion |
| Documentation | GOOD/MIXED/POOR | Evidence | Opinion |
| Overall DX | GOOD/MIXED/POOR | Evidence | Opinion |

Do not fill the table until testing is completed.

---

# Phase 9 — Article

Only start writing the article AFTER testing.

Read:

```text
02_ARTICLE_REQUIREMENTS.md
```

Use:

- observations
- errors
- generated files
- commands
- code examples

as the evidence.

Never write statements like:

> Jostraca provides excellent error handling.

unless testing actually demonstrated that.

Prefer concrete statements such as:

> When I removed X from the configuration, the tool returned Y. The error identified the failing component, but did not explain which configuration value was missing.

That is much stronger.

---

# Final Deliverables

The project should contain:

```text
evidence/commands.md
evidence/observations.md
evidence/errors.md
evidence/results.md

examples/

article/jostraca-critical-review.md
```

The final article should be approximately 1,000 words.

Before finishing, verify:

- no invented tests
- no invented commands
- no invented errors
- code examples actually run
- article matches evidence
- article sounds like an engineer reviewing a tool
- no excessive marketing language
- no fake enthusiasm
- no generic AI phrases
- no unsupported claims

Do not submit anything automatically.

Prepare the files for human review first.

### 2) `01_TEST_PLAN.md`

# Jostraca — 30 Minute Technical Test Plan

## Objective

Test Jostraca quickly enough to form a genuine technical opinion suitable for the Voxgig Developer Relations Mini Task 2.

Target manual effort:

**Approximately 30 minutes**

The purpose is NOT to comprehensively test the entire library.

The purpose is to gather enough genuine technical evidence for a critical review.

---

# Test 1 — Installation

Target time:

**3 minutes**

## Actions

1. Verify official npm/package installation instructions.
2. Create a clean Node project.
3. Install Jostraca.
4. Record environment versions.

Commands should be recorded exactly.

## Record

```text
Node version:
npm version:
OS:
Package version:
Install command:
Warnings:
Errors:
Install successful: YES / NO
```

## Questions

- Did installation work first try?
- Was documentation current?
- Were prerequisites obvious?
- Were there unexpected warnings?

---

# Test 2 — Basic Official Example

Target time:

**5 minutes**

## Actions

Find the smallest official Jostraca example.

Create:

```text
examples/basic/
```

Run the example without changing its intended logic.

## Record

```text
Documentation source:

Expected result:

Actual result:

Worked first try:
YES / NO

Problems:

Fix required:

Result:
PASS / PARTIAL / FAIL
```

## Evaluate

- clarity
- setup
- imports
- naming
- amount of boilerplate
- readability

---

# Test 3 — Small Custom Generator

Target time:

**5 minutes**

Create a small original example.

Do not build a full SDK.

Example goal:

Generate two simple source files from a small structured input.

Concept:

```javascript
const services = [
  { name: 'User' },
  { name: 'Product' }
]
```

Potential generated output:

```text
generated/
├── UserService.js
└── ProductService.js
```

Use Jostraca properly according to its documented API.

## Evaluate

- how easy it is to understand the API
- how easy it is to generate multiple files
- how much boilerplate is required
- whether generated output is predictable

---

# Test 4 — Second Run / Regeneration

Target time:

**5 minutes**

This test is especially important.

## Procedure

First generation:

```text
Generate files
```

Then manually modify one generated file.

Example:

```javascript
// manually added custom logic
```

Then generate again.

Observe:

```text
Manual change preserved:
YES / NO / DEPENDS

File overwritten:
YES / NO

Diff produced:
YES / NO

Merge attempted:
YES / NO

Warning produced:
YES / NO
```

If Jostraca supports explicit preservation or merge strategies, test one relevant strategy.

Record exactly how it behaves.

## Main Question

Is Jostraca's approach to repeated generation safer or more useful than simply rewriting generated files?

Do not answer until actual testing is complete.

---

# Test 5 — Failure / Invalid Input

Target time:

**3 minutes**

Trigger one harmless failure.

Possible tests:

- remove required input
- use malformed configuration
- use an invalid path
- provide an unexpected value

Record:

```text
Input/problem:

Error message:

Did it identify the problem?
YES / PARTLY / NO

Did it identify the location?
YES / PARTLY / NO

Did it suggest a solution?
YES / NO

Error quality:
GOOD / ACCEPTABLE / POOR
```

Do not intentionally damage the environment.

---

# Test 6 — Documentation and DX Review

Target time:

**4 minutes**

Review what you experienced.

## Documentation

Check:

- getting started instructions
- API examples
- concepts
- regeneration explanation
- error troubleshooting

## Developer Experience

Check:

- naming
- API discoverability
- mental model
- errors
- debugging
- generated output
- documentation navigation

Record:

### Strong Points

```text
1.
2.
3.
```

### Weak Points

```text
1.
2.
3.
```

### Things I Would Improve

```text
1.
2.
3.
```

---

# Test 7 — Evidence Summary

Target time:

**3 minutes**

Complete this table.

| Area | Result | Observation |
|---|---|---|
| Installation | | |
| First example | | |
| Custom example | | |
| Regeneration | | |
| Error handling | | |
| Documentation | | |
| API design | | |
| Generated output | | |

Then write:

## Best Thing About Jostraca

```text
...
```

## Biggest Weakness

```text
...
```

## Most Interesting Technical Idea

```text
...
```

## Who Would Benefit From It?

```text
...
```

## Who Probably Does Not Need It?

```text
...
```

---

# Evidence Rules

Never write:

```text
probably
I assume
it should
I think it might
```

when describing test results.

Instead distinguish between evidence and opinion.

Example:

### Evidence

```text
Running the generator for the second time replaced X.
```

### Opinion

```text
I found this behaviour potentially surprising for developers who
expect local changes to survive regeneration.
```

Keep those concepts separate.

---

# Stop Condition

Do NOT keep expanding the project.

Once there is enough evidence for:

- installation
- basic usage
- custom usage
- regeneration
- failure behaviour
- DX assessment

stop testing and start the article.

This is a Developer Relations writing assessment, not a full QA project.

### 3) `02_ARTICLE_REQUIREMENTS.md`

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

---

# Claude Final Instruction

Before writing the final article, read:

```text
evidence/commands.md
evidence/observations.md
evidence/errors.md
evidence/results.md
```

If there is insufficient evidence for any claim:

DO NOT make the claim.

If testing was unsuccessful, write honestly about the unsuccessful experience.

A technically honest negative or mixed result is better than an invented successful test.

Claude Code එක open කරලා මේ prompt එක විතරක් දෙන්න:

```text
Read 00_CLAUDE_TASK.md, 01_TEST_PLAN.md, and 02_ARTICLE_REQUIREMENTS.md.

Execute the task step by step.

First inspect the current official Jostraca documentation and repository.
Then create and run the minimal test project.

Do not invent any result.

Maintain evidence/commands.md, evidence/observations.md,
evidence/errors.md and evidence/results.md while working.

Do not write article/jostraca-critical-review.md until the tests are completed.

When finished, verify every technical claim in the article against the
actual evidence and code in this repository.

Do not submit or email anything. Prepare everything for my review.
```

**Important:** Claude එක terminal commands run කරනවා නම් output බලලා article එක generate කරන්න දෙන්න. Article එක විතරක් direct generate කරවන්න එපා. මේ workflow එකෙන් ඔයාට **code + evidence + errors + genuine article** හතරම ලැබෙනවා.