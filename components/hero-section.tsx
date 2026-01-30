import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Orange glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 py-20 md:py-32 max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            100% Gratuito • 100% Prático
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl">
            Pare de estudar programação. <span className="text-primary">Comece a construir empresas.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            Dedique 2 horas por dia para sair do "Tutorial Hell" e se tornar co-fundador de um aplicativo real. Mentoria
            com IA, metodologia Y Combinator e portfólio de elite.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Quero garantir minha vaga de Janeiro
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-primary/30 hover:bg-primary/5 bg-transparent"
            >
              Como funciona?
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-12 pt-12 border-t border-border/50 w-full max-w-3xl">
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">2h</div>
              <div className="text-sm text-muted-foreground">Por dia</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Pessoas/Squad</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">R$0</div>
              <div className="text-sm text-muted-foreground">Investimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
