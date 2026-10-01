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
