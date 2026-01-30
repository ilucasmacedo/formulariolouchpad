# ⚡ Guia Rápido: Onde Adicionar Cada Coisa no Supabase

## 🎯 Você está na tela de API Keys - Perfeito!

### ✅ O que você já vê na tela:

1. **Publishable Key** (chave pública)
   - Chave: `sb_publishable_SnVuo91Aih4ijDZcqUh5yQ_w3cbq...`
   - 👉 Use para: `NEXT_PUBLIC_SUPABASE_ANON_KEY` no `.env.local`

2. **Secret Key** (chave secreta)
   - Chave: `sb_secret_mRKL9mbcpyR3bW0mwVqosA_8uyBzQxU`
   - 👉 Use para: `SUPABASE_SERVICE_ROLE_KEY` no `.env.local`

---

## 📍 Onde encontrar a URL do Projeto:

1. **No menu lateral esquerdo**, clique em **Settings** (⚙️)
2. Depois clique em **API**
3. Procure por **Project URL** (geralmente no topo da página)
4. Será algo como: `https://xxxxx.supabase.co`
5. 👉 Use para: `NEXT_PUBLIC_SUPABASE_URL` no `.env.local`

---

## 🗃️ Onde criar a tabela:

1. **No menu lateral esquerdo**, clique em **SQL Editor**
2. Clique em **New Query** (ou **+ New Query**)
3. Abra o arquivo `supabase/schema.sql` do seu projeto
4. **Copie TODO o conteúdo** e cole no SQL Editor
5. Clique em **Run** (ou `Ctrl+Enter`)

---

## ✅ Onde verificar se funcionou:

1. **No menu lateral**, clique em **Table Editor**
2. Você deve ver a tabela **inscricoes**
3. Clique nela para ver as colunas

---

## 📝 Resumo - Onde colocar cada coisa:

| Variável | Onde encontrar | O que copiar |
|----------|----------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Settings > API > Project URL | URL completa (ex: `https://xxxxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Você já está vendo!** > Publishable key | Chave que começa com `sb_publishable_...` |
| `SUPABASE_SERVICE_ROLE_KEY` | **Você já está vendo!** > Secret keys | Chave que começa com `sb_secret_...` |

---

## 🚀 Próximo passo:

1. Crie o arquivo `.env.local` no seu projeto
2. Cole os valores que você copiou
3. Execute o SQL no SQL Editor
4. Pronto! 🎉

Veja o guia completo em `SUPABASE_SETUP.md` para mais detalhes.
