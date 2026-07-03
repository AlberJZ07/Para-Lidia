setTimeout(()=>{

document.querySelector(".loader").style.display="none";

document.querySelector(".contenido").classList.remove("oculto");

document.querySelector(".contenido").style.opacity="1";

},3000);

document.getElementById("entrar").onclick=function(){

alert("Bienvenida mi amor ❤️");

}
function crearCorazon(){

const corazon=document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},8000);

}

setInterval(crearCorazon,500);
const mensaje=`Mi niña ❤️

Si estás leyendo esto es porque quiero recordarte lo importante que eres para mí.

Gracias por cada momento, por cada sonrisa y por acompañarme durante todo este tiempo.

Prometo seguir creando muchos más recuerdos contigo.

Te amo muchísimo. ❤️`;

let i=0;

function escribirCarta(){

if(i<mensaje.length){
document.getElementById("carta").innerHTML+=mensaje.charAt(i);
i++;
setTimeout(escribirCarta,45);
}

}

document.getElementById("entrar").addEventListener("click",()=>{

document.getElementById("carta").innerHTML="";
i=0;

setTimeout(escribirCarta,700);

});
