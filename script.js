
// Pantalla de carga
setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".contenido").classList.remove("oculto");
    document.querySelector(".contenido").style.opacity = "1";
}, 3000);

// Corazones flotando
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 8000);
}

setInterval(crearCorazon, 500);

// Carta
const mensaje = `Mi niña ❤️

Si hoy estás viendo esta página...

Quiero que sepas que no fue hecha por obligación.

La hice porque eres una persona muy especial para mí.

Cada foto...
Cada video...
Cada recuerdo...

Es una parte de nuestra historia.

Gracias por aparecer en mi vida.

Te amo muchísimo.

Con amor...

Alber ❤️`;

let i = 0;

function escribirCarta() {

    if (i < mensaje.length) {

        document.getElementById("carta").innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribirCarta, 40);

    }

}

document.getElementById("entrar").onclick = function () {

    this.style.display = "none";

    document.getElementById("carta").innerHTML = "";

    i = 0;

    escribirCarta();

};
