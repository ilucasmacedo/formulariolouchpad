import { Card } from "@/components/ui/card"
import { Users, Clock, Sparkles } from "lucide-react"

export function DiferencialSection() {
  const diferenciais = [
    {
      icon: Users,
      title: "Squads de 5 pessoas",
      description:
        "Você nunca está sozinho. Simulamos o dia a dia de uma Big Tech com colaboração real e code reviews.",
    },
    {
      icon: Clock,
      title: "2 Horas por Dia",
      description: "O tempo que você gasta no feed do Instagram, aqui você constrói seu equity e futuro profissional.",
    },
    {
      icon: Sparkles,
      title: "Orquestração por IA",
      description:
        "Use agentes de IA para acelerar seu código e validar sua ideia em tempo recorde. Tecnologia de ponta.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            O Diferencial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Venture-Learning: <span className="text-primary">Como Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Não somos um curso tradicional. Somos uma aceleradora de talentos com metodologia própria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:bg-card/80 transition-colors border-border/50 hover:border-primary/30"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Mockups Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Saúde", "Finanças", "Clima", "Delivery", "Social", "EdTech"].map((nicho, i) => (
            <div
              key={i}
              className="aspect-[9/16] rounded-lg bg-gradient-to-br from-card to-muted border border-border/50 p-4 flex items-end"
            >
              <span className="text-sm font-medium text-muted-foreground">App {nicho}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
