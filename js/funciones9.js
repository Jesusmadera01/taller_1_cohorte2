function calcularEstadisticas() {
    const calificacionesInput = document.getElementById('calificacionesInput').value;
    const calificacionesArray = calificacionesInput.split(',').map(Number);

    if (calificacionesArray.length === 0) {
        alert('Por favor, ingresa calificaciones válidas.');
        return;
    }

    const sumaCalificaciones = calificacionesArray.reduce((a, b) => a + b, 0);
    const promedio = sumaCalificaciones / calificacionesArray.length;
    const calificacionMaxima = Math.max(...calificacionesArray);
    const calificacionMinima = Math.min(...calificacionesArray);

    const resultado = `
        Promedio: ${promedio.toFixed(1)}
        Calificación más alta: ${calificacionMaxima}
        Calificación más baja: ${calificacionMinima}
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
