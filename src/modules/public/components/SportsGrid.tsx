"use client";

import { CircleDot, CircleUser, Orbit, Sparkles, Waves } from "lucide-react";
import { Card, CardContent } from "@/modules/shared/components/ui/card";

const sports = [
	{
		name: "Fútbol Varones",
		icon: CircleDot,
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
		borderColor: "border-emerald-500/30",
		hoverBorder: "hover:border-emerald-500/60",
		description:
			"El deporte rey con estadísticas completas de goleadores y resultados en tiempo real.",
		participants: "12 equipos",
		category: "Obligatorio",
	},
	{
		name: "Básquet Varones",
		icon: Orbit,
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
		borderColor: "border-orange-500/30",
		hoverBorder: "hover:border-orange-500/60",
		description:
			"Encestes, assistencias y control detallado de cada encuentro deportivo.",
		participants: "10 equipos",
		category: "Obligatorio",
	},
	{
		name: "Vóley Damas",
		icon: Waves,
		color: "text-pink-500",
		bgColor: "bg-pink-500/10",
		borderColor: "border-pink-500/30",
		hoverBorder: "hover:border-pink-500/60",
		description: "Sets, rallyes y seguimiento preciso de cada punto anotado.",
		participants: "8 equipos",
		category: "Obligatorio",
	},
	{
		name: "Ping Pong Mixto",
		icon: CircleUser,
		color: "text-cyan-500",
		bgColor: "bg-cyan-500/10",
		borderColor: "border-cyan-500/30",
		hoverBorder: "hover:border-cyan-500/60",
		description:
			"Partidos rápidos con control de sets y clasificaciones actualizadas.",
		participants: "16 jugadores",
		category: "Mixto",
	},
];

export function SportsGrid() {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-6">
						<Sparkles className="size-4 text-secondary" />
						<span className="text-sm font-medium text-secondary">
							Deportes disponibles
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
						Gestiona todos los deportes
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Nuestra plataforma soporta múltiples disciplinas deportivas con
						reglas y estadísticas específicas para cada una.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{sports.map((sport) => (
						<Card
							key={sport.name}
							className={`group relative overflow-hidden border ${sport.borderColor} ${sport.hoverBorder} transition-all duration-300 hover:shadow-lg`}
						>
							<div
								className={`absolute inset-0 ${sport.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
							/>

							<CardContent className="relative p-6">
								<div
									className={`inline-flex p-3 rounded-xl ${sport.bgColor} ${sport.color} mb-4`}
								>
									<sport.icon className="size-8" />
								</div>

								<h3 className="text-xl font-semibold mb-2">{sport.name}</h3>

								<p className="text-sm text-muted-foreground mb-4">
									{sport.description}
								</p>

								<div className="flex items-center justify-between text-sm">
									<span className={sport.color}>{sport.participants}</span>
									<span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
										{sport.category}
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
