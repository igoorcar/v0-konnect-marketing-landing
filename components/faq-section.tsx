"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "O que é o marketing de conteúdo para redes sociais?",
    a: "Marketing de conteúdo para redes sociais é a criação estratégica de publicações, vídeos e materiais que educam, engajam e convertem sua audiência. Na Konnect, cada peça de conteúdo é desenhada com gatilhos mentais e focada em quebrar objeções do seu público-alvo.",
  },
  {
    q: "O que é o gerenciamento de redes sociais e como funciona na prática?",
    a: "É o planejamento, criação, publicação e monitoramento de todo o conteúdo das suas redes sociais. Inclui calendário editorial, design de artes, copywriting, interação com seguidores e análise de métricas para otimização contínua.",
  },
  {
    q: "Por que devo contratar uma agência de redes sociais?",
    a: "Uma agência especializada traz expertise, ferramentas profissionais e uma equipe dedicada que seria inviável manter internamente. Além disso, a Konnect integra tráfego pago, automação IA e branding em uma estratégia unificada - algo que profissionais isolados não conseguem entregar.",
  },
  {
    q: "Por que devo criar conteúdo nas redes sociais da minha empresa?",
    a: "Presença digital consistente constrói autoridade, gera confiança e mantém sua marca no topo da mente dos potenciais clientes. Empresas que não produzem conteúdo perdem visibilidade para concorrentes que o fazem ativamente.",
  },
  {
    q: "Quanto tempo leva para ver resultados com tráfego pago?",
    a: "Resultados iniciais aparecem nas primeiras 2-4 semanas com tráfego pago. Porém, a otimização real acontece entre 60-90 dias, quando o algoritmo aprende e as campanhas atingem maturidade. Trabalhamos com métricas claras desde o dia 1.",
  },
  {
    q: "A IA pode realmente substituir atendimento humano?",
    a: "A IA não substitui - ela complementa e potencializa. Nosso agente IA cuida da triagem inicial, qualificação e agendamento 24/7. Quando o lead precisa de atenção humana especializada, o handoff é feito automaticamente para sua equipe comercial.",
  },
  {
    q: "Vocês trabalham com qual tipo de empresa/segmento?",
    a: "Atendemos empresas B2B e B2C de diversos segmentos: tecnologia, saúde, educação, e-commerce, serviços profissionais, indústria e varejo. O requisito é ter um produto/serviço validado e desejo real de escalar.",
  },
  {
    q: "Qual o investimento mínimo necessário em anúncios?",
    a: "Recomendamos um investimento mínimo de R$3.000/mês em mídia para campanhas consistentes. Porém, o valor ideal é definido durante o diagnóstico estratégico, baseado nos seus objetivos e mercado específico.",
  },
  {
    q: "Como funciona o diagnóstico estratégico gratuito?",
    a: "É uma reunião de 30-45 minutos onde analisamos sua operação atual, identificamos oportunidades e apresentamos um plano de ação personalizado. Sem compromisso, sem enrolação - apenas uma análise honesta do seu potencial de crescimento.",
  },
  {
    q: "Vocês oferecem garantia de resultados?",
    a: "Oferecemos transparência total com dashboards em tempo real e relatórios mensais detalhados. Nossa taxa de retenção de 95% fala por si só. Não prometemos números irreais, mas nos comprometemos com processos comprovados que geram resultados consistentes.",
  },
]

export function FAQSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(191,255,11,0.03),transparent)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Perguntas Frequentes"}
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`overflow-hidden rounded-xl border border-konnect-subtle-gray/30 bg-konnect-charcoal/60 px-6 transition-all duration-500 data-[state=open]:border-primary/20 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isInView ? `${i * 50}ms` : "0ms" }}
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline md:text-base [&[data-state=open]>svg]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
