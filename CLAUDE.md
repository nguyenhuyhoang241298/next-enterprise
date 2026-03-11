# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev**: `pnpm dev` (runs intlayer watch + next dev)
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` (eslint, flat config)
- **Storybook**: `pnpm storybook` (port 6006)
- **Format**: `npx pretty-quick --staged` (auto-runs via Husky pre-commit)
- **Package manager**: pnpm 10.24.0 (enforced via packageManager field)

## Architecture

### Stack

Next.js 16 (App Router, RSC), React 19, TypeScript 5 (strict), Tailwind CSS 4, shadcn/ui (Base UI + Radix), Zustand, TanStack Query, NextAuth v5, Intlayer (i18n), Axios, React Hook Form + Zod 4.

### Route Structure

```
app/
  [locale]/                  # Dynamic locale segment (vi default, en)
    (protected)/             # Requires auth — guarded by middleware
    (public)/(auth)/         # Login/auth pages
  api/auth/[...nextauth]/    # NextAuth API routes
  api/health/                # Health check
```

Middleware in `proxy.ts` handles auth checks, token refresh, and i18n routing.

### Key Architectural Patterns

- **Server-first**: Use React Server Components by default; add `'use client'` only when needed.
- **Auth flow**: NextAuth v5 with JWT strategy + Credentials provider. Tokens stored in httpOnly cookies. Client-side Axios interceptor handles 401 token refresh with request queuing. See `lib/auth/` and `lib/axios/`.
- **Data fetching**: TanStack Query for client-side; server components fetch directly. Axios clients split: `axiosClient.ts` (browser, with interceptors) and `axiosServer.ts` (server-side).
- **State**: Zustand for client state, RSC for server state.
- **i18n**: Intlayer with `.content.ts` files. Default locale: Vietnamese (vi). Supported: vi, en.
- **Environment**: Validated via `env.ts` using `@t3-oss/env-nextjs`. Server vars: `AUTH_SECRET`, `AUTH_URL`, `API_ENDPOINT`. Client vars: `NEXT_PUBLIC_API_ENDPOINT`, `NEXT_PUBLIC_AUTH_URL`.

### Feature Folder Convention

Each feature organizes files as:
- `api.ts` — client API calls
- `types.ts` — shared types/interfaces
- `helpers.ts` — utility functions
- `constants.ts` — shared constants
- `hooks.ts` — TanStack Query hooks and custom hooks
- `components/` — feature-specific components
- `actions.ts` — server actions
- `stores.ts` — Zustand stores

### Path Alias

`@/*` maps to project root (e.g., `@/components/ui/button`).

## UI & Styling

- **Components**: 55+ shadcn/ui components in `components/ui/`. Use `npx shadcn@latest add <component>` to add new ones.
- **Icons**: Hugeicons (`@hugeicons/react` and `@hugeicons-pro/core-stroke-rounded`). Do NOT use Lucide.
- **Theming**: CSS variables for colors, dark/light mode via `next-themes`.
- **Utility**: Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional classes.

## Code Style

- No semicolons, single quotes, trailing commas, 80 char width, 2-space indent (enforced by Prettier).
- Forms: React Hook Form + Zod schema validation.
- TypeScript strict mode with `noUncheckedIndexedAccess`.
