"use client"

const industries = [
  "Tecnologia",
  "Saúde",
  "Educação",
  "E-commerce",
  "Serviços B2B",
  "Indústria",
  "Varejo",
  "Consultoria",
  "Finanças",
  "Logística",
]

export function SocialProof() {
  const doubled = [...industries, ...industries]

  return (
    <section className="relative overflow-hidden border-y border-konnect-subtle-gray/30 bg-konnect-charcoal py-6">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-konnect-charcoal to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-konnect-charcoal to-transparent" />

      <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
        {doubled.map((industry, i) => (
          <span
            key={`${industry}-${i}`}
            className="flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            {industry}
          </span>
        ))}
      </div>
    </section>
  )
}
