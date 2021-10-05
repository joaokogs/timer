function reload(){
    document.querySelector('.pause').style.display = 'none';
}
window.onload = reload

var min = 0;
var sec = 0;
var mili = 0;
var intervalo;

function iniciar(){
    intervalo = setInterval(timer,10)
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.pause').style.display = '';
}



function pausar(){
    clearInterval(intervalo)
    document.querySelector('.start').style.display = '';
    document.querySelector('.pause').style.display = 'none';
}
function parar(){
    clearInterval(intervalo)
    mili=0
    sec=0
    min=0
    document.querySelector('#tempo').innerText='00:00.00';
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.start').style.display = '';

}
function timer(){
        mili++
        if(mili==100){
            sec++
            mili=0
            if(sec==60){
                min++
                sec=0
                mili=0
            }
        } 
    document.querySelector('#tempo').innerText=min+':'+sec+'.'+mili
}