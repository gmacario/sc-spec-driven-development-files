# AgentClinic Technology Stack

## Overview

AgentClinic is built using TypeScript with Next.js (App Router), providing a modern, reliable full-stack solution with server-side rendering.

## Frontend

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with responsive design
- **State Management**: React Context API for global state
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: Server Components with Server Actions

## Backend

- **Runtime**: Node.js
- **Language**: TypeScript
- **API**: Next.js API routes (server-side)
- **Database**: SQLite (via better-sqlite3 driver)
- **Authentication**: NextAuth.js for agent and staff access control

## Features

- Dashboard for agents and staff
- Therapy management
- Appointment booking system
- Ailment tracking

## Browser Support

Modern browsers with support for current browser versions to ensure optimal user experience.

## What We Are Not Using

- No React, Vue, or Svelte - server-side rendering keeps the stack simple
- No ORM - SQL is sufficient at this scale
- No Docker - not yet; that's a later phase concern
