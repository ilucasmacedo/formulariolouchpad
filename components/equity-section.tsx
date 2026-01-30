import { Card } from "@/components/ui/card"
import { TrendingUp, Briefcase, Award } from "lucide-react"

export function EquitySection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Modelo de Ganho
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Equity & Carreira: <span className="text-primary">Seu Futuro</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Não somos um curso. Somos uma aceleradora de talentos. Se o app que sua squad criar der lucro, você tem
              participação. Se ele for um portfólio, você terá a experiência que as empresas disputam a tapa.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-card border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Participação Acionária</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Se o aplicativo gerar receita, todos os membros da squad recebem equity proporcional à contribuição.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Portfólio de Elite</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mesmo que não dê lucro imediato, você terá projetos reais para mostrar em entrevistas e conquistar
                    vagas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Experiência Real</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Trabalhe em equipe, use metodologias ágeis e ferramentas modernas. A mesma experiência de empresas
                    de tecnologia.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
