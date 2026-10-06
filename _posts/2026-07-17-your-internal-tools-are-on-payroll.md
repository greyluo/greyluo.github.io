---
title: "Your Internal Tools Are on Payroll"
subtitle: "AI made them cheap to build. Deciding what to maintain is the real work."
date: 2026-07-17
original_url: https://x.com/greyluox/article/2078245589524128061
---

It may have started as an afternoon with Claude Code: a dashboard, an evaluation script, or an internal integration. AI made that first version cheap to build, and the tool was useful, so people began relying on it. Six months later it has users, edge cases, an upstream dependency that has changed, and no shared decision about what it is supposed to become. When it fails, an engineer who never expected it to last loses a day putting it back together.

A decade ago, we called unapproved software purchases “shadow IT.” This is a related problem, except no one needs to swipe a card. I think of it as shadow headcount: tools that become part of the organization’s ongoing workload without anyone explicitly deciding whether to keep them experimental, support them as durable systems, replace them, or retire them. The issue is not that someone built a tool. It is that adoption made an operating commitment before the team did.

## The decision moved downstream

Before AI, implementation cost often forced a decision before work began. A system large enough to matter needed a budget, a procurement review, or an architecture conversation. AI has removed much of that friction. A competent engineer with a coding agent can now ship a dashboard, a workflow, or an integration in an afternoon.

The build-versus-buy question has not gone away. It has moved.

Instead of asking the question before anyone writes code, teams often confront it after a useful experiment has spread. A short-lived experiment has a short-lived cost. A shared dependency needs security patches, dependency upgrades, decisions about changing requirements, and help when someone relies on it in a way its creator did not anticipate. The relevant distinction is not whether every utility requires process; it is whether people now expect it to keep working.

At that point, the work is no longer only code. It is the ongoing cost of operating a chosen capability while the product, its users, and the surrounding ecosystem change.

AI can reduce parts of that work, especially routine fixes, tests, and updates. It is less dependable when a change depends on a large existing system, historical context, and trade-offs it cannot infer. That does not make AI unhelpful; it means a faster first version makes the decision about what to keep more important, not less.

Once the decision has moved downstream, a team needs a simple way to make it explicit. The goal is not a heavy approval process. It is a deliberate choice about the role a capability should play before reliance turns it into permanent work.

## The choice comes after the commitment

Only after a capability has crossed that threshold should the familiar build-versus-buy questions enter the conversation: does it differentiate the product, and how much external change will it need to absorb?

Those questions do not produce a verdict. They tell you what kind of commitment you are considering. A capability can be strategically important yet sit on infrastructure you should never operate yourself. Something may be commodity but stable enough that mature open source is the most sensible operating model.

The goal is not to sort work into four boxes. It is to choose deliberately which part of the stack you are prepared to carry.

That leads to a few useful defaults. Invest in distinctive, stable capabilities. Where the value is distinctive but the infrastructure moves fast, own the workflow or decision logic and rent the substrate. For commodity work, use mature open source when it is dependable and low-churn; otherwise, pay a vendor whose business is absorbing the churn.

The important moment is not when the first version is built. It is when adoption turns it into a dependency, and makes choosing among those options unavoidable.

## What ownership actually means

An intentional decision does not mean every durable tool needs a manager. It means someone is clear about who carries the consequences when the tool changes or fails.

That commitment may sit with a named individual, a team, a supported vendor, or mature open source with a clear operating model. What matters is that it is intentional rather than discovered during an incident.

Agents will keep making routine fixes, tests and migrations easier to handle. They help teams operate more of the stack. They do not decide whether a dependency is worth operating, or where the organization wants to draw the boundary.

The difficult part of ownership is often not typing. When an SDK breaks, a vendor changes terms, a model behaves differently, or a compliance requirement arrives, someone must decide whether to adapt, buy a replacement, or retire the layer. AI can help execute those choices; it cannot make them.

Internal tools are the clearest example, but the pattern does not stop there. SDK wrappers, framework extensions, observability pipelines, and custom integrations can all become durable obligations the same way: quietly, through use. The right answer can still be to keep them, but it should be a choice.

Whatever option you choose, keep a clear interface at the boundary. A contained decision can be revisited when the technology or business changes. A dependency scattered through the codebase is much harder to replace, even when everyone agrees the original choice no longer makes sense.

Clear boundaries make the commitment reversible. A team can invest further, swap a vendor, or retire a layer without unpicking the rest of the codebase.

## Make the decision before adoption does

None of this is an argument for building less. Prototypes are cheaper than they have ever been, and that is a genuine advantage. The moment to make the decision is not before experimentation; it is when someone else begins to depend on the result.

A practical trigger is reliance. When a tool reaches people beyond its creator, blocks a workflow, holds valuable data, or sits on an unstable external dependency, stop treating it as a private experiment. Decide whether to keep it temporary, support it, replace it, or retire it.

A practical audit takes an afternoon. List the shared tools and custom layers people depend on, including internal dashboards, scheduled jobs, integrations, SDK wrappers, and framework extensions. For each one, decide whether it is intentionally temporary, deliberately maintained, better replaced, or ready to retire.

Retiring a tool or layer with no clear purpose can feel wasteful. It is usually less costly than discovering, during an incident or an upgrade, that no one had decided how to keep it working.

AI made experimentation cheap. Keep that advantage. But do not mistake a lower cost of starting for a lower cost of ownership. The build-versus-buy decision did not disappear; it moved downstream. Bring it back into view before adoption turns a quick utility into permanent work.
