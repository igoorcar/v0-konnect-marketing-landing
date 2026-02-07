"use client"

import { useInView } from "@/hooks/use-in-view"
import { Check, X } from "lucide-react"

const konnectPoints = [
  "Gestor de Experiência do Cliente (atendimento personalizado 1:1)",
  "Líder de Equipe especializado (equipe dedicada aos seus objetivos)",
  "Foco absoluto no ROI (retorno sobre investimento comprovado)",
  "Qualidade > Volume (leads prontos para fechar)",
  "IA Automation 24/7 (velocidade de resposta sub-10 segundos)",
]

const othersPoints = [
  "Tratam clientes de forma impessoal",
  "Equipe genérica sem especialização",
  "Focam em métricas de vaidade",
  "Entregam volume sem qualificação",
  "Atendimento manual limitado ao horário comercial",
]

export function DifferentialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-konnect-charcoal" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Comparativo"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Diferenciais Konnect vs Outras Agências"}
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Konnect */}
          <div
            className={`overflow-hidden rounded-2xl border border-primary/20 bg-konnect-dark-gray/60 p-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Konnect Marketing</h3>
                <p className="text-xs text-primary">O que entregamos</p>
              </div>
            </div>
            <ul className="space-y-4">
              {konnectPoints.map((point, i) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isInView ? `${200 + i * 100}ms` : "0ms" }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div
            className={`overflow-hidden rounded-2xl border border-konnect-subtle-gray/20 bg-konnect-dark-gray/30 p-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-lg text-muted-foreground">Outras Agências</h3>
                <p className="text-xs text-red-400/70">O que normalmente acontece</p>
              </div>
            </div>
            <ul className="space-y-4">
              {othersPoints.map((point, i) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: isInView ? `${300 + i * 100}ms` : "0ms" }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3 w-3 text-red-400" />
                  </span>
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
