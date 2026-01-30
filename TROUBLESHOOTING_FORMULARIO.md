# 🔧 Troubleshooting: Formulário Não Salva no Supabase

## ✅ O que foi corrigido:

1. **Formulário conectado à API** - Agora o formulário envia os dados para `/api/inscricao`
2. **Feedback visual** - Mensagens de sucesso/erro aparecem no formulário
3. **Validação melhorada** - Verificação de variáveis de ambiente

---

## 🔍 Como Diagnosticar o Problema:

### 1. Verificar se o servidor está rodando

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### 2. Abrir o Console do Navegador

1. Pressione **F12** no navegador
2. Vá na aba **Console**
3. Preencha e envie o formulário
4. Veja se aparecem erros

### 3. Verificar a Aba Network

1. No DevTools (F12), vá na aba **Network**
2. Envie o formulário
3. Procure por uma requisição para `/api/inscricao`
4. Clique nela e veja:
   - **Status**: Deve ser 201 (sucesso) ou outro código
   - **Response**: Veja a mensagem de resposta

---

## 🐛 Problemas Comuns e Soluções:

### ❌ Erro: "Campos obrigatórios faltando"

**Causa**: Algum campo obrigatório não foi preenchido

**Solução**:
- Preencha todos os campos marcados com *
- Verifique se aceitou os termos

---

### ❌ Erro: "Configuração do servidor incompleta"

**Causa**: Variáveis de ambiente não configuradas

**Solução**:
1. Verifique se o arquivo `.env.local` existe
2. Verifique se tem estas 3 variáveis:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
3. **Reinicie o servidor** após adicionar/alterar variáveis:
   ```bash
   # Pare o servidor (Ctrl+C)
   npm run dev
   ```

---

### ❌ Erro: "relation 'inscricoes' does not exist"

**Causa**: Tabela não foi criada no Supabase

**Solução**:
1. Acesse o Supabase Dashboard
2. Vá em **SQL Editor**
3. Execute o SQL do arquivo `supabase/schema.sql`
4. Verifique em **Table Editor** se a tabela `inscricoes` existe

---

### ❌ Erro: "new row violates row-level security policy"

**Causa**: Políticas RLS não configuradas corretamente

**Solução**:
1. No Supabase, vá em **Table Editor** > **inscricoes**
2. Clique na aba **Policies**
3. Verifique se existem estas políticas:
   - ✅ "Permitir inserção pública" (INSERT para anon)
   - ✅ "Permitir leitura para service role" (SELECT para service_role)
4. Se não existirem, execute o SQL novamente

---

### ❌ Erro: "Missing Supabase environment variables"

**Causa**: Variáveis não estão sendo lidas

**Solução**:
1. Verifique se o arquivo `.env.local` está na raiz do projeto
2. Verifique se não tem espaços extras nas variáveis:
   ```env
   # ❌ ERRADO
   NEXT_PUBLIC_SUPABASE_URL = https://...
   
   # ✅ CORRETO
   NEXT_PUBLIC_SUPABASE_URL=https://...
   ```
3. **Reinicie o servidor** após alterar `.env.local`

---

### ❌ Erro: "Failed to fetch" ou erro de CORS

**Causa**: Problema de conexão ou servidor não está rodando

**Solução**:
1. Verifique se o servidor está rodando (`npm run dev`)
2. Verifique se está acessando `http://localhost:3000`
3. Verifique a conexão com a internet
4. Veja os logs do servidor no terminal

---

## ✅ Checklist de Verificação:

- [ ] Servidor rodando (`npm run dev`)
- [ ] Arquivo `.env.local` existe na raiz do projeto
- [ ] Todas as 3 variáveis do Supabase estão no `.env.local`
- [ ] Servidor foi reiniciado após criar/alterar `.env.local`
- [ ] Tabela `inscricoes` foi criada no Supabase
- [ ] Políticas RLS estão configuradas
- [ ] Console do navegador não mostra erros
- [ ] Network mostra requisição para `/api/inscricao`

---

## 🧪 Teste Manual da API:

Você pode testar a API diretamente usando curl ou Postman:

```bash
curl -X POST http://localhost:3000/api/inscricao \
  -H "Content-Type: application/json" \
  -d '{
    "nomeCompleto": "Teste",
    "email": "teste@teste.com",
    "cidadeEstado": "São Paulo/SP",
    "nivelAtual": "Iniciante/Autodidata",
    "preferencia": "fullstack",
    "compromisso": "sim",
    "periodo": "Noite",
    "problemaApp": "Teste",
    "motivacao": "Teste",
    "termos": true
  }'
```

Se funcionar, você verá uma resposta de sucesso e os dados aparecerão no Supabase.

---

## 📞 Se Nada Funcionar:

1. **Verifique os logs do servidor** no terminal
2. **Verifique os logs do Supabase**:
   - Dashboard > Logs > API Logs
3. **Teste a conexão com o Supabase**:
   - Vá em Table Editor
   - Tente inserir um registro manualmente
   - Se funcionar, o problema está na API/Formulário
   - Se não funcionar, o problema está no Supabase

---

**Ainda com problemas?** Compartilhe:
- Mensagem de erro exata do console
- Status code da requisição (Network tab)
- Logs do servidor
