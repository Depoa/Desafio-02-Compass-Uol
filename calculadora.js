var areaParede1 = calcularAreaParede1();
var largura1 = document.getElementById("largura1").value;
var altura1 = document.getElementById("altura1").value;

areaParede1 = largura1 + altura1;
console.log(areaParede1)

function calcularAreaParede1(altura1, largura1){
        var largura1 = Number(document.querySelector("#largura1").value);
        var altura1 = Number(document.querySelector("#altura1").value);
        return (largura1 * altura1).toFixed(2);
    }



const campoQtdeTinta = document.querySelector("#tinta-total");

const botao = document.querySelector("#Calcular");

botao.addEventListener("click", function(e) {
    e.preventDefault();
    
    areaParede1 = largura1.value + altura1.value;
console.log(areaParede1)
    
})

/*
var areaTotal = areaParede1 + areaParede2 + areaParede3 + areaParede4 - areaPortas - areaJanelas;

var tintaNecessaria = areaTotal/5;


function distribuirLatas(tintaNecessaria){
    var totalTintas = tintaNecessaria;
    while(totalTintas > 0){
        if(totalTintas >= 18){
            lataG++;
            totalTintas = totalTintas - 18;
        }else if(totalTintas >= 3.6){
            lataM++;
            totalTintas = totalTintas - 3.6;
        }else if(totalTintas >= 2.5){
            lataP++;
            totalTintas = totaltintas - 2.5;
        }else if(totalTintas >= 0.5){
            lataPP++;
            totalTintas = totalTintas - 0.5;
        }else if(totalTintas > 0){
            lataPP++;
            totalTintas = 0;
        }
    }
}

const campoQtdeTinta = document.querySelector("#tinta-total");


function imprimirResultados(){
    campoQtdeTinta.innerHTML =  
}

const botao = document.querySelector("#Calcular");

botao.addEventListener("click", function(e) {
    e.preventDefault();
    
})
*/

/*var largura=parseFloat(document.getElementById("largura1").value);
document.getElementById("largInput").innerHTML="LARGURA da parede: " + comprimento + "m";

var altura=parseFloat(document.getElementById("altura1").value);
document.getElementById("altInput").innerHTML="ALTURA da parede: " + altura + "m";

var m2ParedeP1 = parseFloat((largura * altura).toFixed(2));
document.getElementById("m2paredeResultado").innerHTML = "m² da parede: " + m2ParedeP1 + "m²";

areaTotal = altura1 * largura1;

superficie = areaTotal - areaAberturas;

tintaParede = superficie/5;

variavel = tintaParede1 + tintaParede2

document.getElementById("tinta-total").innerHTML = variavel

totalTinta = 0.0 L
lataG = 0
lataM = 0
lataP = 0
lataPP = 0


distribuirLatas;

if (lataG > 0) {
    document.getElementById("tinta-total").innerHTML = lataG;*/
