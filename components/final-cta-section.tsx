"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export function FinalCtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Email submitted:", email)
    // Handle form submission
    alert("Obrigado! Entraremos em contato em breve.")
    setEmail("")
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      {/* Orange glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Vagas Limitadas
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Garanta sua Vaga na <span className="text-primary">Turma de Janeiro</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Não perca a chance de sair do Tutorial Hell e começar a construir empresas reais. As squads são limitadas
              a 5 pessoas.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-11 h-12 bg-background border-border/50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Entrar na Lista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2h</div>
                <div className="text-sm text-muted-foreground">Por dia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Real</div>
                <div className="text-sm text-muted-foreground">Apps & Equity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Squad Venture Builder © 2025 • Transformando desenvolvedores em empreendedores</p>
        </div>
      </div>
    </section>
  )
}
