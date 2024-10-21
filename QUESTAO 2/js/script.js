const sinopse = document.querySelector('.sinopse');

const fundo = document.querySelector('.central-image');
const akira = document.querySelector('.btn-akira');
const kill = document.querySelector('.btn-killBill');
const jango = document.querySelector('.btn-jango');
const pulp = document.querySelector('.btn-pulp');


//evento

akira.addEventListener('click',red);
kill.addEventListener('click',mer);
jango.addEventListener('click',fer);
pulp.addEventListener('click',mcl);


//funções


function red(){
  imagem.src = 'images/akira.jpg';
  sinopse.textContent = `Uma enorme explosão fez com que Tóquio fosse destruída em 1988. Em seu lugar foi construída Neo Tóquio, que, em 2019, sofre com atentados terroristas por toda a cidade. Os amigos Kaneda e Tetsuo integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue rival, os Palhaços, até que um dia Tetsuo encontra Takashi, uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia.
`;
}

function mer(){
  imagem.src = 'images/kill_Bill.jpg';
  sinopse.textContent =`A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.`
}

function fer(){
  imagem.src = 'images/jango_livre.jpg';
  sinopse.textContent =`No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para perseguir os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a entrarem em competições mortais.`
}

function mcl(){
  imagem.src = 'images/pulp.jpg';
  sinopse.textContent =`Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`
}
