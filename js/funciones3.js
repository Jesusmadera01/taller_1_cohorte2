// Ejercicio 3

document.addEventListener("DOMContentLoaded", function () {
    const calcularBoton = document.getElementById("calcularBoton");

    calcularBoton.addEventListener("click", function () {
        calcularEstadisticas();
    });

    function calcularEstadisticas() {
        const inputNumeros = document.getElementById("inputNumeros").value;
        const numeros = inputNumeros.split(",").map(Number);

        const media = calcularMedia(numeros);

        const mediana = calcularMediana(numeros);

        const desviacion = calcularDesviacionEstandar(numeros);

        document.getElementById("mediaResultado").textContent = media.toFixed(2);
        document.getElementById("medianaResultado").textContent = mediana;
        document.getElementById("desviacionResultado").textContent = desviacion.toFixed(2);
    }

    function calcularMedia(numeros) {
        const suma = numeros.reduce((acc, num) => acc + num, 0);
        return suma / numeros.length;
    }

    function calcularMediana(numeros) {
        numeros.sort((a, b) => a - b);
        const medio = Math.floor(numeros.length / 2);
        if (numeros.length % 2 === 0) {
            return (numeros[medio - 1] + numeros[medio]) / 2;
        } else {
            return numeros[medio];
        }
    }

    function calcularDesviacionEstandar(numeros) {
        const media = calcularMedia(numeros);
        const sumaDiferenciaCuadrado = numeros.reduce((acc, num) => acc + Math.pow(num - media, 2), 0);
        const varianza = sumaDiferenciaCuadrado / numeros.length;
        return Math.sqrt(varianza);
    }
});