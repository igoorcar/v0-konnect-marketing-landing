"use client"

import { useInView } from "@/hooks/use-in-view"
import { Search, Map, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico e Dados",
    description:
      "Entrevistamos, analisamos e mapeamos tudo antes de tocar em qualquer botão de campanha.",
  },
  {
    number: "02",
    icon: Map,
    title: "Planejamento e Canais",
    description:
      "Definimos canais, orçamento e trilha para atingir as metas necessárias do seu negócio.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação Técnica",
    description:
      "Ativamos campanhas, configuramos IA, integramos sistemas e iniciamos a captação.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Escala e Otimização",
    description:
      "Monitoramos 24/7, otimizamos com base em dados e escalamos o que funciona.",
  },
]

export function ProcessSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-konnect-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_80%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-20 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Processo"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Caminho da Execução"}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`group relative transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-8 bg-gradient-to-r from-primary/30 to-transparent lg:block translate-x-full" />
              )}

              <div className="relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-dark-gray/40 p-8 transition-all hover:border-primary/20 hover:-translate-y-1">
                {/* Background number */}
                <div className="absolute -right-2 -top-4 font-display text-[80px] leading-none text-primary/5">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-1 font-mono text-xs text-primary/60">
                    {"Passo"} {step.number}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
