
const estudiantes = {};


function agregarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const identificacion = document.getElementById("identificacion").value;

  
    estudiantes[identificacion] = {
        nombre: nombre,
        edad: edad,
        identificacion: identificacion
    };

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("identificacion").value = "";

    alert("Estudiante agregado correctamente.");
}


function buscarEstudiante() {
    const buscarIdentificacion = document.getElementById("buscarIdentificacion").value;


    if (estudiantes.hasOwnProperty(buscarIdentificacion)) {
        const estudiante = estudiantes[buscarIdentificacion]; 
        const mensaje = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.identificacion}`;
        alert(mensaje);
    } else {
        alert("Estudiante no encontrado.");
    }
}
