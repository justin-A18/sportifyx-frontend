import { Zap } from "lucide-react";

export function AuthLogo() {
	return (
		<div className="flex flex-col items-center gap-3">
			<div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30">
				<Zap
					className="size-6 text-primary-foreground"
					data-icon="inline-start"
				/>
			</div>
			<div className="text-center">
				<h1 className="text-xl font-bold tracking-tight text-foreground">
					SportifyX
				</h1>
				<p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
					Kinetic Vault Precision
				</p>
			</div>
		</div>
	);
}
