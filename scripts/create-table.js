/**
 * Script para criar a tabela no Supabase automaticamente
 * Execute: node scripts/create-table.js
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Erro: Variáveis de ambiente não encontradas!');
  console.error('Verifique se o arquivo .env.local existe e tem as credenciais do Supabase.');
  process.exit(1);
}

// Cliente com service role key (tem permissões de admin)
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// SQL completo para criar a tabela
const sql = `
-- Criar tabela de inscrições
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

-- Criar índice para busca por email
CREATE INDEX IF NOT EXISTS idx_inscricoes_email ON inscricoes(email);

-- Criar índice para busca por data de criação
CREATE INDEX IF NOT EXISTS idx_inscricoes_created_at ON inscricoes(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE inscricoes ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'inscricoes' 
    AND policyname = 'Permitir inserção pública'
  ) THEN
    CREATE POLICY "Permitir inserção pública" ON inscricoes
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

-- Política para permitir leitura apenas para service role
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'inscricoes' 
    AND policyname = 'Permitir leitura para service role'
  ) THEN
    CREATE POLICY "Permitir leitura para service role" ON inscricoes
      FOR SELECT
      TO service_role
      USING (true);
  END IF;
END $$;

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
DROP TRIGGER IF EXISTS update_inscricoes_updated_at ON inscricoes;
CREATE TRIGGER update_inscricoes_updated_at
    BEFORE UPDATE ON inscricoes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
`;

async function createTable() {
  console.log('🚀 Iniciando criação da tabela no Supabase...\n');
  console.log(`📍 URL: ${supabaseUrl}\n`);

  try {
    // Executar o SQL usando rpc ou query direta
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });

    if (error) {
      // Se o RPC não existir, tentar método alternativo
      console.log('⚠️  Método RPC não disponível, tentando método alternativo...\n');
      
      // Usar a API REST diretamente
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseServiceKey,
          'Authorization': `Bearer ${supabaseServiceKey}`
        },
        body: JSON.stringify({ sql_query: sql })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('✅ Tabela criada com sucesso!\n');
    } else {
      console.log('✅ Tabela criada com sucesso!\n');
    }

    // Verificar se a tabela foi criada
    const { data: tables, error: checkError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_name', 'inscricoes');

    if (checkError) {
      // Tentar verificar de outra forma
      console.log('✅ Script executado! Verifique no Supabase Dashboard se a tabela foi criada.\n');
      console.log('📍 Vá em: Table Editor > inscricoes\n');
    } else if (tables && tables.length > 0) {
      console.log('✅ Tabela verificada e confirmada no banco de dados!\n');
    } else {
      console.log('⚠️  Tabela pode não ter sido criada. Verifique manualmente no Supabase.\n');
    }

  } catch (error) {
    console.error('❌ Erro ao criar tabela:', error.message);
    console.error('\n💡 Dica: Execute o SQL manualmente no SQL Editor do Supabase.');
    console.error('   Arquivo: supabase/schema.sql\n');
    process.exit(1);
  }
}

createTable();
