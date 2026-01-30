import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.nomeCompleto || !body.email || !body.termos) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('❌ SUPABASE_SERVICE_ROLE_KEY não configurada')
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta. Verifique as variáveis de ambiente.' },
        { status: 500 }
      )
    }

    // Inserir dados no Supabase
    const { data, error } = await supabaseAdmin
      .from('inscricoes')
      .insert([
        {
          nome_completo: body.nomeCompleto,
          email: body.email,
          linkedin: body.linkedin || null,
          cidade_estado: body.cidadeEstado,
          nivel_atual: body.nivelAtual,
          preferencia: body.preferencia,
          tecnologias: body.tecnologias || null,
          compromisso: body.compromisso,
          periodo: body.periodo,
          problema_app: body.problemaApp,
          motivacao: body.motivacao,
          termos: body.termos,
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao inserir no Supabase:', error)
      return NextResponse.json(
        { error: 'Erro ao salvar inscrição', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscrição realizada com sucesso!',
        data: data[0]
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
