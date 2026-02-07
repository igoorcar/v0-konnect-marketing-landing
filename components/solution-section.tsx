"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  BarChart3,
  Target,
  FileSearch,
  Route,
  Megaphone,
  Youtube,
  RotateCw,
  MapPin,
  Zap,
  Brain,
  CalendarCheck,
  Users,
  Shield,
} from "lucide-react"

const solutions = [
  {
    tag: "Diagnóstico",
    title: "Diagnóstico Científico, Não Achismo",
    description:
      "Analisamos cada centímetro da sua operação atual. Benchmark competitivo, auditoria de canais digitais e definição de oferta irresistível. O resultado? Um mapa de oportunidades realistas de crescimento baseado em dados.",
    points: [
      { icon: BarChart3, text: "Análise de mercado e concorrência" },
      { icon: Target, text: "Identificação de ICP (Ideal Customer Profile)" },
      { icon: FileSearch, text: "Auditoria completa de canais digitais" },
      { icon: Route, text: "Mapeamento de jornada do cliente" },
    ],
    reversed: false,
    accent: "from-primary/20 to-primary/5",
  },
  {
    tag: "Tráfego Pago",
    title: "Tráfego Pago que Gera ROI Real",
    description:
      "Meta Ads para desejo visual. Google Ads para intenção de compra. Criativos agressivos focados em converter o usuário enquanto ele navega. Não entregamos volume de leads - entregamos QUALIDADE.",
    points: [
      { icon: Megaphone, text: "Meta Ads: Alcance + Engajamento" },
      { icon: Youtube, text: "Google Ads: Pesquisa + YouTube para Autoridade" },
      { icon: RotateCw, text: "Retargeting Inteligente" },
      { icon: MapPin, text: "Geo-targeting por Raio de Ação" },
    ],
    reversed: true,
    accent: "from-primary/15 to-primary/5",
  },
  {
    tag: "Automação IA",
    title: "IA que Atende, Qualifica e Agenda 24/7",
    description:
      'Nosso agente de IA processa e responde em sub-10 segundos. Alimentado com seus manuais, tabelas de preço e políticas comerciais através de RAG Intelligence. Ele não "alucina" - ele consulta seus dados reais antes de cada resposta.',
    points: [
      { icon: Zap, text: "Resposta em menos de 10 segundos" },
      { icon: Brain, text: "RAG Intelligence (zero erros)" },
      { icon: CalendarCheck, text: "Integração com Google Calendar/Outlook" },
      { icon: Users, text: "Handoff inteligente para time humano" },
      { icon: Shield, text: "API Oficial WhatsApp (sem risco de ban)" },
    ],
    reversed: false,
    accent: "from-primary/20 to-primary/5",
  },
]

function SolutionBlock({
  solution,
  index,
}: {
  solution: (typeof solutions)[0]
  index: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        solution.reversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Visual/Mockup */}
      <div
        className={`${solution.reversed ? "lg:order-2" : "lg:order-1"} transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-dark-gray/60">
          <div className={`absolute inset-0 bg-gradient-to-br ${solution.accent}`} />
          <div className="relative p-8 md:p-12">
            {/* Abstract dashboard mockup */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary/60" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded bg-konnect-subtle-gray/40" />
                <div className="h-4 w-1/2 rounded bg-konnect-subtle-gray/30" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[75, 92, 64].map((h, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded bg-gradient-to-t from-primary/40 to-primary/80"
                      style={{ height: `${h}px` }}
                    />
                    <div className="h-2 w-8 rounded bg-konnect-subtle-gray/30" />
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-konnect-subtle-gray/20 bg-konnect-black/40 p-4">
                  <div className="font-mono text-2xl font-bold text-primary">
                    {index === 0 ? "+45%" : index === 1 ? "3.2x" : "<10s"}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {index === 0 ? "Crescimento" : index === 1 ? "ROI Médio" : "Resposta IA"}
                  </div>
                </div>
                <div className="rounded-lg border border-konnect-subtle-gray/20 bg-konnect-black/40 p-4">
                  <div className="font-mono text-2xl font-bold text-foreground">
                    {index === 0 ? "200+" : index === 1 ? "78%" : "24/7"}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {index === 0 ? "Empresas" : index === 1 ? "Conversão" : "Operacional"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div
        className={`${solution.reversed ? "lg:order-1" : "lg:order-2"} transition-all duration-700 delay-200 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {solution.tag}
        </span>
        <h3 className="mt-4 font-display text-2xl text-foreground md:text-3xl">
          {solution.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{solution.description}</p>
        <ul className="mt-6 space-y-3">
          {solution.points.map((point) => (
            <li key={point.text} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-foreground">{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function SolutionSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-20 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Soluções"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Como a Konnect Resolve Isso?"}
          </h2>
        </div>

        {/* Solution Blocks */}
        <div className="space-y-24 md:space-y-32">
          {solutions.map((solution, i) => (
            <SolutionBlock key={solution.title} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
