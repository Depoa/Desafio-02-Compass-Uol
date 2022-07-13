var altura = document.getElementById("largura1").value;

areaTotal = altura * largura;

superficie = areaTotal - areaAberturas;

tintaParede = superficie/5;

variavel = tintaParede1 + tintaParede2

document.getElementById("tinta-total").innerHTML = variavel

totalTinta = 0.0 L
lataG = 0
lataM = 0
lataP = 0
lataPP = 0

function distribuirLatas(totalTintas){
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

distribuirLatas;

if (lataG > 0) {
    document.getElementById("tinta-total").innerHTML = lataG;
}
