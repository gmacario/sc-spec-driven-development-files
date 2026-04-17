# Phase 2 — Base Layout Validation

## Acceptance Criteria

### Server Setup

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the development server on `http://localhost:3000`
- [ ] `npm run build` compiles TypeScript to `dist/` directory
- [ ] `npm run start` runs the production build

### Route Behavior

- [ ] `GET /` returns HTTP 200
- [ ] Response body contains: "AgentClinic is open for business"
- [ ] Response includes header, nav, main, footer structure in HTML
- [ ] Response content-type is `text/html`

### TypeScript Verification

- [ ] `tsc --noEmit` returns exit code 0
- [ ] Route handler has explicit return type: `HTML` or `string`
- [ ] Layout components have explicit TypeScript types
- [ ] Adding a type error to any file causes `tsc` to fail

### Layout Component

- [ ] `src/layouts/Layout.tsx` exists and exports a layout function
- [ ] `src/layouts/HomeLayout.tsx` wraps home page content
- [ ] All content renders inside shared layout wrapper (header, nav, main, footer)

### File Structure

- [ ] `src/server.ts` exists and contains Hono app initialization
- [ ] `src/layouts/` contains layout components
- [ ] `tsconfig.json` configured for Node + JSX
- [ ] `package.json` contains all required scripts

## Testing

Run these commands to validate:

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:4000)
npm run dev

# Test TypeScript types
tsc --noEmit

# Run linter
npm run lint

# Run tests (if any exist)
npm run test
```

## Merge Checklist

- [ ] All acceptance criteria passed
- [ ] No TypeScript errors
- [ ] Code formatted with Prettier
- [ ] No secrets or sensitive data committed
- [ ] Spec files (plan.md, requirements.md, validation.md) complete
- [ ] Ready for Phase 2b: Base Layout continuation (JSX + CSS)
