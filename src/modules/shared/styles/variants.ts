/**
 * SportifyX — Shared Styles
 *
 * cva variants and style utilities for consistent component design.
 */

import { cva, type VariantProps } from "class-variance-authority";

// ─── Button variants ───────────────────────────────────────────────────────
export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm shadow-secondary/20",
				tertiary:
					"bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 shadow-sm shadow-tertiary/20",
				outline:
					"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm shadow-destructive/20",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-12 rounded-lg px-8 text-base",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

// ─── Badge variants ────────────────────────────────────────────────────────
export const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary/20 text-primary hover:bg-primary/30",
				secondary:
					"border-transparent bg-secondary/20 text-secondary hover:bg-secondary/30",
				tertiary:
					"border-transparent bg-tertiary/20 text-tertiary hover:bg-tertiary/30",
				outline: "text-muted-foreground hover:text-foreground",
				live: "border-transparent bg-secondary text-secondary-foreground animate-pulse",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

// ─── Card variant ──────────────────────────────────────────────────────────
export const cardVariants = cva(
	"rounded-lg border border-border bg-card text-card-foreground shadow-sm",
	{
		variants: {
			elevation: {
				none: "",
				sm: "shadow-sm shadow-black/20",
				md: "shadow-md shadow-black/30",
				lg: "shadow-lg shadow-black/40",
				glow: "shadow-lg shadow-primary/10",
			},
		},
		defaultVariants: {
			elevation: "none",
		},
	},
);

export type CardVariants = VariantProps<typeof cardVariants>;

// ─── Input variant ─────────────────────────────────────────────────────────
export const inputVariants = cva(
	"flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground transition-colors duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			size: {
				default: "h-10",
				sm: "h-8 text-xs",
				lg: "h-12 text-base",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

export type InputVariants = VariantProps<typeof inputVariants>;
