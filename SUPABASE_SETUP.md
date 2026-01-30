# 🗄️ Guia Visual: Configuração do Supabase

Este guia mostra **exatamente onde** configurar cada coisa no Supabase.

## 📍 Passo 1: Obter as Credenciais (API Keys)

Você já está na tela correta! Na página **API Keys**:

### 1.1 Publishable Key (Chave Pública)
- **Onde está**: Na seção "Publishable key"
- **O que copiar**: A chave que começa com `sb_publishable_...`
- **Exemplo**: `sb_publishable_SnVuo91Aih4ijDZcqUh5yQ_w3cbq...`
- **Para qual variável**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` no `.env.local`

### 1.2 Secret Key (Chave Secreta)
- **Onde está**: Na seção "Secret keys"
- **O que copiar**: A chave que começa com `sb_secret_...`
- **Exemplo**: `sb_secret_mRKL9mbcpyR3bW0mwVqosA_8uyBzQxU`
- **Para qual variável**: `SUPABASE_SERVICE_ROLE_KEY` no `.env.local`
- **⚠️ IMPORTANTE**: Esta chave é secreta! Nunca compartilhe publicamente.

### 1.3 Project URL (URL do Projeto)
- **Onde encontrar**: 
  1. No menu lateral esquerdo, clique em **Settings** (⚙️)
  2. Depois clique em **API** (ou **General** > **API**)
  3. Procure por **Project URL** ou **Project URL**
  4. Será algo como: `https://xxxxx.supabase.co`
- **Para qual variável**: `NEXT_PUBLIC_SUPABASE_URL` no `.env.local`

---

## 📝 Passo 2: Criar o Arquivo .env.local

1. No seu projeto, copie o arquivo `env.template`:
   ```bash
   cp env.template .env.local
   ```

2. Abra o arquivo `.env.local` e preencha com os valores que você copiou:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_SnVuo91Aih4ijDZcqUh5yQ_w3cbq...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_mRKL9mbcpyR3bW0mwVqosA_8uyBzQxU
```

**Substitua** os valores pelos que você copiou do Supabase!

---

## 🗃️ Passo 3: Criar a Tabela no Banco de Dados

### 3.1 Acessar o SQL Editor

1. No menu lateral esquerdo do Supabase, clique em **SQL Editor** (ou **SQL Editor**)
2. Clique no botão **New Query** (ou **+ New Query**)

### 3.2 Executar o SQL

1. Abra o arquivo `supabase/schema.sql` do seu projeto
2. **Copie TODO o conteúdo** do arquivo
3. Cole no SQL Editor do Supabase
4. Clique em **Run** (ou pressione `Ctrl+Enter` / `Cmd+Enter`)

### 3.3 Verificar se Funcionou

1. No menu lateral, clique em **Table Editor**
2. Você deve ver a tabela **inscricoes** na lista
3. Clique nela para ver a estrutura (colunas)

---

## 🔒 Passo 4: Verificar as Políticas RLS (Row Level Security)

As políticas já foram criadas pelo SQL, mas vamos verificar:

1. No **Table Editor**, clique na tabela **inscricoes**
2. Clique na aba **Policies** (ou **RLS**)
3. Você deve ver duas políticas:
   - ✅ "Permitir inserção pública" (INSERT para anon)
   - ✅ "Permitir leitura para service role" (SELECT para service_role)

Se não aparecer, volte ao **SQL Editor** e execute o SQL novamente.

---

## ✅ Passo 5: Testar a Conexão

1. No terminal, execute:
   ```bash
   npm run dev
   ```

2. Acesse `http://localhost:3000`

3. Preencha o formulário e envie

4. Volte ao Supabase:
   - **Table Editor** > **inscricoes**
   - Você deve ver a nova inscrição na tabela!

---

## 📍 Resumo: Onde Encontrar Cada Coisa

| O que você precisa | Onde encontrar no Supabase |
|-------------------|---------------------------|
| **Project URL** | Settings > API > Project URL |
| **Publishable Key** | Settings > API > API Keys > Publishable key |
| **Secret Key** | Settings > API > API Keys > Secret keys |
| **Criar Tabela** | SQL Editor > New Query > Cole o SQL |
| **Ver Tabela** | Table Editor > inscricoes |
| **Ver Políticas RLS** | Table Editor > inscricoes > Policies |

---

## 🆘 Problemas Comuns

### "Missing Supabase environment variables"
- ✅ Verifique se o arquivo `.env.local` existe
- ✅ Verifique se todas as 3 variáveis estão preenchidas
- ✅ Reinicie o servidor (`npm run dev`)

### "relation 'inscricoes' does not exist"
- ✅ Execute o SQL do arquivo `supabase/schema.sql` no SQL Editor
- ✅ Verifique se apareceu mensagem de sucesso

### "new row violates row-level security policy"
- ✅ Verifique se as políticas RLS estão criadas (Table Editor > Policies)
- ✅ Execute novamente a parte do SQL que cria as políticas

---

**Pronto!** Agora seu Supabase está configurado! 🎉
