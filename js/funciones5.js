const preguntasRespuestas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuesta: "Gabriel García Márquez" }
];

let puntuacion = 0;
let preguntaActual = 0;


function mostrarPreguntaActual() {
    const pregunta = preguntasRespuestas[preguntaActual];
    document.getElementById("pregunta").textContent = pregunta.pregunta;
}


function comprobarRespuesta() {
    const respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
    const pregunta = preguntasRespuestas[preguntaActual];

    if (respuestaUsuario === pregunta.respuesta.toLowerCase()) {
        puntuacion++;
    }

    preguntaActual++;

    if (preguntaActual < preguntasRespuestas.length) {
        mostrarPreguntaActual();
        document.getElementById("respuesta").value = "";
    } else {
        
        mostrarPuntuacionFinal();
    }
}


function mostrarPuntuacionFinal() {
    document.getElementById("pregunta-container").style.display = "none";
    document.getElementById("resultado").textContent = `Puntuación final: ${puntuacion} de ${preguntasRespuestas.length} respuestas correctas`;
}

window.onload = function() {
    mostrarPreguntaActual();
    document.getElementById("enviar").addEventListener("click", comprobarRespuesta);
};


function comprobarRespuesta() {
    const respuestaUsuario = quitarAcentos(document.getElementById("respuesta").value.trim().toLowerCase());
    const pregunta = preguntasRespuestas[preguntaActual];

    if (quitarAcentos(respuestaUsuario) === quitarAcentos(pregunta.respuesta.toLowerCase())) {
        puntuacion++;
    }

    preguntaActual++;

    if (preguntaActual < preguntasRespuestas.length) {
        mostrarPreguntaActual();
        document.getElementById("respuesta").value = "";
    } else {
        
        mostrarPuntuacionFinal();
    }
}

function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}