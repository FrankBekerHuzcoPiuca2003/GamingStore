//Inicio de página Principal

nombre = prompt("INGRESE SU NOMBRE:")
        alert("Bienvenido a GamingStore " + nombre);

//Carrusel

var i = 0
var imagenes = ['imagen/hero1.jpg','imagen/hero2.jpg','imagen/hero3.jpg','imagen/hero4.jpg','imagen/hero5.jpg']
function carrusel(){
i++
if(i > 5) i = 1
document.getElementById("car").setAttribute("src","imagen/hero" + i + ".jpg")
setTimeout("carrusel()", 2500)}



