let libros = [];

function agregarLibro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const año = document.getElementById("año").value;

    
    if (titulo && autor && año) {
        
        const libro = {
            titulo: titulo,
            autor: autor,
            año: año
        };

       
        libros.push(libro);

       
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("año").value = "";

        alert("Libro agregado correctamente.");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}


function buscarPorTitulo() {
    const busquedaTitulo = document.getElementById("busquedaTitulo").value;

   
    const resultado = libros.find(libro => libro.titulo === busquedaTitulo);

    
    if (resultado) {
        document.getElementById("resultado").innerHTML = `Título: ${resultado.titulo}, Autor: ${resultado.autor}, Año de Publicación: ${resultado.año}`;
    } else {
        document.getElementById("resultado").innerHTML = "Libro no encontrado.";
    }
}

function buscarPorAutor() {
    const busquedaAutor = document.getElementById("busquedaAutor").value;


    const resultados = libros.filter(libro => libro.autor === busquedaAutor);

    if (resultados.length > 0) {
        let resultadoHTML = "";
        resultados.forEach(libro => {
            resultadoHTML += `Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.año}<br>`;
        });
        document.getElementById("resultado").innerHTML = resultadoHTML;
    } else {
        document.getElementById("resultado").innerHTML = "Libros no encontrados.";
    }
}
