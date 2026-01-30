"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export function InscriptionForm() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    linkedin: "",
    cidadeEstado: "",
    nivelAtual: "",
    preferencia: "",
    tecnologias: "",
    compromisso: "",
    periodo: "",
    problemaApp: "",
    motivacao: "",
    termos: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Aqui você pode adicionar a lógica de envio do formulário
  }

  return (
    <section id="inscricao" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Formulário de Inscrição</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            <span className="text-orange-500 font-semibold">Turma Jan/2026</span>
          </p>
        </div>

        <div className="bg-neutral-900 border border-orange-500/20 rounded-2xl p-8 md:p-12">
          <div className="mb-10 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl">
            <p className="text-white/90 leading-relaxed">
              <span className="text-orange-500 font-bold">Você tem 2 horas por dia para mudar sua carreira?</span> O
              Squad não é um curso teórico. É uma fábrica de sucesso. Aqui você será alocado em uma squad de 5 pessoas
              para desenvolver um aplicativo real, com mentoria e foco em empreendedorismo. Não cobramos mensalidade;
              trabalhamos no modelo de parceria (Equity). Se o app crescer, você é sócio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Parte 1: Dados Pessoais e Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 pb-3 border-b border-orange-500/30">
                Parte 1: Dados Pessoais e Contato
              </h3>

              <div className="space-y-2">
                <Label htmlFor="nomeCompleto" className="text-white">
                  Nome Completo <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="nomeCompleto"
                  required
                  value={formData.nomeCompleto}
                  onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  E-mail <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-white">
                  LinkedIn (ou link do GitHub/Portfólio)
                </Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidadeEstado" className="text-white">
                  Cidade/Estado <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="cidadeEstado"
                  required
                  value={formData.cidadeEstado}
                  onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500"
                  placeholder="Ex: São Paulo/SP"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-white">
                  Nível atual <span className="text-orange-500">*</span>
                </Label>
                <RadioGroup
                  required
                  value={formData.nivelAtual}
                  onValueChange={(value) => setFormData({ ...formData, nivelAtual: value })}
                  className="space-y-3"
                >
                  {[
                    "Estudante de graduação",
                    "Iniciante/Autodidata",
                    "Transição de carreira",
                    "Já atuo na área (Junior/Pleno)",
                  ].map((nivel) => (
                    <div key={nivel} className="flex items-center space-x-3">
                      <RadioGroupItem value={nivel} id={nivel} className="border-orange-500 text-orange-500" />
                      <Label htmlFor={nivel} className="text-white/80 cursor-pointer">
                        {nivel}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Parte 2: Perfil de Squad */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 pb-3 border-b border-orange-500/30">
                Parte 2: Perfil de Squad (Onde você brilha?)
              </h3>

              <p className="text-white/70 italic text-sm">
                Escolha o papel que você deseja desempenhar nesta jornada (Seja sincero, você será avaliado por isso)
              </p>

              <div className="space-y-3">
                <Label className="text-white">
                  Qual sua preferência de atuação? <span className="text-orange-500">*</span>
                </Label>
                <RadioGroup
                  required
                  value={formData.preferencia}
                  onValueChange={(value) => setFormData({ ...formData, preferencia: value })}
                  className="space-y-4"
                >
                  {[
                    {
                      value: "tech-lead",
                      label: "Tech Lead",
                      desc: "Tenho boa base lógica e quero guiar a arquitetura técnica.",
                    },
                    {
                      value: "fullstack",
                      label: "Fullstack Developer",
                      desc: "Quero colocar a mão na massa no código (Front e Back).",
                    },
                    {
                      value: "product",
                      label: "Product Director",
                      desc: "Gosto de organizar tarefas, definir prazos e entender o negócio.",
                    },
                    {
                      value: "ux-growth",
                      label: "UX/Growth",
                      desc: "Meu foco é no usuário, no design e em como fazer o app crescer.",
                    },
                  ].map((role) => (
                    <div
                      key={role.value}
                      className="flex items-start space-x-3 p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                    >
                      <RadioGroupItem
                        value={role.value}
                        id={role.value}
                        className="border-orange-500 text-orange-500 mt-1"
                      />
                      <Label htmlFor={role.value} className="cursor-pointer flex-1">
                        <span className="text-white font-semibold block">{role.label}</span>
                        <span className="text-white/60 text-sm">{role.desc}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tecnologias" className="text-white">
                  Quais tecnologias você já teve contato? (Mesmo que básico)
                </Label>
                <Input
                  id="tecnologias"
                  value={formData.tecnologias}
                  onChange={(e) => setFormData({ ...formData, tecnologias: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500"
                  placeholder="Ex: JavaScript, React, Python, SQL, Figma, Trello, etc."
                />
              </div>
            </div>

            {/* Parte 3: O Compromisso de 2 Horas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 pb-3 border-b border-orange-500/30">
                Parte 3: O Compromisso de 2 Horas
              </h3>

              <p className="text-white/80 font-medium">Nosso modelo só funciona se todos cumprirem sua parte.</p>

              <div className="space-y-3">
                <Label className="text-white">
                  Você confirma que possui 2 horas diárias (úteis ou fins de semana) para se dedicar exclusivamente às
                  tarefas da squad? <span className="text-orange-500">*</span>
                </Label>
                <RadioGroup
                  required
                  value={formData.compromisso}
                  onValueChange={(value) => setFormData({ ...formData, compromisso: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="sim" id="compromisso-sim" className="border-orange-500 text-orange-500" />
                    <Label htmlFor="compromisso-sim" className="text-white/80 cursor-pointer">
                      Sim, entendo que minha squad depende da minha entrega.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="duvidas"
                      id="compromisso-duvidas"
                      className="border-orange-500 text-orange-500"
                    />
                    <Label htmlFor="compromisso-duvidas" className="text-white/80 cursor-pointer">
                      Tenho dúvidas (explicar abaixo).
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-white">
                  Qual o melhor período para suas interações assíncronas com a equipe?{" "}
                  <span className="text-orange-500">*</span>
                </Label>
                <RadioGroup
                  required
                  value={formData.periodo}
                  onValueChange={(value) => setFormData({ ...formData, periodo: value })}
                  className="flex gap-4 flex-wrap"
                >
                  {["Manhã", "Tarde", "Noite"].map((periodo) => (
                    <div key={periodo} className="flex items-center space-x-2">
                      <RadioGroupItem value={periodo} id={periodo} className="border-orange-500 text-orange-500" />
                      <Label htmlFor={periodo} className="text-white/80 cursor-pointer">
                        {periodo}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Parte 4: Visão Empreendedora */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 pb-3 border-b border-orange-500/30">
                Parte 4: Visão Empreendedora
              </h3>

              <div className="space-y-2">
                <Label htmlFor="problemaApp" className="text-white">
                  Se você pudesse resolver um problema hoje usando um aplicativo, qual seria?{" "}
                  <span className="text-orange-500">*</span>
                </Label>
                <Textarea
                  id="problemaApp"
                  required
                  value={formData.problemaApp}
                  onChange={(e) => setFormData({ ...formData, problemaApp: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500 min-h-[100px]"
                  placeholder="Descreva brevemente o problema e como um app poderia resolvê-lo..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivacao" className="text-white">
                  Por que você quer entrar no Squad em vez de apenas fazer um curso online comum?{" "}
                  <span className="text-orange-500">*</span>
                </Label>
                <Textarea
                  id="motivacao"
                  required
                  value={formData.motivacao}
                  onChange={(e) => setFormData({ ...formData, motivacao: e.target.value })}
                  className="bg-black/50 border-orange-500/30 text-white focus:border-orange-500 min-h-[100px]"
                  placeholder="Conte-nos sua motivação..."
                />
              </div>
            </div>

            {/* Parte 5: Termos e Condições */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 pb-3 border-b border-orange-500/30">
                Parte 5: Termos e Condições
              </h3>

              <div className="flex items-start space-x-3 p-4 bg-orange-500/5 border border-orange-500/30 rounded-lg">
                <Checkbox
                  id="termos"
                  required
                  checked={formData.termos}
                  onCheckedChange={(checked) => setFormData({ ...formData, termos: checked as boolean })}
                  className="border-orange-500 data-[state=checked]:bg-orange-500 mt-1"
                />
                <Label htmlFor="termos" className="text-white/80 cursor-pointer leading-relaxed">
                  Você está ciente de que este é um modelo de{" "}
                  <span className="text-orange-500 font-semibold">"Venture Learning"</span>, onde o aprendizado vem da
                  prática e os eventuais ganhos financeiros virão da participação (equity) no sucesso dos aplicativos
                  desenvolvidos? <span className="text-orange-500">*</span>
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Enviar Inscrição
              </Button>
            </div>

            {/* Texto Final */}
            <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl text-center">
              <p className="text-white/90 leading-relaxed">
                <span className="text-orange-500 font-bold">Obrigado!</span> Nossa equipe (e nossa IA) analisará seu
                perfil. Se selecionado, você receberá um convite para uma entrevista rápida de 15 minutos via vídeo.
                Fique atento ao seu e-mail!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
