let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ANCHO_GATO = 70;
const ALTO_GATO = 70;
const ANCHO_COMIDA = 40;
const ALTO_COMIDA = 40;
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 10;
let intervaloTiempo;

let imagenGato = new Image();
imagenGato.src = "gato.png";
let imagenComida = new Image();
imagenComida.src = "comida.png";

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    // Comida esquina inferior derecha
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    graficarGato();
    graficarComida();

    intervaloTiempo = setInterval(restarTiempo,1000);
}

function graficarGato(){
    ctx.drawImage(imagenGato, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida(){
    ctx.drawImage(imagenComida, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();

}

function moverDerecha(){
    gatoX= gatoX +10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();

}

function moverAbajo(){
    gatoY=gatoY +10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){

    if(
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ){

        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);

        if(puntos == 6){
        clearInterval(intervaloTiempo);
        alert("GANASTE!!!");
        return;
}
        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if(tiempo == 0){
        clearInterval(intervaloTiempo);
        alert("Game Over");
    }
}

function reiniciarJuego(){

    clearInterval(intervaloTiempo);

    puntos = 0;
    tiempo = 10;

    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);

    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

    limpiarCanva();
    graficarGato();
    graficarComida();

    intervaloTiempo = setInterval(restarTiempo, 1000);
}
