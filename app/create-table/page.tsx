"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CreateTablePage() {
  const [copied, setCopied] = useState(false)

  const sql = `-- Criar tabela de inscrições
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
    EXECUTE FUNCTION update_updated_at_column();`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sql)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full bg-neutral-900 border border-orange-500/20 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Criar Tabela no Supabase</h1>
        <p className="text-white/60 mb-6">Siga os passos abaixo para criar a tabela automaticamente</p>
        
        <div className="space-y-6">
          {/* Instruções */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
            <h2 className="text-white font-semibold mb-3">📋 Passos:</h2>
            <ol className="text-white/80 text-sm space-y-2 list-decimal list-inside">
              <li>Clique no botão abaixo para copiar o SQL</li>
              <li>Abra o Supabase Dashboard</li>
              <li>Vá em <strong>SQL Editor</strong> (menu lateral)</li>
              <li>Clique em <strong>New Query</strong></li>
              <li>Cole o SQL (Ctrl+V) e clique em <strong>Run</strong></li>
              <li>Verifique em <strong>Table Editor</strong> se a tabela foi criada</li>
            </ol>
          </div>

          {/* Botão copiar */}
          <Button
            onClick={copyToClipboard}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-6"
          >
            {copied ? '✅ SQL Copiado!' : '📋 Copiar SQL para Área de Transferência'}
          </Button>

          {/* SQL Preview */}
          <div className="bg-black/50 border border-orange-500/20 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold">SQL para Executar:</h3>
              <span className="text-white/60 text-xs">Clique no botão acima para copiar</span>
            </div>
            <pre className="text-white/80 text-xs overflow-x-auto p-4 bg-black/30 rounded border border-orange-500/10">
              <code>{sql}</code>
            </pre>
          </div>

          {/* Link direto */}
          <div className="text-center">
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 underline text-sm"
            >
              🔗 Abrir Supabase Dashboard em nova aba
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
