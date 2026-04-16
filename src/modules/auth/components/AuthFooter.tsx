export function AuthFooter() {
	return (
		<footer className="w-full border-t border-border/50">
			<div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
				<div className="flex items-center gap-2">
					<div className="flex size-2 items-center justify-center rounded-full bg-secondary animate-pulse" />
					<span className="text-xs font-semibold uppercase tracking-wider text-secondary">
						Live Updates: Lima {new Date().getFullYear()} Qualifiers
					</span>
				</div>
				<div className="flex items-center gap-4 text-xs text-muted-foreground">
					<span>© {new Date().getFullYear()} SportifyX</span>
					<span className="hidden sm:inline">·</span>
					<a
						href="/soporte"
						className="transition-colors hover:text-foreground"
					>
						Soporte
					</a>
					<a
						href="/privacidad"
						className="transition-colors hover:text-foreground"
					>
						Privacidad
					</a>
				</div>
			</div>
		</footer>
	);
}
