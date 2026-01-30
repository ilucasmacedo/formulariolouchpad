# 🚀 Guia Completo: GitHub + Vercel

Este guia te leva do zero até o deploy na Vercel em poucos passos.

## 📋 Pré-requisitos

- [ ] Conta no [GitHub](https://github.com)
- [ ] Conta no [Vercel](https://vercel.com)
- [ ] Git instalado no seu computador
- [ ] Projeto configurado com Supabase (variáveis de ambiente)

---

## 🐙 Passo 1: Preparar o Git

### Opção A: Usando Script Automático (Recomendado)

```bash
npm run git:init
```

Este script vai:
- ✅ Inicializar o repositório Git (se não existir)
- ✅ Adicionar todos os arquivos
- ✅ Fazer o commit inicial

### Opção B: Manual

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: Formulário de inscrição com Supabase e Vercel"
```

---

## 📦 Passo 2: Criar Repositório no GitHub

1. **Acesse**: https://github.com/new
2. **Preencha**:
   - **Repository name**: `formulariolouchpad` (ou outro nome)
   - **Description**: Formulário de inscrição Squad Venture Builder
   - **Visibility**: Private (recomendado) ou Public
   - ⚠️ **NÃO marque** "Initialize with README" (já temos um)
3. **Clique em**: "Create repository"
4. **Copie a URL** do repositório (ex: `https://github.com/seu-usuario/formulariolouchpad.git`)

---

## 📤 Passo 3: Fazer Push para o GitHub

### Opção A: Usando Script Automático (Recomendado)

```bash
npm run git:push
```

O script vai perguntar a URL do repositório e fazer tudo automaticamente.

### Opção B: Manual

```bash
git remote add origin https://github.com/SEU_USUARIO/formulariolouchpad.git
git push -u origin main
```

**Substitua** `SEU_USUARIO` pelo seu usuário do GitHub.

---

## 🚀 Passo 4: Deploy na Vercel

### Opção A: Via Dashboard (Recomendado - Mais Fácil)

1. **Acesse**: https://vercel.com/dashboard
2. **Faça login** com sua conta GitHub
3. **Clique em**: "Add New Project" (ou "Import Project")
4. **Importe o repositório**:
   - Selecione o repositório `formulariolouchpad`
   - Clique em "Import"
5. **Configure o projeto**:
   - **Framework Preset**: Next.js (deve detectar automaticamente)
   - **Root Directory**: `./` (deixe como está)
   - **Build Command**: `npm run build` (já está configurado)
   - Clique em "Next"
6. **Configure as variáveis de ambiente**:
   
   Adicione estas 3 variáveis:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Cole a URL do Supabase |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cole a Publishable Key |
   | `SUPABASE_SERVICE_ROLE_KEY` | Cole a Secret Key |

   ⚠️ **Importante**: Marque todas as três opções:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

7. **Clique em**: "Deploy"
8. **Aguarde** o build (2-5 minutos)
9. **Pronto!** Você receberá um link como: `https://formulariolouchpad.vercel.app`

### Opção B: Via CLI

```bash
# Instalar Vercel CLI (se ainda não tem)
npm i -g vercel

# Fazer deploy
npm run deploy
# ou
vercel --prod
```

Siga as instruções e adicione as variáveis de ambiente quando solicitado.

---

## ✅ Passo 5: Verificar o Deploy

1. **Acesse o link** fornecido pela Vercel
2. **Teste o formulário**:
   - Preencha todos os campos
   - Envie o formulário
3. **Verifique no Supabase**:
   - Vá em **Table Editor** > **inscricoes**
   - Você deve ver a nova inscrição!

---

## 🔄 Atualizações Futuras

Sempre que fizer alterações no código:

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

A Vercel detecta automaticamente o push e faz um novo deploy! 🎉

---

## 🐛 Troubleshooting

### Erro: "repository not found"
- ✅ Verifique se a URL do repositório está correta
- ✅ Verifique se você tem permissão no repositório
- ✅ Verifique se está autenticado no Git

### Erro: "Missing environment variables" na Vercel
- ✅ Verifique se todas as 3 variáveis estão configuradas
- ✅ Verifique se os valores estão corretos (sem espaços extras)
- ✅ Marque todas as opções (Production, Preview, Development)

### Erro no build da Vercel
- ✅ Verifique os logs de build na Vercel
- ✅ Verifique se o Node.js está na versão 18+
- ✅ Verifique se todas as dependências estão no `package.json`

### Formulário não salva dados
- ✅ Verifique se a tabela foi criada no Supabase
- ✅ Verifique se as políticas RLS estão configuradas
- ✅ Verifique se as variáveis de ambiente estão corretas na Vercel

---

## 📝 Checklist Final

- [ ] Git inicializado e commit feito
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub (push)
- [ ] Projeto importado na Vercel
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Formulário testado e funcionando
- [ ] Dados aparecendo no Supabase

---

**Pronto!** Seu formulário está no ar! 🎉

Para mais detalhes, consulte:
- `DEPLOY.md` - Guia detalhado de deploy
- `README.md` - Documentação completa do projeto
