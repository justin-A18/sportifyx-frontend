"use client";

import { BadgeCheck, Plus, ShieldCheck, Trash2, Trophy } from "lucide-react";
import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { Button } from "@/modules/shared/components/ui/button";
import { Card, CardContent } from "@/modules/shared/components/ui/card";
import { Input } from "@/modules/shared/components/ui/input";
import { Label } from "@/modules/shared/components/ui/label";

type SportStatus = "Activo" | "En preparación" | "Cerrado";

type Sport = {
  id: number;
  name: string;
  category: string;
  minParticipants: number;
  statControl: string;
  status: SportStatus;
  required: boolean;
};

const REQUIRED_SPORTS: Sport[] = [
  {
    id: 1,
    name: "Fútbol Varones",
    category: "Varones",
    minParticipants: 12,
    statControl: "Goles y tarjetas",
    status: "Activo",
    required: true,
  },
  {
    id: 2,
    name: "Básquet Varones",
    category: "Varones",
    minParticipants: 10,
    statControl: "Puntos y faltas",
    status: "Activo",
    required: true,
  },
  {
    id: 3,
    name: "Vóley Damas",
    category: "Damas",
    minParticipants: 8,
    statControl: "Sets y puntos",
    status: "Activo",
    required: true,
  },
  {
    id: 4,
    name: "Ping Pong Mixto",
    category: "Mixto",
    minParticipants: 16,
    statControl: "Sets ganados",
    status: "Activo",
    required: true,
  },
];

const EMPTY_FORM = {
  name: "",
  category: "Mixto",
  minParticipants: "4",
  statControl: "Puntos",
  status: "En preparación" as SportStatus,
};

const categories = ["Varones", "Damas", "Mixto", "Libre"];
const statControls = [
  "Puntos",
  "Goles y tarjetas",
  "Puntos y faltas",
  "Sets y puntos",
  "Sets ganados",
  "Tiempo y marcas",
];
const statuses: SportStatus[] = ["Activo", "En preparación", "Cerrado"];

export function SportsManager() {
  const [sports, setSports] = useState<Sport[]>(REQUIRED_SPORTS);
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  const summary = useMemo(
    () => ({
      total: sports.length,
      active: sports.filter((sport) => sport.status === "Activo").length,
      required: sports.filter((sport) => sport.required).length,
    }),
    [sports],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = form.name.trim();
    const minParticipants = Number(form.minParticipants);

    if (!trimmedName) {
      setError("Ingrese el nombre del deporte.");
      return;
    }

    if (
      sports.some(
        (sport) => sport.name.toLowerCase() === trimmedName.toLowerCase(),
      )
    ) {
      setError("Ese deporte ya existe en la lista.");
      return;
    }

    if (!Number.isInteger(minParticipants) || minParticipants < 2) {
      setError(
        "El mínimo de participantes debe ser un número mayor o igual a 2.",
      );
      return;
    }

    setSports((currentSports) => [
      ...currentSports,
      {
        id: Date.now(),
        name: trimmedName,
        category: form.category,
        minParticipants,
        statControl: form.statControl,
        status: form.status,
        required: false,
      },
    ]);
    setForm(EMPTY_FORM);
    setError("");
  }

  function removeSport(id: number) {
    setSports((currentSports) =>
      currentSports.filter((sport) => sport.id !== id || sport.required),
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Trophy className="size-4" />
              Olimpiadas PERU
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Gestión de deportes
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Registra disciplinas para una olimpiada interna, controla los
              deportes obligatorios y revisa la información en una tabla
              responsive.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <SummaryCard
              icon={Trophy}
              label="Deportes"
              value={summary.total}
              tone="text-primary"
            />
            <SummaryCard
              icon={BadgeCheck}
              label="Activos"
              value={summary.active}
              tone="text-secondary"
            />
            <SummaryCard
              icon={ShieldCheck}
              label="Obligatorios"
              value={summary.required}
              tone="text-tertiary"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-[380px_1fr] lg:py-10">
        <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
          <CardContent className="p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Crear deporte</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Usa este formulario para agregar deportes adicionales al evento.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <Field label="Nombre del deporte" htmlFor="sport-name">
                <Input
                  id="sport-name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Ej. Atletismo"
                  autoComplete="off"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Field label="Categoría" htmlFor="sport-category">
                  <Select
                    id="sport-category"
                    value={form.category}
                    onChange={(value) =>
                      setForm((current) => ({ ...current, category: value }))
                    }
                    options={categories}
                  />
                </Field>

                <Field label="Mínimo de participantes" htmlFor="sport-min">
                  <Input
                    id="sport-min"
                    type="number"
                    min={2}
                    value={form.minParticipants}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        minParticipants: event.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              <Field label="Control estadístico" htmlFor="sport-stats">
                <Select
                  id="sport-stats"
                  value={form.statControl}
                  onChange={(value) =>
                    setForm((current) => ({ ...current, statControl: value }))
                  }
                  options={statControls}
                />
              </Field>

              <Field label="Estado" htmlFor="sport-status">
                <Select
                  id="sport-status"
                  value={form.status}
                  onChange={(value) =>
                    setForm((current) => ({
                      ...current,
                      status: value as SportStatus,
                    }))
                  }
                  options={statuses}
                />
              </Field>

              {error && (
                <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" size="lg" className="w-full">
                <Plus className="mr-2 size-4" />
                Agregar deporte
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
          <CardContent className="p-0">
            <div className="border-b border-border/50 p-5 sm:p-6">
              <h2 className="text-xl font-semibold">Deportes registrados</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Los deportes obligatorios no pueden eliminarse del evento.
              </p>
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border/50 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Deporte</th>
                    <th className="px-6 py-3 font-semibold">Categoría</th>
                    <th className="px-6 py-3 font-semibold">Mínimo</th>
                    <th className="px-6 py-3 font-semibold">Estadística</th>
                    <th className="px-6 py-3 font-semibold">Estado</th>
                    <th className="px-6 py-3 text-right font-semibold">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {sports.map((sport) => (
                    <tr key={sport.id} className="hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="font-medium">{sport.name}</div>
                        {sport.required && (
                          <div className="mt-1 text-xs text-tertiary">
                            Obligatorio
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {sport.category}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {sport.minParticipants}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {sport.statControl}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={sport.status} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          disabled={sport.required}
                          aria-label={`Eliminar ${sport.name}`}
                          onClick={() => removeSport(sport.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-3 p-4 md:hidden">
              {sports.map((sport) => (
                <div
                  key={sport.id}
                  className="rounded-xl border border-border/50 bg-background/50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{sport.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sport.category} · mínimo {sport.minParticipants}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      disabled={sport.required}
                      aria-label={`Eliminar ${sport.name}`}
                      onClick={() => removeSport(sport.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <StatusBadge status={sport.status} />
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {sport.statControl}
                    </span>
                    {sport.required && (
                      <span className="rounded-full bg-tertiary/10 px-2.5 py-1 text-xs font-medium text-tertiary">
                        Obligatorio
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Trophy;
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <Card className="border-border/50 bg-card/70 backdrop-blur-xl">
      <CardContent className="flex items-center gap-4 p-4">
        <div className={`rounded-xl bg-background p-3 ${tone}`}>
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-8 w-full rounded-md border border-input bg-background px-2.5 py-1 text-base text-foreground outline-none transition-colors [color-scheme:dark] focus-visible:ring-2 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="bg-popover text-popover-foreground"
        >
          {option}
        </option>
      ))}
    </select>
  );
}

function StatusBadge({ status }: { status: SportStatus }) {
  const className =
    status === "Activo"
      ? "bg-secondary/10 text-secondary"
      : status === "Cerrado"
        ? "bg-muted text-muted-foreground"
        : "bg-tertiary/10 text-tertiary";

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${className}`}
    >
      {status}
    </span>
  );
}
