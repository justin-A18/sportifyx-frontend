# SportifyX

Sports-first web platform. Dark-mode UI built with **Next.js 16**, **Tailwind CSS v4**, **TypeScript**, and **shadcn/ui**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Radix primitives)
- **Language:** TypeScript
- **Linting/Formatting:** Biome
- **Package Manager:** pnpm

## Design System

Full design system documentation → [`docs/design-system.md`](docs/design-system.md)

### Palette

| Role      | Color | Hex       |
| --------- | ----- | --------- |
| Primary   | Blue  | `#3B82F6` |
| Secondary | Green | `#22C55E` |
| Tertiary  | Amber | `#F59E0B` |
| Neutral   | Night | `#0F172A` |

### Typography

- **Sans:** [Inter](https://fonts.google.com/specimen/Inter)
- **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

### Architecture

Feature-based modular structure. See [architecture skill](.agents/skills/architecture/SKILL.md) for patterns.

```
src/
 ├── app/                              # Next.js App Router (composition only)
 ├── modules/
 │   ├── auth/                         # Auth feature
 │   ├── shared/                       # Cross-cutting concern
 │   │   ├── components/ui/            # shadcn components
 │   │   ├── constants/                # Design tokens
 │   │   ├── hooks/                    # Global hooks
 │   │   ├── lib/                      # utils (cn helper)
 │   │   └── styles/                   # cva variants
 │   └── ...                           # Other features
```

### Import Aliases

| Alias                              | Resolves to                          |
| ---------------------------------- | ------------------------------------ |
| `@/modules/shared/components/ui/*` | `src/modules/shared/components/ui/*` |
| `@/modules/shared/lib/*`           | `src/modules/shared/lib/*`           |
| `@/modules/shared/hooks/*`         | `src/modules/shared/hooks/*`         |
| `@/modules/shared/constants/*`     | `src/modules/shared/constants/*`     |
| `@/modules/shared/styles/*`        | `src/modules/shared/styles/*`        |

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description             |
| ------------- | ----------------------- |
| `pnpm dev`    | Start dev server        |
| `pnpm build`  | Production build        |
| `pnpm start`  | Start production server |
| `pnpm lint`   | Run Biome checks        |
| `pnpm format` | Format code with Biome  |

## shadcn/ui

Components se instalan en `src/modules/shared/components/ui/`:

```bash
pnpm dlx shadcn@latest add button card dialog
pnpm dlx shadcn@latest search @shadcn -q "sidebar"
```

```ts
import { Button } from "@/modules/shared/components/ui/button";
import { cn } from "@/modules/shared/lib/utils";
```

Project config: [`components.json`](components.json)
