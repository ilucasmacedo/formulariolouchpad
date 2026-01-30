import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Preciso ser expert em programação?",
      answer:
        "Não! Buscamos pessoas com vontade de aprender e base lógica. Se você já tentou programar antes (mesmo que tenha travado), você está pronto. O importante é ter dedicação e comprometimento com as 2 horas diárias.",
    },
    {
      question: "É realmente gratuito? Qual o truque?",
      answer:
        "Zero custo financeiro, de verdade. Investimos no seu talento porque acreditamos no modelo de venture learning. Se você construir algo lucrativo, compartilhamos o sucesso. Se não, você ganha experiência e portfólio sem pagar nada.",
    },
    {
      question: "Posso participar se já trabalho ou estudo?",
      answer:
        "Sim! O modelo foi desenhado para 2 horas flexíveis por dia. Você escolhe o melhor horário para encaixar no seu dia. Muitos participantes trabalham full-time ou estudam em paralelo.",
    },
    {
      question: "Como funciona o equity/participação?",
      answer:
        "Se o app da sua squad gerar receita, todos os membros recebem participação proporcional ao engajamento e contribuição. É tudo transparente e documentado desde o início do projeto.",
    },
    {
      question: "Quais tecnologias vou aprender?",
      answer:
        "Trabalhamos com stack moderno: React, Next.js, TypeScript, Node.js, bancos de dados modernos e ferramentas de IA. Tudo que o mercado procura e que permite construir MVPs rapidamente.",
    },
    {
      question: "E se eu não conseguir acompanhar?",
      answer:
        "Cada squad tem mentoria por IA e acesso a materiais de apoio. Além disso, o ritmo é planejado para iniciantes comprometidos. Se precisar de mais tempo, podemos ajustar seu cronograma.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">Quebrando objeções e respondendo suas dúvidas</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
