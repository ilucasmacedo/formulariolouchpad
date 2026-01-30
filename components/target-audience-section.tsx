import { Card } from "@/components/ui/card"
import { GraduationCap, RefreshCw, Code } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Estudantes",
      description: "Complemente sua graduação com experiência prática e construa seu futuro enquanto estuda.",
    },
    {
      icon: RefreshCw,
      title: "Transição de Carreira",
      description:
        "Mude de área com segurança. Construa um portfólio real antes mesmo de conseguir o primeiro emprego.",
    },
    {
      icon: Code,
      title: "Autodidatas",
      description: "Saia do Tutorial Hell e aplique tudo que aprendeu sozinho em projetos reais com mentoria.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Para Quem é o <span className="text-primary">Squad?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Se você tem vontade e base lógica, você está pronto para começar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Card
                key={index}
                className="p-8 bg-background hover:bg-card transition-colors border-border/50 hover:border-primary/30 text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{audience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
