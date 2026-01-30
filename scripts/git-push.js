/**
 * Script para fazer push para o GitHub
 * Execute: npm run git:push
 */

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function pushToGitHub() {
  console.log('🚀 Configurando push para GitHub...\n');

  // Verificar se já tem remote
  let hasRemote = false;
  try {
    const remotes = execSync('git remote -v', { encoding: 'utf-8' });
    if (remotes.trim()) {
      hasRemote = true;
      console.log('✅ Remote já configurado:');
      console.log(remotes);
      console.log('');
    }
  } catch (error) {
    // Não tem remote ainda
  }

  if (!hasRemote) {
    console.log('📝 Você precisa configurar o remote do GitHub.\n');
    const repoUrl = await question('Cole a URL do seu repositório GitHub (ex: https://github.com/usuario/formulariolouchpad.git): ');
    
    if (!repoUrl.trim()) {
      console.log('❌ URL não fornecida. Saindo...');
      rl.close();
      process.exit(1);
    }

    try {
      console.log('\n🔗 Adicionando remote...');
      execSync(`git remote add origin ${repoUrl.trim()}`, { stdio: 'inherit' });
      console.log('✅ Remote adicionado!\n');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Remote já existe. Atualizando...');
        execSync(`git remote set-url origin ${repoUrl.trim()}`, { stdio: 'inherit' });
        console.log('✅ Remote atualizado!\n');
      } else {
        console.error('❌ Erro ao adicionar remote:', error.message);
        rl.close();
        process.exit(1);
      }
    }
  }

  // Verificar se há mudanças não commitadas
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (status.trim()) {
      console.log('📝 Há mudanças não commitadas. Deseja commitar? (s/n): ');
      const answer = await question('');
      if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'sim') {
        console.log('\n💾 Fazendo commit...');
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Update: Atualizações do projeto"', { stdio: 'inherit' });
        console.log('✅ Commit realizado!\n');
      }
    }
  } catch (error) {
    // Ignorar
  }

  // Fazer push
  console.log('📤 Fazendo push para GitHub...\n');
  try {
    execSync('git push -u origin main', { stdio: 'inherit' });
    console.log('\n✅ Push realizado com sucesso!\n');
    console.log('🎉 Seu código está no GitHub!\n');
    console.log('📋 Próximo passo:');
    console.log('   - Acesse: https://vercel.com/dashboard');
    console.log('   - Clique em "Add New Project"');
    console.log('   - Importe o repositório do GitHub');
    console.log('   - Configure as variáveis de ambiente');
    console.log('   - Deploy! 🚀\n');
  } catch (error) {
    console.error('\n❌ Erro ao fazer push:', error.message);
    console.log('\n💡 Dicas:');
    console.log('   - Verifique se você tem permissão no repositório');
    console.log('   - Verifique se está autenticado no Git');
    console.log('   - Tente: git push -u origin main manualmente\n');
    rl.close();
    process.exit(1);
  }

  rl.close();
}

pushToGitHub().catch(error => {
  console.error('❌ Erro:', error.message);
  rl.close();
  process.exit(1);
});
