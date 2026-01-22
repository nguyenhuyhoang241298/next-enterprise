# ONUS-ENTERPRISE

A modern, production-ready web application built with Next.js 16, featuring internationalization, authentication, and a comprehensive UI component library.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

- 🚀 **Next.js 16 App Router** - Latest Next.js with React Server Components
- 🔐 **Authentication** - Secure auth flow with NextAuth v5 (JWT strategy)
- 🌐 **Internationalization** - Multi-language support (Vietnamese & English)
- 🎨 **Modern UI** - 55+ pre-built components with shadcn/ui
- 🌙 **Dark/Light Mode** - Built-in theme switching
- 📊 **Data Visualization** - Charts and graphs with Recharts
- 📝 **Form Handling** - Type-safe forms with React Hook Form + Zod
- 📖 **Documentation** - Component documentation with Storybook
- ⚡ **Type-safe** - Full TypeScript support with strict mode

---

## 🛠️ Tech Stack

| Category                 | Technology                                                                  |
| ------------------------ | --------------------------------------------------------------------------- |
| **Framework**            | [Next.js 16](https://nextjs.org/)                                           |
| **Language**             | [TypeScript 5](https://www.typescriptlang.org/)                             |
| **UI Library**           | [React 19](https://react.dev/)                                              |
| **Styling**              | [Tailwind CSS 4](https://tailwindcss.com/)                                  |
| **Components**           | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **State Management**     | [Zustand](https://zustand-demo.pmnd.rs/)                                    |
| **Data Fetching**        | [TanStack Query](https://tanstack.com/query)                                |
| **Forms**                | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)   |
| **Authentication**       | [NextAuth.js v5](https://authjs.dev/)                                       |
| **Internationalization** | [Intlayer](https://intlayer.org/)                                           |
| **HTTP Client**          | [Axios](https://axios-http.com/)                                            |
| **Charts**               | [Recharts](https://recharts.org/)                                           |
| **Documentation**        | [Storybook](https://storybook.js.org/)                                      |

---

## 📁 Project Structure

```
onus-ck/
├── app/                        # Next.js App Router
│   ├── [locale]/               # Dynamic locale routing (vi/en)
│   │   ├── (protected)/        # Authenticated routes
│   │   │   └── home/           # Dashboard home
│   │   └── (public)/           # Public routes
│   │       └── (auth)/         # Authentication pages
│   ├── api/                    # API routes
│   ├── globals.css             # Global styles & design tokens
│   └── layout.tsx              # Root layout
│
├── components/                 # React components
│   ├── ui/                     # shadcn/ui components (55+)
│   ├── sidebar/                # Sidebar navigation
│   ├── navigation/             # Navigation components
│   ├── providers/              # Context providers
│   └── stories/                # Storybook stories
│
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── user/                   # User-related hooks
│
├── lib/                        # Utilities & configurations
│   ├── auth/                   # Auth configuration & helpers
│   ├── axios/                  # Axios client & server instances
│   └── utils.ts                # Utility functions
│
├── public/                     # Static assets
├── auth.ts                     # NextAuth configuration
├── env.ts                      # Environment variable validation
├── intlayer.config.ts          # i18n configuration
└── proxy.ts                    # Proxy configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 10.x (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd onus-ck
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the example env file
   cp .env.development .env.local
   ```

   Required environment variables:

   ```env
   # Server
   AUTH_SECRET=your-auth-secret
   AUTH_URL=http://localhost:3000
   API_ENDPOINT=https://api.example.com

   # Client
   NEXT_PUBLIC_API_ENDPOINT=https://api.example.com
   NEXT_PUBLIC_AUTH_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `pnpm dev`             | Start development server with i18n watcher |
| `pnpm build`           | Build for production                       |
| `pnpm start`           | Start production server                    |
| `pnpm lint`            | Run ESLint                                 |
| `pnpm storybook`       | Start Storybook on port 6006               |
| `pnpm build-storybook` | Build Storybook for deployment             |

---

## 🌐 Internationalization

This project supports multiple languages using [Intlayer](https://intlayer.org/):

- 🇻🇳 **Vietnamese** (default)
- 🇺🇸 **English**

### Adding Translations

Create content files with the `.content.ts` suffix:

```typescript
// components/example/example.content.ts
import { t, type DeclarationContent } from 'intlayer'

const exampleContent = {
  key: 'example',
  content: {
    title: t({
      vi: 'Tiêu đề',
      en: 'Title',
    }),
  },
} satisfies DeclarationContent

export default exampleContent
```

---

## 🔐 Authentication

Authentication is handled by NextAuth v5 with JWT strategy:

- **Session Management**: JWT-based sessions
- **Token Storage**: Access and refresh tokens stored securely
- **Protected Routes**: Route groups `(protected)` require authentication
- **Public Routes**: Route groups `(public)` are accessible without auth

---

## 🎨 UI Components

The project includes **55+ pre-built components** from shadcn/ui:

<details>
<summary>View all components</summary>

- Accordion
- Alert / Alert Dialog
- Avatar
- Badge
- Breadcrumb
- Button / Button Group
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Combobox
- Command
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Empty State
- Error
- Field
- Hover Card
- Input / Input Group / Input OTP
- Item
- Kbd
- Label
- Menubar
- Navigation Menu
- Not Found
- Pagination
- Popover
- Progress
- Radio Group
- Resizable
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner (Toast)
- Spinner
- Switch
- Table
- Tabs
- Textarea
- Toggle / Toggle Group
- Tooltip

</details>

### Storybook

View and interact with components in Storybook:

```bash
pnpm storybook
```

---

## 🐳 Docker

Build and run with Docker:

```bash
# Build the image
docker build -t onus-ck .

# Run the container
docker run -p 3000:3000 onus-ck
```

---

## 🧪 Code Quality

- **ESLint** - Linting with Next.js config
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **TypeScript** - Strict mode enabled

### Pre-commit Hooks

The project uses Husky with pretty-quick for automatic formatting on commit.

---

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit your changes: `git commit -m 'Add amazing feature'`
3. Push to the branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 👥 Team

Built with ❤️ by the ONUS Team.
