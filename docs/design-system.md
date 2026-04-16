# SportifyX — Design System

> Sports-first dark UI with energetic blue, green, and amber accents.
>
> **Location:** `docs/design-system.md` · **Globals:** `src/app/globals.css` · **Tokens:** `src/modules/shared/constants/design-tokens.ts` · **Variants:** `src/modules/shared/styles/variants.ts` · **Components:** `src/modules/shared/components/ui/`

---

## Color Palette

### Primary — `#3B82F6` (Estadio Blue)

Actions, CTAs, links, active states, focus rings.

| Token                  | OKLCH                       | Tailwind                  |
| ---------------------- | --------------------------- | ------------------------- |
| `--primary`            | `oklch(0.546 0.245 262.88)` | `bg-primary`              |
| `--primary-foreground` | `oklch(0.985 0 0)`          | `text-primary-foreground` |

### Secondary — `#22C55E` (Estadio Green)

Success states, live indicators, progress bars, scores.

| Token                    | OKLCH                       | Tailwind                    |
| ------------------------ | --------------------------- | --------------------------- |
| `--secondary`            | `oklch(0.723 0.219 149.58)` | `bg-secondary`              |
| `--secondary-foreground` | `oklch(0.15 0.02 160)`      | `text-secondary-foreground` |

### Tertiary — `#F59E0B` (Estadio Amber)

Warnings, highlights, badges, VIP features.

| Token                   | OKLCH                      | Tailwind                   |
| ----------------------- | -------------------------- | -------------------------- |
| `--tertiary`            | `oklch(0.769 0.188 70.08)` | `bg-tertiary`              |
| `--tertiary-foreground` | `oklch(0.15 0.02 50)`      | `text-tertiary-foreground` |

### Neutral — `#0F172A` (Estadio Night)

Canvas background for dark mode.

| Token          | OKLCH                   | Tailwind          |
| -------------- | ----------------------- | ----------------- |
| `--background` | `oklch(0.145 0.02 260)` | `bg-background`   |
| `--foreground` | `oklch(0.95 0.005 260)` | `text-foreground` |

### Chart Colors

| Token       | Usage                         |
| ----------- | ----------------------------- |
| `--chart-1` | Primary data series (blue)    |
| `--chart-2` | Secondary data series (green) |
| `--chart-3` | Tertiary data series (amber)  |
| `--chart-4` | Accent data series (pink)     |
| `--chart-5` | Complement data series (cyan) |

---

## Typography

| Role    | Font       | Size            | Weight | Line-height |
| ------- | ---------- | --------------- | ------ | ----------- |
| Display | Geist Sans | 3rem / 48px     | 700    | 1.1         |
| H1      | Geist Sans | 2.25rem / 36px  | 700    | 1.2         |
| H2      | Geist Sans | 1.875rem / 30px | 600    | 1.25        |
| H3      | Geist Sans | 1.5rem / 24px   | 600    | 1.3         |
| H4      | Geist Sans | 1.25rem / 20px  | 600    | 1.35        |
| Body    | Geist Sans | 1rem / 16px     | 400    | 1.5         |
| Small   | Geist Sans | 0.875rem / 14px | 400    | 1.5         |
| Caption | Geist Sans | 0.75rem / 12px  | 500    | 1.4         |
| Label   | Geist Sans | 0.75rem / 12px  | 600    | 1.4         |

---

## Spacing Scale

Base unit: **4px**

| Token      | Value | Usage                                        |
| ---------- | ----- | -------------------------------------------- |
| `space-1`  | 4px   | Tight padding, icon gaps                     |
| `space-2`  | 8px   | Component padding, gap between related items |
| `space-3`  | 12px  | Card padding, form field gaps                |
| `space-4`  | 16px  | Section gaps, modal padding                  |
| `space-5`  | 20px  | Medium section spacing                       |
| `space-6`  | 24px  | Large section gaps                           |
| `space-8`  | 32px  | Page-level spacing                           |
| `space-10` | 40px  | Major layout divisions                       |
| `space-12` | 48px  | Hero sections                                |
| `space-16` | 64px  | Page margins on desktop                      |

---

## Border Radius

| Token       | Value | Usage                               |
| ----------- | ----- | ----------------------------------- |
| `radius-sm` | 6px   | Small badges, tags, inline elements |
| `radius-md` | 8px   | Buttons, inputs, chips              |
| `radius-lg` | 10px  | Cards, panels, modals               |
| `radius-xl` | 14px  | Large containers, hero sections     |

---

## Shadows (Dark Mode)

| Token                   | Usage                                           |
| ----------------------- | ----------------------------------------------- |
| `shadow-sm`             | Subtle elevation — cards resting on canvas      |
| `shadow-md`             | Medium elevation — floating elements, dropdowns |
| `shadow-lg`             | High elevation — modals, sheets, toasts         |
| `shadow-glow-primary`   | Primary CTA glow effect                         |
| `shadow-glow-secondary` | Live/active indicator glow                      |

---

## Component Tokens

### Button Variants

| Variant       | Background       | Text                          | Border   |
| ------------- | ---------------- | ----------------------------- | -------- |
| `default`     | `bg-primary`     | `text-primary-foreground`     | —        |
| `secondary`   | `bg-secondary`   | `text-secondary-foreground`   | —        |
| `tertiary`    | `bg-tertiary`    | `text-tertiary-foreground`    | —        |
| `outline`     | `bg-transparent` | `text-foreground`             | `border` |
| `ghost`       | `bg-transparent` | `text-foreground`             | —        |
| `destructive` | `bg-destructive` | `text-destructive-foreground` | —        |

### Badge Variants

| Variant     | Background        | Text                               |
| ----------- | ----------------- | ---------------------------------- |
| `default`   | `bg-primary/20`   | `text-primary`                     |
| `secondary` | `bg-secondary/20` | `text-secondary`                   |
| `tertiary`  | `bg-tertiary/20`  | `text-tertiary`                    |
| `outline`   | `bg-transparent`  | `text-muted-foreground` + `border` |

---

## Animation Tokens

| Token    | Duration | Easing                              | Usage                              |
| -------- | -------- | ----------------------------------- | ---------------------------------- |
| `fast`   | 150ms    | `ease-out`                          | Hover states, micro-interactions   |
| `normal` | 250ms    | `ease-out`                          | Button press, toggle switches      |
| `slow`   | 350ms    | `ease-in-out`                       | Modal open/close, page transitions |
| `spring` | 400ms    | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Card reveals, hero entrances       |

---

## Z-Index Scale

| Layer      | Value | Usage                    |
| ---------- | ----- | ------------------------ |
| `base`     | 0     | Default stacking         |
| `dropdown` | 100   | Dropdown menus           |
| `sticky`   | 200   | Sticky headers, nav bars |
| `overlay`  | 300   | Overlay panels           |
| `modal`    | 400   | Modals, dialogs          |
| `toast`    | 500   | Toast notifications      |
| `tooltip`  | 600   | Tooltips, popovers       |

---

## Anti-Patterns (Avoid)

- ❌ Purple gradients on white — this is not a generic SaaS
- ❌ Emojis as icons — use Lucide or Tabler SVG icons
- ❌ Light backgrounds for dashboards — dark mode is the default
- ❌ Raw hex values in components — always use semantic tokens
- ❌ `space-y-*` / `space-x-*` — use `flex` + `gap-*`
- ❌ Manual `z-index` on overlay components — let components manage their own stacking
- ❌ Mixing flat and glassmorphic styles randomly — stay consistent

---

## Project Structure

All shared code lives under `src/modules/shared/`:

```
src/modules/shared/
 ├── components/
 │   └── ui/              ← shadcn components (Button, Card, Dialog…)
 ├── constants/
 │   └── design-tokens.ts ← Color, spacing, radius, animation, z-index, typography tokens
 ├── hooks/               ← Global shared hooks (useAuth, useTheme…)
 ├── lib/
 │   └── utils.ts         ← cn() helper
 └── styles/
     └── variants.ts      ← cva variants (button, badge, card, input)
```

### Import Aliases

| Alias                              | Resolves to                          |
| ---------------------------------- | ------------------------------------ |
| `@/modules/shared/components/ui/*` | `src/modules/shared/components/ui/*` |
| `@/modules/shared/lib/*`           | `src/modules/shared/lib/*`           |
| `@/modules/shared/hooks/*`         | `src/modules/shared/hooks/*`         |
| `@/modules/shared/constants/*`     | `src/modules/shared/constants/*`     |
| `@/modules/shared/styles/*`        | `src/modules/shared/styles/*`        |

### Adding shadcn Components

```bash
pnpm dlx shadcn@latest add button card dialog
# → installs to src/modules/shared/components/ui/
```

---

## Accessibility

| Requirement            | Value                               |
| ---------------------- | ----------------------------------- |
| Text contrast (normal) | ≥ 4.5:1                             |
| Text contrast (large)  | ≥ 3:1                               |
| Touch target minimum   | 44×44px                             |
| Focus ring             | 2px solid `--ring` with 2px offset  |
| Reduced motion         | Respect `prefers-reduced-motion`    |
| Keyboard navigation    | Full tab order matching visual flow |

---

_Last updated: April 2026_
