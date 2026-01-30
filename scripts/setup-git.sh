#!/bin/bash
# Script para configurar Git e fazer push inicial

echo "🚀 Configurando Git e GitHub..."

# Verificar se já é um repositório Git
if [ -d ".git" ]; then
    echo "✅ Repositório Git já inicializado"
else
    echo "📦 Inicializando repositório Git..."
    git init
    git branch -M main
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit inicial..."
git commit -m "Initial commit: Formulário de inscrição com Supabase e Vercel"

echo ""
echo "✅ Arquivos commitados com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Crie um repositório no GitHub (se ainda não criou)"
echo "2. Execute o script: npm run git:push"
echo "   Ou manualmente:"
echo "   git remote add origin https://github.com/SEU_USUARIO/formulariolouchpad.git"
echo "   git push -u origin main"
