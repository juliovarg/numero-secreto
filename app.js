let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

let tentativas = 1;
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute==numeroAleatorio){

        let palavraTentativa= tentativas>1? 'tentativas': 'tentativa';
        let mensagemAcerto = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTexto('h1', 'ACERTOU!');
        exibirTexto('p',mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute>numeroAleatorio){
        exibirTexto('p', 'O número secreto é menor');
    }else{
        exibirTexto('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();

}

function gerarNumeroAleatorio(){
    
    let numeroEscolhido = parseInt(Math.random()*numeroLimite)+1;
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados=[];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    tentativas=1;
    exibirMensagemInicial();
    limparCampo();
    numeroAleatorio=gerarNumeroAleatorio(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function exibirMensagemInicial(){
    exibirTexto('h1','Jogo do número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}