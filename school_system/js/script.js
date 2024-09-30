//DOM
let uni1 = document.querySelector('#uni1');
let uni2 = document.querySelector('#uni2');
let uni3 = document.querySelector('#uni3');
let btn_Resultado = document.querySelector('#btn-resultado');
let resultado = document.querySelector('#resultado');

//eventos
btn_Resultado.addEventListener('click', calcularMedia);

//funções

/**
 * 
 function calcularMedia() {
    let notas = [parseInt(uni1.value), parseInt(uni2.value), parseInt(uni3.value)];
    let soma = notas.reduce((a, b) => a + b, 0);
    let media = soma / notas.length;
    resultado.textContent = `A média das notas é ${media.toFixed(2)}`;
}
 * 
 */

function calcularMedia(){
    let n1 = Number(uni1.value);
    let n2 = Number(uni2.value);
    let n3 = Number(uni3.value);

    let media = (n1+n2+n3)/3;
    
    if(media >= 5){
        mensagem = 'aprovado!!!';
    }
    else {
        mensagem = 'para recuperação';
    }

    resultado.textContent = `A sua media foi: ${media.toFixed(1)}, você foi ${mensagem}`;
}