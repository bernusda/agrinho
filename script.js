function calcularEconomia() {
    // Captura o valor digitado pelo usuário
    const hectaresInput = document.getElementById('hectares').value;
    const resultadoBox = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Validação simples se o campo está vazio ou menor que 1
    if (hectaresInput === '' || hectaresInput <= 0) {
        alert('Por favor, insira um número válido de hectares.');
        return;
    }

    // Lógica matemática simplificada: Supondo economia de 1200 litros por hectare ao dia com Front-End/IoT
    const litrosEconomizados = hectaresInput * 1200;

    // Atualiza e exibe o resultado na tela tirando a classe 'hidden'
    textoResultado.innerHTML = `Utilizando sistemas de irrigação inteligentes monitorados por software em sua área de <strong>${hectaresInput} hectares</strong>, estima-se uma economia de aproximadamente <strong>${litrosEconomizados.toLocaleString('pt-BR')} litros</strong> de água por dia!`;
    
    resultadoBox.classList.remove('hidden');
}
