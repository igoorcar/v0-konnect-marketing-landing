"use client"

import { useInView } from "@/hooks/use-in-view"
import { MessageCircle, ArrowRight } from "lucide-react"

export function FinalCTA() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-konnect-green to-konnect-green-dark" />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center" ref={ref}>
        <h2
          className={`font-display text-3xl text-konnect-black md:text-5xl lg:text-6xl transition-all duration-700 text-balance ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {"Vamos Construir Sua Máquina de Vendas?"}
        </h2>
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-konnect-black/70 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {"Agende agora seu diagnóstico estratégico gratuito. Sem compromisso, sem enrolação — apenas uma análise honesta do seu potencial de crescimento."}
        </p>

        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-lg bg-konnect-black px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-konnect-charcoal hover:shadow-2xl hover:-translate-y-0.5"
          >
            {"Agendar Diagnóstico Gratuito"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/5562998558908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-konnect-black/30 px-8 py-4 text-sm font-bold text-konnect-black transition-all hover:border-konnect-black hover:bg-konnect-black/10"
          >
            <MessageCircle className="h-4 w-4" />
            {"Falar no WhatsApp Agora"}
          </a>
        </div>

        {/* Contact Info */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-konnect-black/60 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span>konnectmarketing.com.br</span>
          <span className="hidden sm:inline">|</span>
          <span>(62) 9 9691-1712</span>
          <span className="hidden sm:inline">|</span>
          <span>contatos@konnectmarketing.com.br</span>
        </div>
      </div>
    </section>
  )
}
