# Formulário de Inscrição - Squad Venture Builder

Formulário de inscrição para o programa Squad Venture Builder desenvolvido com Next.js, TypeScript, Tailwind CSS e Supabase.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Supabase** - Banco de dados e autenticação
- **Vercel** - Deploy e hospedagem
- **Radix UI** - Componentes acessíveis

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no [Supabase](https://supabase.com)
- Conta no [Vercel](https://vercel.com) (opcional, para deploy)
- Conta no [GitHub](https://github.com) (para versionamento)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/formulariolouchpad.git
cd formulariolouchpad
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` e adicione suas credenciais do Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role
```

## 🗄️ Configuração do Supabase

### 1. Criar projeto no Supabase

1. Acesse [Supabase Dashboard](https://supabase.com/dashboard)
2. Crie um novo projeto
3. Anote a URL e as chaves de API (Settings > API)

### 2. Criar tabela no banco de dados

Execute o SQL abaixo no SQL Editor do Supabase:

```sql
-- Criar tabela de inscrições
CREATE TABLE inscricoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin TEXT,
  cidade_estado TEXT NOT NULL,
  nivel_atual TEXT NOT NULL,
  preferencia TEXT NOT NULL,
  tecnologias TEXT,
  compromisso TEXT NOT NULL,
  periodo TEXT NOT NULL,
  problema_app TEXT NOT NULL,
  motivacao TEXT NOT NULL,
  termos BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para busca por email
CREATE INDEX idx_inscricoes_email ON inscricoes(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE inscricoes ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (apenas para anon key)
CREATE POLICY "Permitir inserção pública" ON inscricoes
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir leitura apenas para service role (admin)
CREATE POLICY "Permitir leitura para service role" ON inscricoes
  FOR SELECT
  TO service_role
  USING (true);
```

### 3. Configurar variáveis de ambiente

Adicione as credenciais do Supabase no arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

## 🏃 Executando o projeto

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de produção

```bash
npm run build
npm start
```

## 🚀 Deploy na Vercel

Para instruções detalhadas passo a passo, consulte o arquivo **[DEPLOY.md](./DEPLOY.md)**.

### Resumo Rápido

1. Configure o Supabase (crie projeto e tabela)
2. Faça push do código para o GitHub
3. Conecte o repositório na Vercel
4. Configure as variáveis de ambiente
5. Faça o deploy

Veja o guia completo em [DEPLOY.md](./DEPLOY.md) para instruções detalhadas.

## 📦 Estrutura do Projeto

```
formulariolouchpad/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── inscription-form.tsx # Formulário de inscrição
│   └── ui/                  # Componentes UI (Radix UI)
├── lib/
│   └── utils.ts             # Utilitários
├── public/                  # Arquivos estáticos
├── .env.example             # Exemplo de variáveis de ambiente
├── .gitignore               # Arquivos ignorados pelo Git
├── next.config.mjs          # Configuração do Next.js
├── package.json             # Dependências
├── vercel.json              # Configuração do Vercel
└── README.md                # Este arquivo
```

## 🔐 Segurança

- Nunca commite o arquivo `.env.local` no Git
- Use variáveis de ambiente no Vercel para credenciais
- Configure Row Level Security (RLS) no Supabase
- Use a chave `anon` apenas no frontend
- Use a chave `service_role` apenas em funções server-side

## 📝 Variáveis de Ambiente

| Variável | Descrição | Onde usar |
|----------|-----------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase | Frontend |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave pública anônima | Frontend |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave de serviço (admin) | Backend apenas |

## 🐛 Troubleshooting

### Erro de conexão com Supabase
- Verifique se as variáveis de ambiente estão corretas
- Confirme que a URL do Supabase está acessível
- Verifique as políticas RLS no Supabase

### Erro no build da Vercel
- Verifique se todas as variáveis de ambiente estão configuradas
- Confirme que o Node.js está na versão 18+
- Verifique os logs de build na Vercel

## 📄 Licença

Este projeto é privado e pertence ao Squad Venture Builder.

## 👥 Contribuição

Este é um projeto interno. Para sugestões, entre em contato com a equipe.

---

Desenvolvido com ❤️ para o Squad Venture Builder
