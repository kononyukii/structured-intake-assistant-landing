# AGENTS.md — Structured Intake Assistant Landing

This repository contains the standalone marketing landing page for **Structured Intake Assistant**.

Read `docs/landing-brief.md` first.  
That file is the product and design source of truth.

If anything in this file conflicts with `docs/landing-brief.md`, follow:

1. `docs/landing-brief.md`
2. existing codebase patterns
3. this `AGENTS.md`

---

## Mission

Build a polished, trustworthy, product-first landing page for **Structured Intake Assistant**.

This landing page must communicate:

- structured preparation before a primary care visit,
- doctor-friendly summary,
- privacy-first / local-first positioning,
- clear safety boundaries,
- calm clinical trust.

This is a **product landing page**, not a generic portfolio page and not a generic “AI healthcare” template.

Secondarily, it should also serve as a high-quality portfolio artifact.

---

## Working Mode

Work in:

- small, reviewable steps,
- minimal diffs,
- strong visual quality,
- strong content discipline,
- no unnecessary refactors.

Always prefer the smallest clean solution that matches the brief.

---

## First-Step Rule

Before making meaningful changes:

1. Read `docs/landing-brief.md`
2. Inspect the current repository structure
3. Reuse existing patterns if present
4. Create a new git branch before making changes

Branch names should be short and task-focused, for example:

- `feat/landing-hero`
- `feat/landing-sections`
- `feat/landing-motion`
- `fix/landing-mobile-spacing`

---

## Non-Negotiables

### 1. Do not break product framing

Do **not** turn this into:

- an AI doctor,
- a diagnosis tool,
- a symptom checker,
- a treatment advisor,
- a medical copilot,
- a clinician dashboard product.

The product is about:

- helping patients prepare,
- organizing symptoms/history/context,
- generating a structured doctor-friendly summary before a visit.

---

### 2. Do not add unsafe claims

Never write or imply claims like:

- better diagnosis,
- correct diagnosis,
- improved diagnostic accuracy,
- faster diagnosis,
- better treatment decisions,
- doctors will finally listen,
- improved medical outcomes,
- clinical intelligence.

Prefer wording like:

- come prepared,
- organize what matters,
- structured summary,
- clearer handoff,
- before your visit,
- doctor-friendly summary.

---

### 3. Do not use generic healthcare SaaS filler

Avoid:

- fake analytics dashboards,
- fake medical charts unrelated to the product,
- random admin UI,
- enterprise hospital platform vibes,
- decorative medical clichés,
- generic “smiling doctor handshake” stock usage.

Use assets that support the actual product story.

---

### 4. Do not overcomplicate the stack

For v1, prefer a simple and maintainable implementation.

Default preference:

- static-first approach,
- HTML / CSS / JS or similarly lightweight setup,
- minimal dependencies,
- minimal build complexity.

Do **not** introduce a framework, animation library, CMS, design system package, or asset pipeline unless explicitly needed and justified.

---

### 5. Do not refactor unrelated code

Touch only what is needed for the current task.

No drive-by cleanup.  
No speculative abstractions.  
No premature architecture.

---

## Page Priorities

Priority order:

1. clear positioning
2. strong hero
3. doctor-friendly summary showcase
4. trust and safety framing
5. polished layout and hierarchy
6. responsive behavior
7. tasteful motion
8. decorative enhancement

If tradeoffs are needed, protect the top items first.

---

## Required Narrative

The page should communicate this idea clearly:

> Structured Intake Assistant helps patients come to a doctor visit with a clear, structured, doctor-friendly summary instead of a stressed, fragmented explanation.

Everything on the page should support that narrative.

---

## Required Section Order

Unless explicitly asked otherwise, keep the landing close to this structure:

1. Hero
2. Trust strip
3. Problem
4. Solution / value proposition
5. How it works
6. Doctor-friendly summary showcase
7. Privacy & safety
8. Why it feels different
9. Open source / project status
10. Final CTA

Do not invent many extra sections without a strong reason.

---

## Copy Rules

### Must communicate

- structured intake
- doctor-friendly summary
- before your visit
- privacy-first
- local-first
- no diagnosis
- no treatment recommendations
- no triage / urgency advice
- optional AI with explicit consent
- open-source
- View on GitHub

### Avoid words / framing like

- diagnose
- detect disease
- treatment guidance
- symptom checker
- AI doctor
- medical copilot
- clinical intelligence
- smarter diagnosis
- healthcare revolution

### Tone of voice

Use tone that is:

- calm
- clinical
- trustworthy
- modern
- clear
- restrained

Do not use:

- hypey startup tone,
- manipulative fear language,
- dramatic anti-doctor language,
- vague marketing fluff.

### Problem framing rule

Acknowledge user frustration without attacking doctors.

Good direction:

- appointments are short,
- stress makes it harder to explain clearly,
- context gets lost,
- important details are easy to forget.

Bad direction:

- doctors do not care,
- doctors never listen,
- clinicians always ignore patients.

---

## Visual Rules

### Art direction

Target:

- clinical editorial SaaS
- premium but restrained
- calm whitespace
- layered product storytelling
- teal / cool-neutral palette
- clean visual hierarchy

### Avoid

- flashy startup neon,
- random 3D objects,
- abstract AI blobs,
- decorative shapes with no purpose,
- noisy gradients,
- heavy glassmorphism everywhere,
- B2B admin dashboard look.

### Asset rules

Prefer:

1. real product mockups
2. real screenshots
3. structured summary mockups
4. tasteful real photography if needed
5. subtle textures / backgrounds

Avoid:

- fake dashboards,
- generic stock overload,
- clearly fabricated medical scenes,
- irrelevant illustrations.

### Mockup rule

The strongest visual asset on the page should be the **doctor-friendly summary / product flow**, not some unrelated dashboard.

---

## Motion Rules

Use motion only to reinforce:

- clarity
- calmness
- depth
- polish

Preferred motion patterns:

- reveal on scroll
- subtle parallax
- layered hero movement
- light mockup drift
- gentle transitions

Avoid:

- aggressive animation
- distracting hover effects
- autoplay chaos
- overdone blur/glow
- motion that hurts readability
- motion that makes the page feel gimmicky

Always respect reduced-motion preferences.

---

## UX Rules

The page must feel:

- easy to understand
- easy to scan
- easy to trust
- visually polished
- not overwhelming

The user should understand the product within a few seconds of landing on the page.

### Hero requirements

The hero must quickly answer:

- what is this?
- who is it for?
- why does it matter?
- what can I do next?

Primary CTA in v1:

- `View on GitHub`

Secondary CTA is optional:

- `See how it works`

---

## Accessibility Rules

Always maintain baseline accessibility.

Required:

- semantic HTML
- keyboard-accessible interactions
- visible focus states
- sufficient color contrast
- reduced-motion support
- alt text for meaningful images
- responsive text/layout behavior
- no text baked into decorative images when avoidable

Do not sacrifice readability for style.

---

## Performance Rules

This landing page should feel light and fast.

Prefer:

- optimized image sizes
- modern image formats when practical
- lazy loading for non-critical media
- restrained JS
- restrained animation cost
- minimal layout shift

Do not add large client-side dependencies for small visual wins.

---

## Responsive Rules

Design mobile-first in behavior, even if desktop visuals are the showcase.

Must work well on:

- mobile
- tablet
- desktop
- large desktop

On smaller screens:

- simplify motion if needed
- reduce layered complexity
- protect readability first
- keep spacing generous but efficient

Do not preserve desktop visual tricks at the cost of usability.

---

## Implementation Rules

### Keep code simple

Prefer:

- clear file names
- small modules
- predictable structure
- simple CSS architecture
- explicit markup

Avoid:

- over-abstracted utilities,
- premature component systems,
- unnecessary indirection,
- clever one-off hacks.

### Dependency rule

Do not add dependencies unless:

1. they are clearly necessary,
2. the brief benefits are concrete,
3. a simpler built-in solution is worse,
4. the user explicitly asked for them.

### File creation rule

Only add files that materially improve:

- structure,
- maintainability,
- content clarity,
- assets organization.

Do not create documentation noise.

---

## Asset Selection Rules

When adding or proposing imagery:

- choose assets that feel authentic,
- support trust,
- support product understanding,
- match clinical/editorial tone.

If a proposed image is generic, cliché, fake-looking, or unrelated to the product, reject it.

If no good image exists, prefer a clean mockup-based layout instead of weak filler imagery.

---

## Git / Change Discipline

For each task:

1. create a new branch
2. make the smallest reasonable change set
3. verify layout/content/responsiveness
4. keep commit scope tight

Do not combine unrelated improvements in one pass.

---

## Task Execution Template

When implementing a task, follow this order:

1. inspect relevant files
2. identify the smallest implementation path
3. preserve existing good patterns
4. implement
5. verify copy against `docs/landing-brief.md`
6. verify responsive behavior
7. verify accessibility basics
8. verify no unsafe claims were introduced

---

## If Unsure

When in doubt:

- choose simpler structure,
- choose calmer visuals,
- choose clearer copy,
- choose real product story over decorative flair,
- choose trust over hype.

---

## Definition of Good Output

A good landing change should feel:

- product-real,
- visually polished,
- clinically trustworthy,
- emotionally aware,
- restrained,
- easy to understand,
- clearly connected to the actual product.

A bad landing change feels:

- generic,
- fake,
- over-designed,
- AI-hype-driven,
- medically risky,
- visually noisy,
- disconnected from the product.

---

## Final Reminder

This landing page is about a **clearer handoff between patient and doctor**.

Protect that idea in:

- copy,
- visuals,
- motion,
- layout,
- assets,
- implementation decisions.
