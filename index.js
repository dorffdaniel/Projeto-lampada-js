const turnOn = document.getElementById('turnOn');

const turnOff = document.getElementById('turnOff');

const lamp = document.getElementById('lamp');

//eventos

turnOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

lamp.addEventListener('dblclick', lampbroken)

//funçoes
function lampOn(){
    if(!islampBroken()){
    lamp.src='src/imagem/ligada.jpg';
    }
}

function lampOff(){
    if(!islampBroken()){
    lamp.src='src/imagem/desligada.jpg';
    }
}

function lampbroken(){
    lamp.src='src/imagem/quebrada.jpg';
}

function islampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}