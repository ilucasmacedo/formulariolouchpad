# 🔍 Como Verificar se a Tabela Foi Criada no Supabase

## ✅ Passo 1: Verificar se a Tabela Existe

### Opção A: Usando Table Editor (Mais Fácil)

1. **No menu lateral esquerdo do Supabase**, clique em **Table Editor**
   - O ícone geralmente é uma tabela 📊
   - Pode estar escrito "Table Editor" ou "Tables"

2. **Procure pela tabela `inscricoes`**
   - Se você ver a tabela na lista = ✅ Tabela criada!
   - Se não aparecer nada ou só aparecer tabelas padrão = ❌ Tabela não foi criada ainda

### Opção B: Usando SQL Editor (Verificação Rápida)

1. **No menu lateral**, clique em **SQL Editor**
2. **Clique em New Query** (ou **+ New Query**)
3. **Cole este código SQL**:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'inscricoes';
```

4. **Clique em Run** (ou `Ctrl+Enter`)
5. **Resultado**:
   - Se aparecer uma linha com `inscricoes` = ✅ Tabela existe!
   - Se não aparecer nada = ❌ Tabela não existe

---

## 🛠️ Passo 2: Criar a Tabela (Se Não Existe)

Se a tabela **NÃO** apareceu, siga estes passos:

### 2.1 Abrir o SQL Editor

1. **No menu lateral**, clique em **SQL Editor**
2. **Clique em New Query** (ou **+ New Query**)

### 2.2 Copiar o SQL

1. **Abra o arquivo** `supabase/schema.sql` do seu projeto
2. **Selecione TODO o conteúdo** (Ctrl+A)
3. **Copie** (Ctrl+C)

### 2.3 Colar e Executar

1. **Cole o SQL** no SQL Editor do Supabase (Ctrl+V)
2. **Clique no botão Run** (ou pressione `Ctrl+Enter`)
3. **Aguarde alguns segundos**

### 2.4 Verificar o Resultado

Você deve ver uma mensagem de sucesso, algo como:
- ✅ "Success. No rows returned"
- ✅ "Query executed successfully"
- ✅ Ou uma lista de comandos executados

**Se aparecer erro**:
- Leia a mensagem de erro
- Verifique se copiou todo o SQL
- Tente executar novamente

---

## ✅ Passo 3: Confirmar que Funcionou

### 3.1 Verificar no Table Editor

1. **Volte para Table Editor** (menu lateral)
2. **Atualize a página** (F5) se necessário
3. **Procure por `inscricoes`** na lista de tabelas
4. **Clique na tabela** para ver as colunas

Você deve ver colunas como:
- `id`
- `nome_completo`
- `email`
- `linkedin`
- `cidade_estado`
- `nivel_atual`
- `preferencia`
- `tecnologias`
- `compromisso`
- `periodo`
- `problema_app`
- `motivacao`
- `termos`
- `created_at`
- `updated_at`

### 3.2 Verificar as Políticas RLS

1. **Ainda no Table Editor**, com a tabela `inscricoes` selecionada
2. **Clique na aba Policies** (ou **RLS**)
3. **Você deve ver 2 políticas**:
   - ✅ "Permitir inserção pública"
   - ✅ "Permitir leitura para service role"

---

## 🆘 Problemas Comuns

### ❌ "Não consigo ver o Table Editor"

**Solução**:
- O Table Editor pode estar em outro lugar no menu
- Procure por "Tables", "Database", ou "Schema"
- Use a busca do Supabase (se houver)

### ❌ "O SQL deu erro ao executar"

**Possíveis causas**:
1. **Erro de sintaxe**: Verifique se copiou todo o SQL corretamente
2. **Tabela já existe**: Se a tabela já existir, o `CREATE TABLE IF NOT EXISTS` não dará erro, mas pode não criar se houver diferenças
3. **Permissões**: Verifique se você tem permissão para criar tabelas

**Solução**:
- Leia a mensagem de erro completa
- Tente executar apenas a parte de criar a tabela primeiro:

```sql
CREATE TABLE IF NOT EXISTS inscricoes (
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
```

### ❌ "A tabela aparece mas está vazia"

**Isso é normal!** A tabela está criada, mas ainda não tem dados. Os dados aparecerão quando:
- Você preencher o formulário no site
- Enviar o formulário
- Os dados serão salvos automaticamente

---

## 📸 Onde Procurar no Supabase

### Menu Lateral (Geralmente à esquerda):

```
📊 Table Editor    ← Aqui você vê as tabelas
📝 SQL Editor      ← Aqui você executa SQL
⚙️ Settings        ← Configurações
```

### Se o menu estiver diferente:

Procure por:
- **Database** > **Tables**
- **Schema** > **Tables**
- **Tables** (direto no menu)

---

## ✅ Checklist Final

- [ ] Tabela `inscricoes` aparece no Table Editor
- [ ] Tabela tem todas as colunas (15 colunas)
- [ ] Políticas RLS estão criadas (2 políticas)
- [ ] Não há erros no SQL Editor

**Se todos os itens estão marcados = ✅ Tudo certo!**

---

**Ainda com dúvidas?** Tente executar o SQL novamente e verifique se aparece alguma mensagem de erro específica.
