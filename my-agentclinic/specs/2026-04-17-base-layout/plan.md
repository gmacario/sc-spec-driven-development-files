# Phase 2 — Base Layout Plan

## Task Group 1 — Project Setup

1. Initialize project with `npm init -y`
2. Install Hono (`hono`) and dev dependencies (`tsx`, `typescript`, `@types/better-sqlite3`, `vitest`, `prettier`)
3. Configure `tsconfig.json` for Node.js + JSX
4. Create initial folder structure (`src/`, `src/routes/`, `src/styles/`, `src/layouts/`, `migrations/`)
5. Add `package.json` scripts: `dev` (tsx), `build` (tsc), `start` (Node), `lint` (prettier), `test` (vitest)

## Task Group 2 — Server & Route

1. Create `src/server.ts` with Hono app initialization
2. Add root route `/` returning "AgentClinic is open for business"
3. Test route renders correctly with `tsx`

## Task Group 3 — Home Page Layout

1. Create `src/layouts/Layout.tsx` with header, nav, main, footer structure
2. Create `src/layouts/HomeLayout.tsx` wrapping home page content
3. Update root route `/` to render "AgentClinic is open for business" inside home layout
4. Add basic CSS for layout structure (centered content, readable typography)
5. Verify all content renders inside shared layout wrapper

## Task Group 4 — Type Verification

1. Add explicit types to all route handlers and layout components
2. Verify TypeScript compiles without errors
3. Confirm IDE type hints work in JSX components
