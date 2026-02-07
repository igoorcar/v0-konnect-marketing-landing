"use client"

import { useInView } from "@/hooks/use-in-view"
import { Search, Filter, Clock } from "lucide-react"

const painPoints = [
  {
    icon: Search,
    title: "Invisibilidade Total",
    description:
      "Empresas com soluções excelentes que ninguém encontra online. Seu concorrente aparece primeiro no Google e nas redes sociais.",
  },
  {
    icon: Filter,
    title: "Leads Não Qualificados",
    description:
      "Time comercial desperdiçando tempo com curiosos. 80% dos leads não têm fit, perfil ou budget para fechar negócio.",
  },
  {
    icon: Clock,
    title: "Atendimento Lento = Vendas Perdidas",
    description:
      "5 minutos sem resposta no WhatsApp? Seu cliente já está conversando com o concorrente. 70% dos leads são perdidos por falta de acompanhamento.",
  },
]

export function ProblemSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="sobre" className="relative py-24 md:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-konnect-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            O Problema
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Por Que Sua Empresa Precisa da Konnect?"}
          </h2>
        </div>

        {/* Pain Point Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`group relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/40 bg-konnect-dark-gray/50 p-8 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
