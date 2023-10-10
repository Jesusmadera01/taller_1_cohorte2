document.addEventListener("DOMContentLoaded", function() {
    const longitudInput = document.getElementById("longitud");
    const mayusculasInput = document.getElementById("mayusculas");
    const numerosInput = document.getElementById("numeros");
    const especialesInput = document.getElementById("especiales");
    const generarButton = document.getElementById("generar");
    const contrasenaOutput = document.getElementById("contrasena");

    generarButton.addEventListener("click", function() {
        const longitud = parseInt(longitudInput.value);
        const incluirMayusculas = mayusculasInput.checked;
        const incluirNumeros = numerosInput.checked;
        const incluirEspeciales = especialesInput.checked;

        const contrasena = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales);
        contrasenaOutput.textContent = contrasena;
    });

    function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales) {
        const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
        const caracteresNumeros = "0123456789";
        const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?";

        let caracteresPermitidos = caracteresMinusculas;
        if (incluirMayusculas) caracteresPermitidos += caracteresMayusculas;
        if (incluirNumeros) caracteresPermitidos += caracteresNumeros;
        if (incluirEspeciales) caracteresPermitidos += caracteresEspeciales;

        let contrasena = "";
        for (let i = 0; i < longitud; i++) {
            const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
            contrasena += caracteresPermitidos.charAt(randomIndex);
        }

        return contrasena;
    }
});