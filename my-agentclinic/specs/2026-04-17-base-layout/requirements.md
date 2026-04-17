# Phase 2 — Base Layout Requirements

## Scope

This phase establishes the foundational structure of AgentClinic:

- **Hono server** configured with TypeScript and `tsx` for development
- **Single root route** (`/`) that returns: "AgentClinic is open for business"
- **Server-side JSX layout** with header, nav, main, footer structure
- **Home page layout** wrapping content in shared layout
- **TypeScript configuration** that verifies end-to-end type safety
- **Basic CSS** with custom properties, reset, and typography
- **Project scaffolding** ready for Phase 3 (database, agent list)

## Decisions

1. **Framework**: Hono chosen over Express/Fastify per tech-stack.md — lightweight, TypeScript-first, excellent DX
2. **Development**: `tsx` used instead of traditional build step — faster iteration, simpler config
3. **Server model**: All rendering server-side (per mission.md) — no client-side framework overhead
4. **File structure**: Organized by concern (`src/routes/`, `src/layouts/`, `src/styles/`) to support future phases
5. **JSX components**: Layouts are pure functions returning Hono's HTML — no React overhead
6. **CSS approach**: Plain CSS with custom properties (per tech-stack.md) — no build step, modern browsers only
7. **Layout pattern**: Shared layout component applied to all routes for consistency

## Context

- **Stakeholders**: Course students learning spec-driven development; conference booth developers
- **Success criteria**: A working TypeScript server that proves the stack is viable
- **Constraints**: Steve's requirement for modern browsers only; no Docker or complex build tools yet
- **Dependency**: Phase 1 completed (Hello Hono verified concept); Phase 3 depends on this scaffold

## Out of Scope

- Database setup and agent list — Phase 3
- Ailments/therapies catalogs — Phase 5-6
- Appointment booking and dashboard — Phase 7-8
- Any routing beyond `/` — Phases 3+

## Definition of Done

- [ ] Project initializes and runs via `npm run dev`
- [ ] Visiting `/` returns "AgentClinic is open for business" inside layout
- [ ] Layout component renders header, nav, main, footer structure
- [ ] TypeScript compiles with `tsc --noEmit` without errors
- [ ] All route handlers and layout components have explicit type annotations
- [ ] Basic CSS applied (custom properties, reset, typography)
- [ ] Project structure ready for database and agent list in Phase 3
