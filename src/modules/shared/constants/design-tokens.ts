/**
 * SportifyX — Design Tokens
 *
 * Centralized constants for colors, spacing, typography, animation,
 * and other design system values. Use these instead of magic numbers.
 */

// ─── Colors (OKLCH values matching globals.css) ────────────────────────────
export const colors = {
	primary: "oklch(0.546 0.245 262.88)",
	primaryForeground: "oklch(0.985 0 0)",
	secondary: "oklch(0.723 0.219 149.58)",
	secondaryForeground: "oklch(0.15 0.02 160)",
	tertiary: "oklch(0.769 0.188 70.08)",
	tertiaryForeground: "oklch(0.15 0.02 50)",
	background: "oklch(0.145 0.02 260)",
	foreground: "oklch(0.95 0.005 260)",
	card: "oklch(0.17 0.02 260)",
	cardForeground: "oklch(0.95 0.005 260)",
	muted: "oklch(0.22 0.02 260)",
	mutedForeground: "oklch(0.6 0.01 260)",
	accent: "oklch(0.546 0.245 262.88 / 0.15)",
	accentForeground: "oklch(0.546 0.245 262.88)",
	destructive: "oklch(0.577 0.245 27.325)",
	destructiveForeground: "oklch(0.985 0 0)",
	border: "oklch(0.25 0.02 260)",
	input: "oklch(0.22 0.02 260)",
	ring: "oklch(0.546 0.245 262.88)",
} as const;

// ─── Chart colors ──────────────────────────────────────────────────────────
export const chartColors = [
	"oklch(0.546 0.245 262.88)", // blue
	"oklch(0.723 0.219 149.58)", // green
	"oklch(0.769 0.188 70.08)", // amber
	"oklch(0.7 0.15 330)", // pink
	"oklch(0.6 0.18 200)", // cyan
] as const;

// ─── Spacing (4px base unit) ───────────────────────────────────────────────
export const spacing = {
	1: 4,
	2: 8,
	3: 12,
	4: 16,
	5: 20,
	6: 24,
	8: 32,
	10: 40,
	12: 48,
	16: 64,
} as const;

// ─── Border radius ─────────────────────────────────────────────────────────
export const radius = {
	sm: 6,
	md: 8,
	lg: 10,
	xl: 14,
} as const;

// ─── Animation durations (ms) ──────────────────────────────────────────────
export const animation = {
	fast: { duration: 150, easing: "ease-out" },
	normal: { duration: 250, easing: "ease-out" },
	slow: { duration: 350, easing: "ease-in-out" },
	spring: { duration: 400, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
} as const;

// ─── Z-index layers ────────────────────────────────────────────────────────
export const zIndex = {
	base: 0,
	dropdown: 100,
	sticky: 200,
	overlay: 300,
	modal: 400,
	toast: 500,
	tooltip: 600,
} as const;

// ─── Typography scale ──────────────────────────────────────────────────────
export const typography = {
	display: { fontSize: "3rem", fontWeight: 700, lineHeight: 1.1 },
	h1: { fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.2 },
	h2: { fontSize: "1.875rem", fontWeight: 600, lineHeight: 1.25 },
	h3: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
	h4: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35 },
	body: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
	small: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
	caption: { fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4 },
	label: { fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.4 },
} as const;
