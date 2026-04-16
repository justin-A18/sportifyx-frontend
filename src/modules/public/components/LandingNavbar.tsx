"use client";

import Link from "next/link";
import { Button } from "@/modules/shared/components/ui/button";
import { Menu, X, Trophy } from "lucide-react";
import { useState } from "react";

export function LandingNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center gap-2">
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
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link
							href="#deportes"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Deportes
						</Link>
						<Link
							href="#caracteristicas"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Características
						</Link>
						<Link
							href="#nosotros"
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Nosotros
						</Link>
					</div>

					<div className="hidden md:flex items-center gap-3">
						<Link href="/auth/login">
							<Button variant="ghost" size="sm" className="font-medium">
								Iniciar sesión
							</Button>
						</Link>
						<Link href="/auth/register">
							<Button size="sm" className="font-medium">
								Registrarse
							</Button>
						</Link>
					</div>

					<button
						type="button"
						className="md:hidden p-2 text-muted-foreground"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
					</button>
				</div>

				{isOpen && (
					<div className="md:hidden py-4 border-t border-border/50">
						<div className="flex flex-col gap-4">
							<Link
								href="#deportes"
								className="text-sm font-medium text-muted-foreground"
								onClick={() => setIsOpen(false)}
							>
								Deportes
							</Link>
							<Link
								href="#caracteristicas"
								className="text-sm font-medium text-muted-foreground"
								onClick={() => setIsOpen(false)}
							>
								Características
							</Link>
							<Link
								href="#nosotros"
								className="text-sm font-medium text-muted-foreground"
								onClick={() => setIsOpen(false)}
							>
								Nosotros
							</Link>
							<div className="flex flex-col gap-2 pt-4 border-t border-border/50">
								<Link href="/auth/login">
									<Button variant="outline" className="w-full">
										Iniciar sesión
									</Button>
								</Link>
								<Link href="/auth/register">
									<Button className="w-full">Registrarse</Button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
