const numeroSenha = document.querySelector('.parametro-senha__texto');
numeroSenha.textContent = 5;

botoes[0].onclick = diminuiTamanho;

console.log(botoes);

function diminuiTamanho(){ 
    let tamanhoSenha = 12;

senha.textContent = tamanhoSenha;

tamanhoSenha = tamanhoSenha - 1;
}