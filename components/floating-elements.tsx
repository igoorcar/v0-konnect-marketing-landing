"use client"

import { useEffect, useState } from "react"
import { MessageCircle, ArrowUp } from "lucide-react"

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 500)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-konnect-green-light transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5562998558908"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Especialista no WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        {/* Tooltip */}
        <span className="hidden rounded-lg bg-konnect-dark-gray px-3 py-2 text-xs font-medium text-foreground shadow-xl opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Falar com Especialista
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-foreground shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110 hover:shadow-[#25D366]/40 animate-pulse_glow" style={{ animationDuration: "3s" }}>
          <MessageCircle className="h-6 w-6" />
          {/* Online dot */}
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-konnect-dark-gray">
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
          </span>
        </span>
      </a>

      {/* Scroll to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-konnect-subtle-gray/30 bg-konnect-dark-gray/80 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  )
}
