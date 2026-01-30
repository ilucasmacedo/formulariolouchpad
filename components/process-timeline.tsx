import { GraduationCap, Lightbulb, Rocket } from "lucide-react"

export function ProcessTimeline() {
  const phases = [
    {
      icon: GraduationCap,
      phase: "Fase A",
      title: "Academy",
      description:
        "Fundamentos sólidos com foco em entrega. Aprenda as ferramentas essenciais para construir aplicações reais.",
      duration: "4 semanas",
    },
    {
      icon: Lightbulb,
      phase: "Fase B",
      title: "Validation & MVP",
      description: "Construa seu primeiro produto com sua squad. Valide ideias no mercado e crie um MVP funcional.",
      duration: "8 semanas",
    },
    {
      icon: Rocket,
      phase: "Fase C",
      title: "Spin-off & Equity",
      description:
        "Lançamento e participação acionária. Seu app vai para produção e você se torna co-fundador oficial.",
      duration: "Contínuo",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            A Jornada de <span className="text-primary">Zero a Co-Fundador</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Um processo estruturado que te leva do básico até o lançamento de uma startup real.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex md:hidden w-16 h-16 rounded-full bg-primary/10 border-2 border-primary items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="md:mt-24 space-y-3">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wide">{phase.phase}</div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {phase.duration}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
