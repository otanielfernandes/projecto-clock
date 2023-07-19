/****Criando uma constante para pegar o ID de cada span das Divs******/
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//Criando uma constante para usar a função setInterval:

const relogio = setInterval(function time(){
    let dataHoje = new Date();
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds(); 

        /**Fazendo um if caso as horas forem menor que 10, acrescentar um "0" a frente da hora**/
        if(hr <10 ) hr = '0' + hr;

        /**Fazendo um if caso os minutos forem menor que 10, acrescentar um "0" a frente dos minutos**/
        if(min < 10 ) min = '0' + min;
        
    
        /**Fazendo um if caso dos minutos forem menor que 10, acrescentar um "0" a frente dos minutos**/
        if(seg < 10 ) seg = '0' + seg;
    
    /*****Colocando o valor de cada let nas constantes que foram pegas através do ID*****/
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})