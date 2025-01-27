let numeroSecreto = gerarNumeroAleatorio(); // Gera o número secreto aleatório
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; // Atualiza o conteúdo do elemento com a mensagem
}

// Exibe o título e a instrução
exibirTextonaTela('h1', 'Jogo do número secreto');
exibirTextonaTela('p', 'Escolha um número entre 1 e 10');
document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Botão "Reiniciar" desabilitado no início

// Função para verificar o chute do jogador
function verificarChute() {
    let chute = document.querySelector('input').value; // Obtém o chute do jogador
    chute = parseInt(chute); // Converte o chute para um número inteiro

    // Valida se o chute está dentro do intervalo permitido
    if (chute < 1 || chute > 10) {
        exibirTextonaTela('p', 'Por favor, escolha um número entre 1 e 10.');
        limparCampo(); // Limpa o campo de entrada após a tentativa inválida
        return; // Sai da função para não prosseguir com a lógica do jogo
    }

    if (chute === numeroSecreto) {
        exibirTextonaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Ajuste singular/plural
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`; // Interpolação correta
        exibirTextonaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão "Reiniciar"
        
    } else {
        if (chute > numeroSecreto) {
            exibirTextonaTela('p', 'O número secreto é menor.'); // Dica se o chute é maior
        } else {
            exibirTextonaTela('p', 'O número secreto é maior.'); // Dica se o chute é menor
        }
        tentativas++;
        limparCampo(); // Limpa o campo de entrada após a tentativa
    }
}

// Função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // Gera número entre 1 e 10
}

// Função para limpar o campo de entrada
function limparCampo() {
    let chute = document.querySelector('input'); // Seleciona o campo de entrada
    chute.value = ''; // Limpa o valor do campo
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo(); 
    tentativas = 1; // Reseta as tentativas
    exibirTextonaTela('h1', 'Jogo do número secreto'); // Reseta o título
    exibirTextonaTela('p', 'Escolha um número entre 1 e 10'); // Reseta a instrução
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Desabilita o botão "Reiniciar" novamente
}

// Adiciona evento de clique no botão "Chutar"
document.querySelector('.container__botao').addEventListener('click', verificarChute);

// Adiciona evento de clique no botão "Reiniciar"
document.querySelector('#reiniciar').addEventListener('click', reiniciarJogo);
