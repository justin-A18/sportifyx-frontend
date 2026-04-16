import { Trophy } from "lucide-react";

interface AuthLogoProps {
  variant?: "auth" | "landing" | "footer";
}

export function AuthLogo({ variant = "auth" }: AuthLogoProps) {
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
          <Trophy className="size-5 text-primary-foreground" />
        </div>
        <div>
          <span className="text-lg font-bold tracking-tight">OLIMPIADAS</span>
          <span className="text-lg font-bold text-primary"> PERU</span>
        </div>
      </div>
    );
  }

  if (variant === "landing") {
    return (
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
          <Trophy className="size-5 text-primary-foreground" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold tracking-tight">OLIMPIADAS</span>
          <span className="text-lg font-bold text-primary">PERU</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30">
        <Trophy
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
