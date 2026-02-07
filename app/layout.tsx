import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Archivo_Black, Geist_Mono } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Konnect Marketing Intelligence | A Nova Era da Inteligencia Comercial",
  description:
    "Assessoria estrategica focada em escala, trafego pago e automacao IA para empresas de alto padrao. Transformamos investimento em anuncios em reunioes e vendas diretas.",
  keywords: [
    "marketing digital",
    "trafego pago",
    "automacao IA",
    "Meta Ads",
    "Google Ads",
    "inteligencia comercial",
    "Konnect Marketing",
  ],
  openGraph: {
    title: "Konnect Marketing Intelligence",
    description:
      "A Nova Era da Inteligencia Comercial. Assessoria estrategica para empresas de alto padrao.",
    type: "website",
    locale: "pt_BR",
    url: "https://konnectmarketing.com.br",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${dmSans.variable} ${archivoBlack.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
