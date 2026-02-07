"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Play } from "lucide-react"
import { useCountUp } from "@/hooks/use-count-up"

const stats = [
  { value: 200, suffix: "+", label: "Empresas Atendidas" },
  { value: 95, suffix: "%", label: "Taxa de Retenção" },
  { value: 47, prefix: "R$", suffix: "M+", label: "Faturamento Gerado" },
  { value: 24, suffix: "/7", label: "IA Operacional" },
]

function StatCounter({
  value,
  prefix,
  suffix,
  label,
  started,
}: {
  value: number
  prefix?: string
  suffix: string
  label: string
  started: boolean
}) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="text-center">
      <div className="font-display text-2xl text-foreground md:text-3xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</div>
    </div>
  )
}

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(191,255,11,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,rgba(191,255,11,0.05),transparent)]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(191,255,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(191,255,11,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-float rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute right-[15%] bottom-[30%] h-96 w-96 animate-float rounded-full bg-primary/3 blur-3xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute left-[50%] top-[60%] h-48 w-48 animate-spin-slow rounded-full border border-primary/10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        {/* Tag */}
        <div
          className={`transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Konnect Marketing Intelligence
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`mt-8 font-display text-4xl leading-[1.1] text-foreground transition-all duration-700 delay-100 md:text-6xl lg:text-7xl ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-balance">A NOVA ERA DA</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-konnect-green-light to-primary bg-clip-text text-transparent">
            {"INTELIGÊNCIA COMERCIAL"}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 md:text-xl ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {"Assessoria estratégica focada em escala, tráfego e automação para empresas de alto padrão. Transformamos investimento em anúncios em reuniões e vendas diretas."}
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all duration-700 delay-300 sm:flex-row sm:justify-center ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(191,255,11,0.4)] hover:-translate-y-0.5"
          >
            {"Agendar Diagnóstico Gratuito"}
            <ChevronDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-lg border border-konnect-subtle-gray px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <Play className="h-4 w-4 text-primary" />
            {"Assistir Apresentação"}
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 gap-8 border-t border-konnect-subtle-gray/50 pt-10 transition-all duration-700 delay-500 md:grid-cols-4 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} started={loaded} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
