const numeroRamdom = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function comprobar() {
    const adivinar = document.getElementById("adivinarField").value;
    const mensaje = document.getElementById("mensaje");

    if (isNaN(adivinar) || adivinar < 1 || adivinar > 100) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    intentos++;

    if (adivinar == numeroRamdom) {
        mensaje.textContent = `¡Felicitaciones! Adivinaste el número ${numeroRamdom} en ${intentos} intentos.`;
    } else if (adivinar < numeroRamdom) {
        mensaje.textContent = "El número es más alto. Intenta de nuevo.";
    } else {
        mensaje.textContent = "El número es más bajo. Intenta de nuevo.";
    }

    document.getElementById("adivinarField").value = "";
    document.getElementById("adivinarField").focus();
}