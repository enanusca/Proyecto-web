var nombre;
var nombreSpan = document.getElementById('nombre');
var boton = document.getElementById('cambiarNombre');

boton.addEventListener('click', function () {
        nombre = prompt("¿Cual quieres que sea el nuevo nombre?");
        if(nombre=="") {
            alert("falta nombre")
        }
        if(nombre==null) {
            alert("falta nombre")
        }
    
        nombreSpan.firstChild.nodeValue = nombre;
        console.log(nombre);

});











