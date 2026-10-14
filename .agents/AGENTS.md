# Project Coding Rules & Standards

All code written in this repository MUST strictly follow these industry-standard rules and conventions:

## 1. Constants & Enums Separation
- **No Magic Strings or Numbers**: Never hardcode string literals, status codes, API URLs, or magic numbers directly inside components or business logic.
- **Dedicated Enum/Constant Files**: Define Enums, Constants, and Route paths in dedicated files (e.g., `src/enums/`, `src/constants/`, `src/routes/paths.ts`) and import them wherever needed.

## 2. Strict TypeScript & Type Safety
- **Single Source of Truth for Types**: Define TypeScript interfaces/types for all API requests, responses, component props, and state structures in dedicated type files (`src/types/`).
- **No `any`**: Avoid using `any`. Use strict TypeScript types, generics, or `unknown` with type guards.
- **Inferred Form Types**: Infer form types directly from Zod validation schemas using `z.infer<typeof Schema>`.

## 3. Modular & Feature-Based Folder Architecture
- **Feature Modules**: Group code by feature domain (e.g., `src/features/auth/`, `src/features/employees/`, `src/features/attendance/`).
- **Standardized Feature Subfolders**: Each feature module should contain its own:
  - `components/`: UI components specific to this feature.
  - `api/` or `hooks/`: TanStack Query hooks and API call definitions.
  - `types/`: Feature-specific TypeScript interfaces.
  - `schemas/`: Zod validation schemas.
  - `constants/` / `enums/`: Feature-specific constants/enums.

## 4. Separation of Concerns & Clean Components
- **Presentational UI**: Keep React components focused purely on rendering UI and handling user interaction.
- **Custom Hooks for Logic**: Move complex state, side-effects, and data fetching into custom hooks.
- **Decoupled API Layer**: Never call `fetch`/`axios` directly inside components. API calls must live in dedicated service functions and be wrapped with TanStack Query hooks.

## 5. Forms & Validation
- **Zod & React Hook Form**: Always pair React Hook Form with Zod schema validation.
- **Centralized Schemas**: Store validation schemas in dedicated files (`src/schemas/` or feature `schemas/`).

## 6. Styling & UI Consistency
- **Tailwind CSS + shadcn/ui**: Use reusable UI primitives from `src/components/ui/`.
- **Theme & Tokens**: Use Tailwind configuration and CSS variables for consistent colors, spacing, and typography.

## 7. Error Handling & UI States
- **Graceful States**: Always handle Loading, Error, Empty, and Success states explicitly in the UI.
- **Global Error Handling**: Use centralized toast notifications for API error handling.
