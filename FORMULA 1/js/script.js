//DOM

const fundo = document.querySelector('body');
const redBull = document.querySelector('.btn-red_Bull');
const mercedes = document.querySelector('.btn-mercedes');
const ferrari = document.querySelector('.btn-ferrari');
const mclaren = document.querySelector('.btn-mclaren');
const astonMartin = document.querySelector('.btn-aston_Martin');
const alpine = document.querySelector('.btn-alpine');
const williams = document.querySelector('.btn-williams');
const visa = document.querySelector('.btn-visa');
const sauber = document.querySelector('.btn-sauber');
const haas = document.querySelector('.btn-haas');

//evento

redBull.addEventListener('click',red);
mercedes.addEventListener('click',mer);
ferrari.addEventListener('click',fer);
mclaren.addEventListener('click',mcl);
astonMartin.addEventListener('click',ast);
alpine.addEventListener('click',alp);
williams.addEventListener('click',wil);
visa.addEventListener('click',vis);
sauber.addEventListener('click',sau);
haas.addEventListener('click',haa);

//funções

function red(){
  fundo.className = 'redBull';
}

function mer(){
  fundo.className = 'mercedes';
}

function fer(){
  fundo.className = 'ferrari';
}

function mcl(){
  fundo.className = 'mclaren';
}

function ast(){
  fundo.className = 'astonMartin';
}

function alp(){
 fundo.className = 'alpine';
}

function wil(){
  fundo.className = 'williams';
}

function vis(){
  fundo.className = 'visa';
}

function sau(){
  fundo.className = 'sauber';
}

function haa(){
  fundo.className = 'haas';
}

