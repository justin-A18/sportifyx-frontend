"use client";

import { Button } from "@/modules/shared/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <Play className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Comienza ahora
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            ¿Listo para organizar tu
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Olimpiada?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Únete a cientos de instituciones educativas que ya confían en
            Olimpiadas PERU para gestionar sus eventos deportivos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40"
              >
                Crear cuenta gratuita
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg font-semibold border-2 bg-background/50"
              >
                Iniciar sesión
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Sin tarjeta de crédito · Configuración en 2 minutos
          </p>
        </div>
      </div>
    </section>
  );
}
