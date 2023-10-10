function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(document.getElementById("capital-inicial").value);
    const tasaInteresAnual = parseFloat(document.getElementById("tasa-interes").value);
    const periodoInversion = parseInt(document.getElementById("periodo-inversion").value);

    const tasaInteresDecimal = tasaInteresAnual / 100;
    const montoFinal = capitalInicial * Math.pow(1 + tasaInteresDecimal, periodoInversion);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El monto final es de $${montoFinal.toFixed(2)}`;
}

