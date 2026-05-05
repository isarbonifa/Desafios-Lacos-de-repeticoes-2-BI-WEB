// Iniciamos o laço de 1 a 10
for (let i = 1; i <= 10; i++) {

    // Verificamos se a caixa é a 5 ou a 8 (extraviadas)
    if (i === 5 || i === 8) {
      console.log(`Caixa ${i}: Extraviada. Pulando para a próxima...`);
      // O continue ignora o restante do código deste ciclo e pula para o próximo número
      continue;
    }
  
    // Simulamos um erro crítico na caixa 9
    if (i === 9) {
      console.log(`Caixa ${i}: ERRO DETECTADO! Sistema interrompido.`);
      // O break encerra o laço imediatamente, ignorando inclusive a caixa 10
      break;
    }
  
    // Se não cair nos 'ifs' acima, a conferência segue normal
    console.log(`Caixa ${i}: Conferida com sucesso.`);
  }