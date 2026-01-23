---
trigger: always_on
---

---

## description: 'Next.js + Tailwind development standards and instructions for Antigravity'

# Next.js + Tailwind Development Instructions

Instructions for building high-quality Next.js applications with Tailwind CSS styling and TypeScript.

## Project Context

- **Framework**: Latest Next.js with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand for client state, React Server Components for server state
- **Data Fetching**: @tanstack/react-query
- **Form Handling**: React Hook Form + Zod validation

## Development Standards

### Architecture Principles

- **App Router**: Use server and client components appropriately
  - Default to React Server Components unless interactivity is needed
  - Mark client components with `"use client"` directive
- **Route Organization**: Group routes by feature/domain
- **Error Handling**: Implement proper error boundaries
- **Static Optimization**: Leverage static generation where possible
- **Code Splitting**: Ensure proper component lazy loading

### TypeScript Guidelines

- **Strict Mode**: Always enabled
- **Type Definitions**: Create clear, reusable type definitions
- **Error Handling**: Use type guards for proper error handling
- **Runtime Validation**: Use Zod for runtime type validation
- **Type Safety**: Avoid `any` types; use `unknown` when type is uncertain

### File Organization

For each feature/domain, organize files as follows:

```
feature/
├── api.ts           # Client-side API calls
├── types.ts         # Shared types and interfaces
├── helpers.ts       # Utility functions
├── constants.ts     # Shared constants
├── hooks.ts         # @tanstack/react-query and custom hooks
├── actions.ts       # Server actions
├── stores.ts        # Zustand stores
└── components/      # Feature-specific components
```

### Component Development

- **UI Components**: Use shadcn/ui for common UI components
- **Composition**: Follow component composition patterns
- **Server Components**: Use by default for better performance
- **Client Components**: Only when needed for interactivity
- **Accessibility**: Ensure all components are accessible (ARIA labels, keyboard navigation)

### Styling Standards

- **Tailwind CSS**: Use utility classes consistently
- **Color Palette**: Maintain consistent color scheme
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark Mode**: Implement dark mode support using Tailwind's dark variant
- **Container Queries**: Use for component-level responsive design
- **Semantic HTML**: Always use proper HTML5 semantic elements

### Form Handling

- **State Management**: React Hook Form for form state
- **Validation**: Zod schemas for validation
- **Accessibility**: Proper labels, ARIA attributes, and error associations
- **Error Messages**: Clear, user-friendly validation feedback
- **Loading States**: Show loading indicators during submission
- **Optimistic Updates**: Implement where appropriate for better UX

### State Management Strategy

- **Server State**: React Server Components for initial data
- **Client State**: Zustand for complex client-side state
- **Loading States**: Always handle loading states explicitly
- **Error States**: Proper error handling and user feedback
- **Optimistic Updates**: Use for better perceived performance
- **Cache Management**: Implement proper cache invalidation

### Data Fetching Patterns

- **Server Components**: Fetch data directly in server components
- **Client Fetching**: Use @tanstack/react-query for client-side data fetching
- **Prefetching**: Leverage prefetching for better performance
- **Suspense**: Use React Suspense for loading states
- **Error Handling**: Implement retry logic and error boundaries
- **Cache Invalidation**: Define clear cache invalidation strategies

### Security Best Practices

- **Input Validation**: Validate and sanitize all user inputs
- **Authentication**: Proper authentication checks on both client and server
- **CSRF Protection**: Implement CSRF tokens for state-changing operations
- **Rate Limiting**: Add rate limiting to API routes
- **API Routes**: Secure all API endpoints with proper authorization
- **Environment Variables**: Never expose sensitive data to client

### Performance Optimization

- **Images**: Use `next/image` for automatic optimization
- **Fonts**: Use `next/font` for font optimization
- **Route Prefetching**: Enable automatic route prefetching
- **Code Splitting**: Implement dynamic imports for large components
- **Bundle Analysis**: Regularly analyze and optimize bundle size
- **Lazy Loading**: Lazy load components and images below the fold

## Implementation Process

When implementing new features, follow this workflow:

1. **Planning**
   - Understand requirements thoroughly
   - Plan component hierarchy and data flow
   - Identify server vs client components

2. **Type Definitions**
   - Define TypeScript interfaces and types
   - Create Zod schemas for validation
   - Document complex types

3. **Server-Side Logic**
   - Implement server actions if needed
   - Set up data fetching in server components
   - Handle authentication and authorization

4. **Client Components**
   - Build interactive client components
   - Implement form handling with React Hook Form
   - Set up client-side data fetching with react-query

5. **Error Handling**
   - Add error boundaries
   - Implement proper error states
   - Provide user-friendly error messages

6. **Styling**
   - Implement responsive design with Tailwind
   - Ensure dark mode compatibility
   - Test across different screen sizes

7. **Loading States**
   - Add loading indicators
   - Implement skeleton screens where appropriate
   - Use Suspense boundaries

8. **Testing & Verification**
   - Test functionality thoroughly
   - Verify responsive design
   - Check accessibility compliance
   - Validate performance metrics

## Code Quality Standards

- **Readability**: Write self-documenting code with clear naming
- **DRY Principle**: Avoid code duplication; extract reusable logic
- **Single Responsibility**: Each component/function should have one clear purpose
- **Comments**: Add comments for complex logic only; prefer self-documenting code
- **Consistency**: Follow existing patterns in the codebase
- **Performance**: Consider performance implications of all implementations

## Common Patterns

### Server Component Data Fetching

```typescript
// app/users/page.tsx
async function UsersPage() {
  const users = await fetchUsers();
  return <UserList users={users} />;
}
```

### Client Component with React Query

```typescript
// components/UserProfile.tsx
"use client";

export function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <Skeleton />;
  return <div>{data.name}</div>;
}
```

### Form with Validation

```typescript
// components/LoginForm.tsx
"use client";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return <form onSubmit={form.handleSubmit(onSubmit)}>...</form>;
}
```

## Notes for Antigravity

- When creating new features, always create a task breakdown first
- Follow the implementation process systematically
- Verify changes by running the dev server and testing functionality
- Create walkthroughs documenting what was built and tested
- Ask for clarification if requirements are ambiguous
