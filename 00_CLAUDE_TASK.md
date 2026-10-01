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
│   └── custom/
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
mkdir voxgig-mini-task-2
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
