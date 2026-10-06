---
title: "AI Makes It Easier to Build the Wrong Product"
subtitle: "AI has changed the cost of producing software, but the cost of being wrong remains just as high."
date: 2026-07-10
original_url: https://x.com/greyluox/article/2075687482885316940
---

Cheap software means that many teams are responding to AI by making the unit of implementation larger: write a substantial specification, run an intensive coding session, generate an entire milestone, and test the result afterward. When this works, it feels extraordinary. A large amount of code appears in a short time.

But faster code generation is not the same as faster product development. The central question is rarely only, “Can we build this?” It is also, “Should we build this, does it work in the real workflow, and what do we need to learn next?” AI accelerates the first question, but not the others.

This article explains how to build faster with AI without getting stuck in the wrong direction, using the methodology that helped me ship 10x more features in a few months at an applied AI startup than I did in a year in big tech.

## The Decision Rule

The first step is to use the size of the batch to match the uncertainty in the work.

A broad, AI-assisted implementation batch is appropriate when the desired result is stable and easy to verify. For instance, when doing a bounded migration, or a disposable prototype. In this type of work, there is little product uncertainty left to resolve, so AI is able to handle this autonomously.

Use small, end-to-end slices when uncertainty is material, whether that be within a product, workflow, or integration. The purpose of the slice is to make the cost of being wrong small. It should produce a meaningful user outcome and evidence about the next decision.

## The Two Models

The one-shot milestone model is a large-batch process: specification, implementation, then validation. Its advantage is throughput. Its weakness is that it batches uncertainty along with code. If the specification is incomplete, the workflow does not match reality, or an integration behaves differently in production, the team discovers the problem after creating the largest possible amount of work.

Testing at the end may prove that the system conforms to the specification. It cannot prove that the specification was the right answer.

Implementation also creates new information. Constraints, edge cases, integration behavior, and real workflow details often reveal that part of the proposed solution is wrong or incomplete.

In a large-batch model, that learning arrives after the team has committed to the specification and built around it. The team then faces an unfavourable choice: follow a specification it now knows is weak, change the code without updating the decision, or reopen a large milestone late. When that difference is left unresolved, the specification becomes decision debt: a growing gap between what was approved, what was built, and what the team now knows to be true.

The alternative is progressive end-to-end delivery. It follows Henrik Kniberg’s skateboard model: rather than deliver the components of an eventual product one by one, deliver the smallest complete version of the underlying user outcome, then improve it through real feedback. Kniberg’s model is more precise than “build an MVP”: the first release may be an earliest testable product, later becoming usable and eventually lovable.

In software, each increment should be a vertical slice: a narrow path through the interface, system logic, data, integrations, and operations that produces a real result for a user. Each slice gives the team a small, cheap opportunity to update the proposed solution and its acceptance checks before the next commitment. The intended user outcome and non-negotiable constraints should change only through an explicit product decision. The aim is not to ship less code. It is to learn early enough to change course before a large milestone turns incorrect assumptions into expensive rework.

## What AI Changes

The core argument is not new. Small batches, vertical slices, and rapid feedback were valuable before AI. What AI changes is the cost of implementation.

AI creates an opportunity: it lowers the cost of building a complete slice. One person can more readily work across the interface, backend, integrations, tests, documentation, and operations. This makes genuine end-to-end delivery more practical and weakens the old organizational reason to divide work into horizontal specialist tickets.

AI also creates a danger: it lowers the cost of building a large batch before anyone has learned from it. A team can now spread a flawed assumption across an entire milestone in days rather than weeks. Unless it creates explicit feedback points, it can complete far more unvalidated work before discovering whether the product, workflow, or system design is right.

Vertical slicing captures the opportunity while limiting the danger. Each slice is small enough to put a real workflow in front of users, operators, and integration tests while change is still cheap, but complete enough to expose problems in the specification, system boundaries, and real-world workflow.

Cheap prototypes and focused technical spikes support the same goal: use AI to get evidence sooner, not merely to generate more code before the first feedback loop.

## Infrastructure, Frameworks, and Architecture Runway

This model does not mean every decision should wait for a product slice. Some infrastructure and framework choices are costly to reverse, shared across many features, or determine whether the company can operate safely. Permissions, data ownership, security boundaries, public contracts, compliance controls, deployment, and core frameworks can require an explicit decision before broader delivery begins.

The question is not whether the work is “technical” or “product.” The question is whether the decision is consequential, difficult to reverse, or risky to discover late.

Even then, architecture runway should remain runway, not an airport built before anyone has flown. Build only enough foundation to support the next meaningful slice safely and coherently. A generalized workflow engine, complete internal platform, or highly abstract framework should be earned by repeated real needs, not built because it may one day be useful.

Technical validation is also distinct from product validation. A product slice tests desirability and workflow fit. A time-boxed technical spike tests feasibility: whether a framework integrates correctly, a system can meet a performance target, or an operating model is viable. Both need explicit evidence criteria. A spike should end in a decision, a small prototype, or a rejected option, not an open-ended foundation project.

## An Operating Model for AI-Enabled Teams

Plan milestones as outcome bets. State the customer problem, expected changes, non-negotiable constraints, and the evidence that would change the next decision.

Map the thinnest real end-to-end slice before creating a task plan. Retire the riskiest assumptions early. Give AI a slice charter: the user behavior, relevant context, invariants, acceptance checks, fixtures, security constraints, and rollout limits.

Treat “done” as more than code and tests. A slice is complete when automated checks pass, a responsible human has reviewed consequential behavior, and the result has a realistic observation path: a customer, a gated rollout, usage data, an operator review, or another explicit source of evidence.

Frame product milestones as collections of validated outcome slices, with explicitly named enabling infrastructure, compliance, or risk-retirement work where necessary. Do not optimize for agent sessions, generated code, ticket count, or story points. Optimize for the time from assumption to trustworthy evidence.

## Conclusion

AI does not make upfront design obsolete or make vertical slicing newly correct. It makes implementation cheap enough that teams should be more deliberate about what they batch: commit early on high-cost, hard-to-reverse platform choices; learn quickly through small end-to-end slices everywhere else.

In the age of AI, the winning unit of work is not the largest specification an agent can implement. It is the smallest end-to-end product change that produces trustworthy evidence about the next decision.
