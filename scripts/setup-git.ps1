# Script PowerShell para configurar Git e fazer push inicial

Write-Host "🚀 Configurando Git e GitHub..." -ForegroundColor Cyan

# Verificar se já é um repositório Git
if (Test-Path .git) {
    Write-Host "✅ Repositório Git já inicializado" -ForegroundColor Green
} else {
    Write-Host "📦 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Adicionar todos os arquivos
Write-Host "📝 Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit inicial
Write-Host "💾 Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit: Formulário de inscrição com Supabase e Vercel"

Write-Host ""
Write-Host "✅ Arquivos commitados com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Crie um repositório no GitHub (se ainda não criou)"
Write-Host "2. Execute: npm run git:push"
Write-Host "   Ou manualmente:"
Write-Host "   git remote add origin https://github.com/SEU_USUARIO/formulariolouchpad.git"
Write-Host "   git push -u origin main"
