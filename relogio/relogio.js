//DOM

const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

//EVENTOS

setInterval(relogio, 1000);

//FUNÇÕES

function relogio (){
    let hoje = new Date();
    let hours = hoje.getHours();
    let minutes = hoje.getMinutes();
    let seconds = hoje.getSeconds();

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;
}