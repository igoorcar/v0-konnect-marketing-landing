"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Instagram,
  Search,
  Crown,
  Target,
  Camera,
  Bot,
  ArrowRight,
  X,
} from "lucide-react"

const services = [
  {
    icon: Instagram,
    title: "Meta Ads",
    subtitle: "Desejo Visual",
    description:
      "Dominamos o algoritmo do Instagram e Facebook para criar campanhas que geram desejo imediato. Criativos agressivos focados em converter o usuário enquanto ele navega.",
    includes: [
      "Criativos Estáticos",
      "Reels",
      "Retargeting Inteligente",
      "Geo-localização por Raio",
    ],
  },
  {
    icon: Search,
    title: "Google Ads",
    subtitle: "Intenção Real",
    description:
      "Capturamos o cliente no exato momento da dor ou necessidade. Estar no topo da busca é o atalho mais curto entre a sua solução e a carteira do cliente.",
    includes: [
      "Rede de Pesquisa",
      "Google Maps Turbo",
      "YouTube para Autoridade",
    ],
  },
  {
    icon: Crown,
    title: "Branding de Conversão",
    subtitle: "Percepção Premium",
    description:
      "O mercado não compra o produto mais barato, compra o que parece mais seguro e profissional. Alinhamos sua identidade visual e tom de voz para transmitir autoridade máxima.",
    includes: [
      "Percepção Premium",
      "Identidade Visual Estratégica",
    ],
  },
  {
    icon: Target,
    title: "ICP & Audiências",
    subtitle: "Segmentação Precisa",
    description:
      "Quem é o cliente que paga o ticket máximo e traz menos dor de cabeça? Nós o caçamos através de segmentação comportamental e dados de renda.",
    includes: [
      "Segmentação Comportamental",
      "Análise de Dados Demográficos",
    ],
  },
  {
    icon: Camera,
    title: "Produção de Conteúdo",
    subtitle: "Criação Estratégica",
    description:
      "8 artes + 2 reels mensais focados em quebra de objeção. Textos persuasivos alinhados com marketing objectives.",
    includes: [
      "Design de Alta Conversão",
      "Copywriting Vendedor",
    ],
  },
  {
    icon: Bot,
    title: "Automação IA",
    subtitle: "Inteligência 24/7",
    description:
      "Agente de IA que atende via WhatsApp (API Oficial Meta), qualifica leads, agenda reuniões e executa follow-ups automáticos.",
    includes: [
      "Integração Calendário",
      "RAG Intelligence",
      "Handoff Inteligente",
    ],
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Especialidades"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Serviços Especializados"}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-charcoal/60 p-7 transition-all duration-700 hover:border-primary/20 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary/20">
                  <service.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-sm font-medium text-primary/70">{service.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => setExpandedService(expandedService === i ? null : i)}
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-konnect-green-light"
                >
                  {"Saiba Mais"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Expanded Detail Overlay */}
              {expandedService === i && (
                <div className="absolute inset-0 z-20 flex flex-col justify-center rounded-2xl border border-primary/20 bg-konnect-dark-gray/95 p-7 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => setExpandedService(null)}
                    className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                    aria-label="Fechar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <h4 className="font-bold text-foreground">{service.title}</h4>
                  <p className="mt-1 text-xs text-primary">{service.subtitle}</p>
                  <ul className="mt-4 space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
