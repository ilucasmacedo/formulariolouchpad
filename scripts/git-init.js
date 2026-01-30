/**
 * Script para inicializar Git e fazer commit inicial
 * Execute: npm run git:init
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Configurando Git e GitHub...\n');

// Verificar se já é um repositório Git
const isGitRepo = fs.existsSync(path.join(process.cwd(), '.git'));

if (isGitRepo) {
  console.log('✅ Repositório Git já inicializado\n');
} else {
  console.log('📦 Inicializando repositório Git...\n');
  try {
    execSync('git init', { stdio: 'inherit' });
    execSync('git branch -M main', { stdio: 'inherit' });
    console.log('✅ Repositório inicializado\n');
  } catch (error) {
    console.error('❌ Erro ao inicializar Git:', error.message);
    process.exit(1);
  }
}

// Adicionar todos os arquivos
console.log('📝 Adicionando arquivos...\n');
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Arquivos adicionados\n');
} catch (error) {
  console.error('❌ Erro ao adicionar arquivos:', error.message);
  process.exit(1);
}

// Verificar se há mudanças para commitar
try {
  const status = execSync('git status --porcelain', { encoding: 'utf-8' });
  if (!status.trim()) {
    console.log('ℹ️  Nenhuma mudança para commitar\n');
  } else {
    // Fazer commit inicial
    console.log('💾 Fazendo commit inicial...\n');
    execSync('git commit -m "Initial commit: Formulário de inscrição com Supabase e Vercel"', { stdio: 'inherit' });
    console.log('✅ Commit realizado com sucesso!\n');
  }
} catch (error) {
  console.error('❌ Erro ao fazer commit:', error.message);
  process.exit(1);
}

console.log('📋 Próximos passos:\n');
console.log('1. Crie um repositório no GitHub:');
console.log('   - Acesse: https://github.com/new');
console.log('   - Nome: formulariolouchpad (ou outro nome)');
console.log('   - NÃO marque "Initialize with README"\n');
console.log('2. Execute: npm run git:push');
console.log('   (Você precisará informar a URL do repositório)\n');
console.log('3. Depois, faça deploy na Vercel:');
console.log('   - npm run deploy');
console.log('   - Ou conecte o repositório na Vercel Dashboard\n');
