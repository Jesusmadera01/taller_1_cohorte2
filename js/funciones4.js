document.addEventListener("DOMContentLoaded", function () {
    const numeroInput = document.getElementById("numero");
    const filasInput = document.getElementById("filas");
    const tabla = document.getElementById("tabla");

    function mostrarTabla() {
        const numero = parseInt(numeroInput.value);
        const filas = parseInt(filasInput.value);

        if (isNaN(numero) || isNaN(filas)) {
            alert("Por favor, ingresa un número válido y el número de filas.");
            return;
        }

        let tablaHTML = "<tbody>";

        for (let i = 1; i <= filas; i++) {
            const resultado = numero * i;
            tablaHTML += `<tr><td>${numero}</td><td>x</td><td>${i}</td><td>=</td><td>${resultado}</td></tr>`;
        }

        tablaHTML += "</tbody>";
        tabla.innerHTML = tablaHTML;
    }

    document.querySelector("button").addEventListener("click", mostrarTabla);
});
