"use client";

import { Button } from "@/modules/shared/components/ui/button";
import { Trophy, Medal, Users, Calendar, Zap } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute bottom-20 right-10 size-96 rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-[15%] size-1.5 rounded-full bg-tertiary animate-pulse" />
        <div className="absolute top-1/3 right-[20%] size-2 rounded-full bg-primary animate-pulse [animation-delay:500ms]" />
        <div className="absolute bottom-1/3 left-[25%] size-1 rounded-full bg-secondary animate-pulse [animation-delay:1000ms]" />
        <div className="absolute top-[60%] right-[15%] size-2.5 rounded-full bg-tertiary/60 animate-pulse [animation-delay:1500ms]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
          <Trophy className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Más de 10 años gestionando eventos deportivos
          </span>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30">
              <Zap
                className="size-7 text-primary-foreground"
                data-icon="inline-start"
              />
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                SportifyX
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            OLIMPIADAS
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            PERU
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          La mejor empresa de gestión de eventos deportivos del Perú.
          Inscripción de equipos, sorteos automáticos, seguimiento de resultados
          y estadísticas en tiempo real.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Calendar className="mr-2 size-5" />
            Crear Evento
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base font-semibold border-2"
          >
            <Medal className="mr-2 size-5" />
            Ver Deportes
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="size-5 text-secondary" />
            <span className="text-sm font-medium">+500 Instituciones</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="size-5 text-primary" />
            <span className="text-sm font-medium">+50 Torneos</span>
          </div>
          <div className="flex items-center gap-2">
            <Medal className="size-5 text-tertiary" />
            <span className="text-sm font-medium">+2000 Participantes</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
