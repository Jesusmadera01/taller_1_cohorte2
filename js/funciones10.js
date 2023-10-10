function calcularIMC() {
    const pesoInput = document.getElementById('pesoInput').value;
    const alturaInput = document.getElementById('alturaInput').value;

    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingresa valores válidos para peso y altura.');
        return;
    }

    const imc = calcularIMCValor(peso, altura);
    const resultado = obtenerMensajeIMC(imc);

    document.getElementById('resultado').innerHTML = resultado;
}

function calcularIMCValor(peso, altura) {
    return peso / (altura * altura);
}

function obtenerMensajeIMC(imc) {
    if (imc < 18.5) {
        return `Tu IMC es ${imc.toFixed(2)}, estás en el rango de peso bajo.`;
    } else if (imc < 24.9) {
        return `Tu IMC es ${imc.toFixed(2)}, estás en el rango de peso normal.`;
    } else if (imc < 29.9) {
        return `Tu IMC es ${imc.toFixed(2)}, estás en el rango de sobrepeso.`;
    } else {
        return `Tu IMC es ${imc.toFixed(2)}, estás en el rango de obesidad.`;
    }
}

