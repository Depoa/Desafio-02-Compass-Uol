










function  calcular() {
    var largura1 = document.getElementById("largura1").value;
    var altura1 = document.getElementById("altura1").value;
    var largura2 = document.getElementById("largura2").value;
    var altura2 = document.getElementById("altura2").value;
    var largura3 = document.getElementById("largura3").value;
    var altura3 = document.getElementById("altura3").value;
    var largura4 = document.getElementById("largura4").value;
    var altura4 = document.getElementById("altura4").value;
    var portas = document.getElementById("portas").value;
    var portas = parseFloat((1.52 * portas).toFixed(2));
    var janelas =document.getElementById("janelas").value;
    var janelas = parseFloat((2.4 * janelas).toFixed(2));
    document.getElementById("tinta-total").innerHTML = parseFloat((((altura1 * largura1) + (altura2 * largura2) + (altura3 * largura3) + (altura4 * largura4) - ( janelas + portas  )) / 5).toFixed(2));
}

