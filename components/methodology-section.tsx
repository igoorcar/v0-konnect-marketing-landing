"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "PLANEJAMENTO ESTRATÉGICO",
    subtitle: "Estratégia e Posicionamento",
    description:
      "Nenhuma campanha é ativada antes de uma investigação profunda do seu mercado. Definimos seu posicionamento único, mapeamos concorrentes e criamos a oferta que ninguém consegue recusar.",
    deliverables: [
      "Benchmark Competitivo Completo",
      "Definição de ICP e Personas",
      "Análise SWOT do Negócio",
      "Estratégia de Diferenciação",
    ],
  },
  {
    number: "02",
    title: "TRÁFEGO PAGO PERFORMANCE",
    subtitle: "Atração e Performance",
    description:
      "Transformamos investimento em anúncios em reuniões e vendas diretas. Campanhas focadas em ROI, não em métricas de vaidade. Cada real investido precisa retornar multiplicado.",
    deliverables: [
      "Meta Ads (Criativos Estáticos + Reels)",
      "Google Ads (Rede de Pesquisa + Maps + YouTube)",
      "Copywriting Persuasivo (Gatilhos Mentais)",
      "Produção de Conteúdo (8 artes + 2 vídeos/mês)",
    ],
  },
  {
    number: "03",
    title: "AUTOMAÇÃO IA",
    subtitle: "Atendimento e Conversão",
    description:
      "A inteligência que atende e vende por você 24 horas por dia. Qualifica leads, agenda reuniões e executa follow-ups estratégicos sem você precisar mover um dedo.",
    deliverables: [
      "Agente IA via WhatsApp (API Oficial)",
      "Integração com CRM/Calendário",
      "Follow-up Automático Inteligente",
      "Dashboards de Performance em Tempo Real",
    ],
  },
]

export function MethodologySection() {
  const { ref, isInView } = useInView()
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="metodologia" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-konnect-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(191,255,11,0.03),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-20 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Estratégia 360°"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Nossa Metodologia: Top 3 Pilares de Escala"}
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const isOpen = expanded === i

            return (
              <div
                key={pillar.number}
                className={`group relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-dark-gray/40 transition-all duration-700 hover:border-primary/20 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
              >
                {/* Number */}
                <div className="absolute -right-4 -top-4 font-display text-[120px] leading-none text-primary/5">
                  {pillar.number}
                </div>

                <div className="relative p-8">
                  <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
                    {"Pilar"} {pillar.number}
                  </div>
                  <h3 className="font-display text-xl text-foreground">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary/80">{pillar.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>

                  {/* Toggle Deliverables */}
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-konnect-green-light"
                  >
                    {isOpen ? "Ocultar entregas" : "Ver entregas"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Deliverables */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "mt-4 max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 border-t border-konnect-subtle-gray/30 pt-4">
                      {pillar.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
