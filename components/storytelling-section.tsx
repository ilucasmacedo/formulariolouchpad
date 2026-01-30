import { XCircle, CheckCircle } from "lucide-react"

export function StorytellingSection() {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - The Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-destructive">
              <XCircle className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">O Problema</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              O mercado não quer mais quem "sabe" programar
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Faculdades ensinam teoria infinita sem aplicação prática.</p>
              <p>Cursos online ensinam sintaxe, mas você continua perdido quando precisa criar algo real.</p>
              <p className="text-foreground font-medium">
                O mundo está cheio de desenvolvedores que sabem tudo... e não entregam nada.
              </p>
            </div>
          </div>

          {/* Right - The Solution */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <CheckCircle className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">A Solução</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ele quer quem <span className="text-primary">"sabe entregar"</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nós ensinamos você a ser <span className="text-foreground font-medium">dono do seu próprio código</span>
                .
              </p>
              <p>
                Inspirado nos modelos da <span className="text-primary font-semibold">MidiTec</span> (maior do Brasil) e
                <span className="text-primary font-semibold"> Y Combinator</span> (Vale do Silício).
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-6">
                <p className="text-foreground font-medium">
                  Você não vai apenas aprender. Você vai construir, validar e possivelmente lançar uma startup real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
