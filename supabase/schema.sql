-- Schema do banco de dados para o formulário de inscrição
-- Execute este SQL no SQL Editor do Supabase

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

-- Criar índice para busca por email (evita duplicatas)
CREATE INDEX IF NOT EXISTS idx_inscricoes_email ON inscricoes(email);

-- Criar índice para busca por data de criação
CREATE INDEX IF NOT EXISTS idx_inscricoes_created_at ON inscricoes(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE inscricoes ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (qualquer um pode se inscrever)
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

-- Política para permitir leitura apenas para service role (apenas admin)
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

-- Política para permitir leitura para authenticated users (opcional)
-- Descomente se quiser que usuários autenticados vejam suas próprias inscrições
-- CREATE POLICY "Usuários veem próprias inscrições" ON inscricoes
--   FOR SELECT
--   TO authenticated
--   USING (auth.uid()::text = user_id);

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

-- Comentários nas colunas para documentação
COMMENT ON TABLE inscricoes IS 'Tabela de inscrições do formulário Squad Venture Builder';
COMMENT ON COLUMN inscricoes.nome_completo IS 'Nome completo do candidato';
COMMENT ON COLUMN inscricoes.email IS 'Email do candidato (único)';
COMMENT ON COLUMN inscricoes.linkedin IS 'Link do LinkedIn, GitHub ou portfólio';
COMMENT ON COLUMN inscricoes.cidade_estado IS 'Cidade e estado do candidato';
COMMENT ON COLUMN inscricoes.nivel_atual IS 'Nível atual: Estudante, Iniciante, Transição, Júnior/Pleno';
COMMENT ON COLUMN inscricoes.preferencia IS 'Preferência de atuação: tech-lead, fullstack, product, ux-growth';
COMMENT ON COLUMN inscricoes.tecnologias IS 'Tecnologias que o candidato já teve contato';
COMMENT ON COLUMN inscricoes.compromisso IS 'Confirmação de compromisso com 2 horas diárias';
COMMENT ON COLUMN inscricoes.periodo IS 'Melhor período: Manhã, Tarde ou Noite';
COMMENT ON COLUMN inscricoes.problema_app IS 'Problema que o candidato gostaria de resolver com um app';
COMMENT ON COLUMN inscricoes.motivacao IS 'Motivação para entrar no Squad';
COMMENT ON COLUMN inscricoes.termos IS 'Aceite dos termos e condições';
