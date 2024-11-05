//DOM

const texto = document.querySelector('#texto');
const btnGerar = document.querySelector('#btn-gerar');
const area = document.querySelector('#qrcode');

// eventos
btnGerar.addEventListener('click',() => {
        area.innerHTML = '';
        new QRCode(area, {
            text: texto.value,
            width: 350,
            heith: 350,
            colorlight: 'transparent',
            colorDark: 'black',
        });
    });
