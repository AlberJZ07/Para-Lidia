// ==============================
// ❤️ PROYECTO PARA LIDIA
// ==============================

// Botón comenzar
const boton = document.getElementById("entrar");

boton.addEventListener("click", () => {
    document.getElementById("carta").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(escribirCarta, 700);
});

// ==============================
// CARTA
// ==============================

const mensaje = `

Mi niña ❤️

Si estás leyendo esto...

Quiero que sepas que cada rincón de esta página fue hecho pensando en ti.

Gracias por aparecer en mi vida.

Gracias por cada risa.

Gracias por cada abrazo.

Y gracias por regalarme tantos recuerdos hermosos.

Te amo muchísimo.

Con amor...

Alber ❤️

`;

let i = 0;
let escribiendo = false;

function escribirCarta() {

    if (escribiendo) return;

    escribiendo = true;

    const carta = document.getElementById("textoCarta");

    carta.innerHTML = "";

    function escribir() {

        if (i < mensaje.length) {

            carta.innerHTML += mensaje.charAt(i);

            i++;

            setTimeout(escribir, 35);

        }

    }

    escribir();

}

// ==============================
// CORAZONES
// ==============================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.className = "corazon";

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize = (18 + Math.random() * 30) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 8000);

}

setInterval(crearCorazon, 450);

// ==============================
// VISOR DE FOTOS
// ==============================

const fotos = document.querySelectorAll(".foto");

const visor = document.getElementById("visor");

const fotoGrande = document.getElementById("fotoGrande");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        visor.style.display = "flex";

        fotoGrande.src = foto.src;

    });

});

function cerrarFoto() {

    visor.style.display = "none";

}

// ==============================

console.log("❤️ Proyecto iniciado correctamente");

// ==============================
// MÚSICA
// ==============================

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

let reproduciendo = false;

btnMusica.addEventListener("click",()=>{

if(reproduciendo){

musica.pause();
btnMusica.innerHTML="🎵";

}else{

musica.play();
btnMusica.innerHTML="⏸️";

}

reproduciendo=!reproduciendo;

});
    
