"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/modules/shared/components/ui/card";
import { Trophy, Users, Calendar, Building } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    label: "Años de experiencia",
    color: "text-secondary",
  },
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Torneos organizados",
    color: "text-primary",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Participantes registrados",
    color: "text-tertiary",
  },
  {
    icon: Building,
    value: 500,
    suffix: "+",
    label: "Instituciones confiando",
    color: "text-secondary",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10" />

      <div className="container relative mx-auto px-4">
        <Card className="border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-background mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="size-8" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
