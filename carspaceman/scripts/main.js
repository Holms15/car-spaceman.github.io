alert("Bienvenido a CarSpaceman, pasele, tenemos helado")

let saborDeHelado = prompt("¿Que sabor de helado te gusta? ¿chocolate, vainilla o fresa?");

if (saborDeHelado === "chocolate") {
    alert("Sí! El chocolate es mi favorito")
} else if (saborDeHelado === "vainilla") {
    alert("Bueno, no es mi favorito pero, me gusta")
} else {
    alert("Jodanse! ese sabor no me gusta")
}

/*
 * Cambia la imagen cuando se hace clic en ella.
 * Si la imagen actual es "images/car-spaceman.jpg", se cambia a "images/businessrobot.jpg".
 * Si la imagen actual es cualquier otra, se cambia a "images/car-spaceman.jpg".
*/
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src")
    if (miSrc === "images/car-spaceman.jpg") {
      miImage.setAttribute("src","images/businessrobot.jpg");
    } else {
        miImage.setAttribute("src", "images/car-spaceman.jpg")
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenid@ a CarSpaceman, ' + miNombre;
    }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenid@ a CarSpaceman, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}