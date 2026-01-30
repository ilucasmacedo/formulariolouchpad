import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: 'Variáveis de ambiente do Supabase não configuradas' },
        { status: 500 }
      )
    }

    // Cliente com service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // SQL para criar a tabela
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
`

    // Infelizmente, o Supabase não permite executar SQL diretamente via API REST
    // A única forma é através do SQL Editor ou criando uma função RPC
    // Vamos retornar o SQL para o usuário executar manualmente ou usar uma solução alternativa

    // Tentar verificar se a tabela já existe
    const { data: checkData, error: checkError } = await supabase
      .from('inscricoes')
      .select('id')
      .limit(1)

    if (!checkError) {
      return NextResponse.json({
        message: 'A tabela já existe! Verifique no Table Editor do Supabase.',
        sql: sql
      })
    }

    // Se a tabela não existe, retornar instruções
    return NextResponse.json({
      message: 'Para criar a tabela, execute o SQL no SQL Editor do Supabase.',
      instructions: [
        '1. Acesse o Supabase Dashboard',
        '2. Vá em SQL Editor',
        '3. Clique em New Query',
        '4. Cole o SQL abaixo e execute',
      ],
      sql: sql
    })

  } catch (error: any) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: error.message || 'Erro ao processar requisição' },
      { status: 500 }
    )
  }
}
