let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ANCHO_GATO = 50;
const ALTO_GATO = 70;

let gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
let gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

function iniciar(){
    graficarGato();
}

function graficarGato(){
    ctx.fillStyle = "orange";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}