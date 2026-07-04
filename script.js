// ==============================
// ❤️ PROYECTO PARA LIDIA V1.0
// ==============================

// Botón comenzar
const boton = document.getElementById("entrar");

boton.addEventListener("click", () => {

    document.getElementById("carta").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(escribirCarta,700);

});

// ==============================
// CARTA
// ==============================

const mensaje = `

Mi niña ❤️

Si hoy estás viendo esta página...

Quiero que sepas que cada parte de este lugar fue hecha pensando en ti.

No es solo una página.

Es un pequeño rincón donde quiero guardar nuestra historia.

Gracias por cada abrazo.

Gracias por cada sonrisa.

Gracias por llegar a mi vida.

Espero seguir creando muchísimos recuerdos contigo.

Te amo muchísimo.

Con amor...

Alber ❤️

`;

let i = 0;

let escribiendo = false;

function escribirCarta(){

if(escribiendo) return;

escribiendo=true;

const carta=document.getElementById("textoCarta");

carta.innerHTML="";

function escribir(){

if(i<mensaje.length){

carta.innerHTML+=mensaje.charAt(i);

i++;

setTimeout(escribir,35);

}

}

escribir();

}

// ==============================
// CORAZONES
// ==============================

function crearCorazon(){

const corazon=document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=(18+Math.random()*30)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},8000);

}

setInterval(crearCorazon,450);

// ==============================
// MENSAJE FINAL
// ==============================

console.log("❤️ Proyecto Para Lidia iniciado correctamente.");
