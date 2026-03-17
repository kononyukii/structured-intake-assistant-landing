# Structured Intake Assistant Landing

Standalone marketing landing page for **Structured Intake Assistant**.

The page presents the product as a privacy-first, local-first way to help patients prepare a clear, doctor-friendly summary before a primary care visit.

## Product framing

This project is about:

- structured intake before a visit
- a doctor-friendly summary
- private by default, local-first design
- optional AI only with explicit consent
- open-source product development

This project is not:

- an AI doctor
- a diagnosis tool
- a symptom checker
- a treatment advisor
- a triage or urgency system

## Project structure

- `index.html` - single-page landing markup
- `styles.css` - visual system, layout, responsive styles
- `script.js` - lightweight reveal-on-scroll behavior
- `docs/landing-brief.md` - source of truth for positioning, content, and design direction
- `AGENTS.md` - repository-specific implementation rules

## Local development

No build step is required. Start a static server from the repository root:

```bash
python3 -m http.server 4173
```

Then open the landing locally:

```text
http://localhost:4173
```

## Current status

This repository is the v1 landing experience:

- static single-page implementation
- responsive layout with accessibility and reduced-motion basics
- representative summary mockups that support the product story without pretending to be a full product UI

## Primary CTA

Current CTA target:

- [View on GitHub](https://github.com/kononyukii/structured-intake-assistant-landing)
