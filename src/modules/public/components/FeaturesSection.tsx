"use client";

import {
	Award,
	BarChart3,
	CalendarCheck,
	Shield,
	Shuffle,
	Users,
} from "lucide-react";
import { Card, CardContent } from "@/modules/shared/components/ui/card";

const features = [
	{
		icon: Users,
		title: "Inscripción de Instituciones",
		description:
			"Cada institución se registra con su equipo y selecciona los deportes en los que participara.",
		color: "text-primary",
	},
	{
		icon: Shuffle,
		title: "Sorteo Automático",
		description:
			"Sistema inteligente que genera series y enfrentamientos de forma aleatoria y justa.",
		color: "text-secondary",
	},
	{
		icon: CalendarCheck,
		title: "Programación de Encuentros",
		description:
			"Define fechas, horarios y lugares para cada enfrentamiento deportivo.",
		color: "text-tertiary",
	},
	{
		icon: BarChart3,
		title: "Resultados en Tiempo Real",
		description:
			"Actualización inmediata de marcadores, estadísticas y posiciones.",
		color: "text-primary",
	},
	{
		icon: Shield,
		title: "Control Estadístico",
		description:
			"Goleadores, encestadores, bloqueos y más métricas por deporte.",
		color: "text-secondary",
	},
	{
		icon: Award,
		title: "Gestión de Torneos",
		description:
			"Administra múltiples torneos simultáneos con diferentes formatos.",
		color: "text-tertiary",
	},
];

export function FeaturesSection() {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

			<div className="container relative mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
						Todo lo que necesitas para tu torneo
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Una solución completa para la gestión de eventos deportivos
						escolares con todas las herramientas necesarias.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<Card
							key={feature.title}
							className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-300"
						>
							<CardContent className="p-6">
								<div
									className={`inline-flex p-3 rounded-xl bg-background ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<feature.icon className="size-6" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
								<p className="text-sm text-muted-foreground">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
