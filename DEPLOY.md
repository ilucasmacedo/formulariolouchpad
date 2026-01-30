# Guia de Deploy - Formulário de Inscrição

Este guia contém instruções passo a passo para configurar e fazer deploy do projeto.

## 📋 Checklist Pré-Deploy

- [ ] Projeto criado no Supabase
- [ ] Tabela `inscricoes` criada no banco de dados
- [ ] Políticas RLS configuradas
- [ ] Variáveis de ambiente anotadas
- [ ] Código commitado no GitHub

## 🗄️ Passo 1: Configurar Supabase

### 1.1 Criar Projeto

1. Acesse [https://supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Preencha:
   - **Name**: `formulario-squad` (ou outro nome)
   - **Database Password**: Crie uma senha forte
   - **Region**: Escolha a região mais próxima (ex: South America - São Paulo)
5. Clique em "Create new project"
6. Aguarde a criação (pode levar alguns minutos)

### 1.2 Criar Tabela

1. No dashboard do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Cole o conteúdo do arquivo `supabase/schema.sql`
4. Clique em **Run** (ou pressione Ctrl+Enter)
5. Verifique se a mensagem de sucesso apareceu

### 1.3 Obter Credenciais

1. Vá em **Settings** > **API**
2. Anote as seguintes informações:
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon public** key (chave longa que começa com `eyJ...`)
   - **service_role** key (chave longa que começa com `eyJ...`) - **MANTENHA SECRETA!**

## 🐙 Passo 2: Configurar GitHub

### 2.1 Criar Repositório

1. Acesse [https://github.com](https://github.com)
2. Clique em **New repository**
3. Preencha:
   - **Repository name**: `formulariolouchpad` (ou outro nome)
   - **Description**: Formulário de inscrição Squad Venture Builder
   - **Visibility**: Private (recomendado) ou Public
4. **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **Create repository**

### 2.2 Fazer Push do Código

No terminal, execute:

```bash
# Verificar se já é um repositório Git
git status

# Se não for, inicializar
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Formulário de inscrição"

# Adicionar remote (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/formulariolouchpad.git

# Fazer push
git branch -M main
git push -u origin main
```

## 🚀 Passo 3: Deploy na Vercel

### 3.1 Conectar Repositório

1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **Add New Project**
4. Selecione o repositório `formulariolouchpad`
5. Clique em **Import**

### 3.2 Configurar Projeto

1. **Framework Preset**: Next.js (deve detectar automaticamente)
2. **Root Directory**: `./` (deixe como está)
3. **Build Command**: `npm run build` (já está configurado)
4. **Output Directory**: `.next` (já está configurado)
5. Clique em **Next**

### 3.3 Configurar Variáveis de Ambiente

Na seção **Environment Variables**, adicione:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Cole a Project URL do Supabase | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cole a anon public key do Supabase | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | Cole a service_role key do Supabase | Production, Preview, Development |

**Importante**: 
- Marque todas as três opções (Production, Preview, Development)
- A `SUPABASE_SERVICE_ROLE_KEY` é sensível - nunca compartilhe!

### 3.4 Fazer Deploy

1. Clique em **Deploy**
2. Aguarde o build (pode levar 2-5 minutos)
3. Quando concluir, você verá um link como: `https://formulariolouchpad.vercel.app`

### 3.5 Verificar Deploy

1. Acesse o link fornecido pela Vercel
2. Teste o formulário preenchendo todos os campos
3. Verifique no Supabase se os dados foram salvos:
   - Vá em **Table Editor** > **inscricoes**
   - Deve aparecer a nova inscrição

## 🔄 Atualizações Futuras

Para atualizar o projeto:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das alterações"
git push origin main
```

A Vercel detectará automaticamente o push e fará um novo deploy!

## 🐛 Troubleshooting

### Erro: "Missing Supabase environment variables"
- Verifique se todas as variáveis estão configuradas na Vercel
- Certifique-se de que os nomes estão corretos (case-sensitive)

### Erro: "relation 'inscricoes' does not exist"
- Execute o SQL do arquivo `supabase/schema.sql` novamente
- Verifique se está no projeto correto do Supabase

### Erro: "new row violates row-level security policy"
- Verifique as políticas RLS no Supabase
- Certifique-se de que a política de INSERT está ativa para `anon`

### Build falha na Vercel
- Verifique os logs de build na Vercel
- Certifique-se de que o Node.js está na versão 18+
- Verifique se todas as dependências estão no `package.json`

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs na Vercel (Deployments > [seu deploy] > Logs)
2. Verifique os logs no Supabase (Logs > API Logs)
3. Verifique o console do navegador (F12 > Console)

---

**Pronto!** Seu formulário está no ar! 🎉
