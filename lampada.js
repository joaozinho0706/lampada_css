const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff  = document.getElementById('turnOff');

function isLamBroken(){
    return lamp.src.indexOff('quebrada')> -1
}
function lampOn(){
    if(!isLamBroken()){
        lamp.src= './img/ligada.jpg';
    }
}
function lampOff(){
    if(!isLamBroken){
        lamp.src ='./img/desligada.jpg';
    }
}