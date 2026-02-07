"use client"

import React from "react"

import { useState, useCallback } from "react"
import { useInView } from "@/hooks/use-in-view"
import { CheckCircle2, Loader2 } from "lucide-react"

interface FormData {
  nome: string
  email: string
  telefone: string
  nicho: string
  cargo: string
  faturamento: string
  desafio: string
  origem: string
}

const initialForm: FormData = {
  nome: "",
  email: "",
  telefone: "",
  nicho: "",
  cargo: "",
  faturamento: "",
  desafio: "",
  origem: "",
}

export function ContactForm() {
  const { ref, isInView } = useInView()
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    },
    [],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate submission (replace with actual API endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="contato" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-konnect-charcoal" />
        <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-konnect-dark-gray/60 p-12">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <h3 className="font-display text-2xl text-foreground">
              {"Recebemos sua solicitação!"}
            </h3>
            <p className="text-muted-foreground">
              {"Nossa equipe entrará em contato em até 24h."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  const inputClasses =
    "w-full rounded-lg border border-konnect-subtle-gray/40 bg-konnect-dark-gray/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5"

  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-konnect-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(191,255,11,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {"Diagnóstico Gratuito"}
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl text-balance">
            {"Solicite Seu Diagnóstico Estratégico"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {"Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas."}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-5 rounded-2xl border border-konnect-subtle-gray/30 bg-konnect-dark-gray/40 p-8 backdrop-blur-sm transition-all duration-700 delay-100 md:p-10 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="nome" className={labelClasses}>
                {"Nome/Empresa *"}
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Sua empresa ou nome"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                {"E-mail *"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="telefone" className={labelClasses}>
                {"Telefone/WhatsApp *"}
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                value={form.telefone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label htmlFor="nicho" className={labelClasses}>
                {"Nicho do negócio"}
              </label>
              <input
                id="nicho"
                name="nicho"
                type="text"
                value={form.nicho}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Ex: Tecnologia, Saúde..."
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="cargo" className={labelClasses}>
                {"Cargo"}
              </label>
              <input
                id="cargo"
                name="cargo"
                type="text"
                value={form.cargo}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Ex: CEO, Diretor Comercial..."
              />
            </div>
            <div>
              <label htmlFor="faturamento" className={labelClasses}>
                {"Faturamento mensal aproximado"}
              </label>
              <select
                id="faturamento"
                name="faturamento"
                value={form.faturamento}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Selecione...</option>
                <option value="ate-50k">{"Até R$50k"}</option>
                <option value="50k-200k">R$50k - R$200k</option>
                <option value="200k-500k">R$200k - R$500k</option>
                <option value="500k-1m">R$500k - R$1M</option>
                <option value="1m+">R$1M+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="desafio" className={labelClasses}>
              {"Qual seu principal desafio hoje?"}
            </label>
            <textarea
              id="desafio"
              name="desafio"
              rows={4}
              value={form.desafio}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Conte-nos sobre o desafio que mais impacta seu negócio..."
            />
          </div>

          <div>
            <label htmlFor="origem" className={labelClasses}>
              {"Como conheceu a Konnect?"}
            </label>
            <select
              id="origem"
              name="origem"
              value={form.origem}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Selecione...</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="indicacao">{"Indicação"}</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400">
              {"Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(191,255,11,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {"Enviando..."}
              </>
            ) : (
              "Solicitar Diagnóstico Gratuito"
            )}
          </button>

          <p className="text-center text-xs text-muted-foreground/60">
            {"Seus dados estão seguros e não serão compartilhados com terceiros."}
          </p>
        </form>
      </div>
    </section>
  )
}
