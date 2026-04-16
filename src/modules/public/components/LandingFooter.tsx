"use client";

import {
  Trophy,
  Mail,
  Phone,
  MapPin,
  Link2,
  MessageCircle,
  Camera,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  servicios: [
    { label: "Fútbol Varones", href: "#" },
    { label: "Básquet Varones", href: "#" },
    { label: "Vóley Damas", href: "#" },
    { label: "Ping Pong Mixto", href: "#" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Cómo funciona", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Términos de servicio", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
  ],
};

export function LandingFooter() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Trophy className="size-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">
                  OLIMPIADAS
                </span>
                <span className="text-lg font-bold text-primary"> PERU</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La mejor empresa de gestión de eventos deportivos del Perú. Más de
              10 años entregando servicios de calidad.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <span>contacto@olimpiadasperu.pe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-secondary" />
                <span>+51 1 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-tertiary" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Deportes</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Olimpiadas PERU. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Link2 className="size-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Camera className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
