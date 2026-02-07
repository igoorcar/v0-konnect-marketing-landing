"use client"

import { useInView } from "@/hooks/use-in-view"
import { useCountUp } from "@/hooks/use-count-up"
import { Star, Quote } from "lucide-react"

const metrics = [
  { value: 45, prefix: "+", suffix: "%", label: "Faturamento Mensal (Retail)" },
  { value: 78, prefix: "", suffix: "%", label: "Redução no Custo de Atendimento" },
  { value: 3, prefix: "", suffix: "X", label: "Volume de Leads Qualificados" },
  { value: 10, prefix: "Sub-", suffix: "s", label: "Tempo Médio de Resposta IA", isStatic: true },
  { value: 95, prefix: "", suffix: "%", label: "Taxa de Retenção de Clientes" },
  { value: 47, prefix: "R$", suffix: "M+", label: "Revenue Gerado para Clientes" },
]

function MetricCard({
  metric,
  index,
  isInView,
}: {
  metric: (typeof metrics)[0]
  index: number
  isInView: boolean
}) {
  const count = useCountUp(metric.value, 2000, isInView)

  return (
    <div
      className={`group rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-dark-gray/50 p-6 text-center transition-all duration-700 hover:border-primary/20 hover:-translate-y-1 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
    >
      <div className="font-display text-3xl text-primary md:text-4xl">
        {metric.isStatic ? (
          <>
            {metric.prefix}
            {metric.value}
            {metric.suffix}
          </>
        ) : (
          <>
            {metric.prefix}
            {count}
            {metric.suffix}
          </>
        )}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Contratar a Konnect foi uma das melhores decisões. Eles entenderam nossas necessidades e superaram expectativas criando estratégias de marketing altamente eficazes.",
    author: "Carlos da Silva",
    role: "CEO, Enterprise X",
    result: "+120% leads qualificados em 3 meses",
  },
  {
    quote:
      "A automação por IA transformou completamente nosso atendimento. Respondemos em segundos e nunca mais perdemos um lead por falta de acompanhamento.",
    author: "Ana Oliveira",
    role: "Diretora Comercial, Tech Solutions",
    result: "78% redução no custo de atendimento",
  },
]

export function ResultsSection() {
  const { ref, isInView } = useInView()
  const { ref: testimonialRef, isInView: testimonialVisible } = useInView()

  return (
    <section id="cases" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_20%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Resultados"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Resultados Validados"}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testimonialRef} className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`relative overflow-hidden rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-charcoal/60 p-8 transition-all duration-700 ${
                testimonialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: testimonialVisible ? `${i * 150}ms` : "0ms" }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="text-foreground leading-relaxed">
                {`"${t.quote}"`}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {t.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
