import { cn } from "@/modules/shared/lib/utils";
import { buttonVariants } from "@/modules/shared/styles/variants";

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-4">
			<h2 className="text-lg font-semibold text-foreground">{title}</h2>
			{children}
		</section>
	);
}

function ColorSwatch({ name, token }: { name: string; token: string }) {
	return (
		<div className="space-y-1.5">
			<div
				className="h-16 rounded-lg border border-border shadow-sm"
				style={{ backgroundColor: `var(--${token})` }}
			/>
			<p className="text-xs font-medium text-foreground">{name}</p>
			<p className="text-xs text-muted-foreground font-mono">var(--{token})</p>
		</div>
	);
}

export default function DesignSystemPreview() {
	return (
		<div className="min-h-screen bg-background p-6 md:p-12">
			<div className="mx-auto max-w-5xl space-y-12">
				{/* Header */}
				<header className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tight text-foreground">
						Estadio Digital — Design System
					</h1>
					<p className="text-muted-foreground">
						Sports-first dark UI with energetic blue, green, and amber accents.
					</p>
				</header>

				{/* Colors */}
				<Section title="Colors">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						<ColorSwatch name="Primary" token="primary" />
						<ColorSwatch name="Secondary" token="secondary" />
						<ColorSwatch name="Tertiary" token="tertiary" />
						<ColorSwatch name="Background" token="background" />
						<ColorSwatch name="Foreground" token="foreground" />
						<ColorSwatch name="Card" token="card" />
						<ColorSwatch name="Muted" token="muted" />
						<ColorSwatch name="Accent" token="accent" />
						<ColorSwatch name="Destructive" token="destructive" />
						<ColorSwatch name="Border" token="border" />
						<ColorSwatch name="Ring" token="ring" />
						<ColorSwatch name="Input" token="input" />
					</div>
				</Section>

				{/* Chart Colors */}
				<Section title="Chart Colors">
					<div className="grid grid-cols-5 gap-4">
						{Array.from({ length: 5 }).map((_, i) => (
							<ColorSwatch
								key={i}
								name={`Chart ${i + 1}`}
								token={`chart-${i + 1}`}
							/>
						))}
					</div>
				</Section>

				{/* Buttons */}
				<Section title="Buttons">
					<div className="flex flex-wrap items-center gap-3">
						<button className={buttonVariants({ variant: "default" })}>
							Default
						</button>
						<button className={buttonVariants({ variant: "secondary" })}>
							Secondary
						</button>
						<button className={buttonVariants({ variant: "tertiary" })}>
							Tertiary
						</button>
						<button className={buttonVariants({ variant: "outline" })}>
							Outline
						</button>
						<button className={buttonVariants({ variant: "ghost" })}>
							Ghost
						</button>
						<button className={buttonVariants({ variant: "destructive" })}>
							Destructive
						</button>
					</div>
					<div className="flex flex-wrap items-center gap-3 pt-2">
						<button className={buttonVariants({ size: "sm" })}>Small</button>
						<button className={buttonVariants({ size: "default" })}>
							Default
						</button>
						<button className={buttonVariants({ size: "lg" })}>Large</button>
						<button className={buttonVariants({ size: "icon" })}>★</button>
					</div>
				</Section>

				{/* Badges */}
				<Section title="Badges">
					<div className="flex flex-wrap items-center gap-3">
						<span
							className={cn(
								"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
								"border-transparent bg-primary/20 text-primary",
							)}
						>
							Default
						</span>
						<span
							className={cn(
								"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
								"border-transparent bg-secondary/20 text-secondary",
							)}
						>
							Secondary
						</span>
						<span
							className={cn(
								"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
								"border-transparent bg-tertiary/20 text-tertiary",
							)}
						>
							Tertiary
						</span>
						<span
							className={cn(
								"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
								"text-muted-foreground",
							)}
						>
							Outline
						</span>
						<span
							className={cn(
								"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
								"border-transparent bg-secondary text-secondary-foreground animate-pulse",
							)}
						>
							● Live
						</span>
					</div>
				</Section>

				{/* Cards */}
				<Section title="Cards">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
							<h3 className="font-semibold">Default</h3>
							<p className="mt-1 text-sm text-muted-foreground">No elevation</p>
						</div>
						<div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-md shadow-black/30">
							<h3 className="font-semibold">Medium</h3>
							<p className="mt-1 text-sm text-muted-foreground">Shadow md</p>
						</div>
						<div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg shadow-primary/10">
							<h3 className="font-semibold">Glow</h3>
							<p className="mt-1 text-sm text-muted-foreground">Primary glow</p>
						</div>
					</div>
				</Section>

				{/* Typography */}
				<Section title="Typography">
					<div className="space-y-4">
						<div>
							<p className="text-xs text-muted-foreground font-mono">
								Display — 3rem / 700
							</p>
							<p className="text-5xl font-bold tracking-tight">
								Estadio Digital
							</p>
						</div>
						<div>
							<p className="text-xs text-muted-foreground font-mono">
								H1 — 2.25rem / 700
							</p>
							<h1 className="text-4xl font-bold">Headline One</h1>
						</div>
						<div>
							<p className="text-xs text-muted-foreground font-mono">
								H2 — 1.875rem / 600
							</p>
							<h2 className="text-3xl font-semibold">Headline Two</h2>
						</div>
						<div>
							<p className="text-xs text-muted-foreground font-mono">
								Body — 1rem / 400
							</p>
							<p className="text-base leading-relaxed text-muted-foreground">
								Body text for paragraphs and descriptions. This is the standard
								reading experience across the application.
							</p>
						</div>
					</div>
				</Section>

				{/* Dot grid background preview */}
				<Section title="Background Pattern">
					<div className="h-32 rounded-lg border border-border bg-background">
						<p className="p-4 text-xs text-muted-foreground">
							Subtle dot-grid pattern visible in dark mode.
						</p>
					</div>
				</Section>
			</div>
		</div>
	);
}
