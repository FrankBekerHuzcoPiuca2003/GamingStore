//reloj

const reloj = setInterval(miReloj, 1000)

function miReloj(){
    const fechaHora = new Date();
    document.getElementById("hora").innerHTML = fechaHora.toLocaleTimeString()
}