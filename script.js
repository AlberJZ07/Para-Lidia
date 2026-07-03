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
#carta{
max-width:90%;
margin:40px auto;
font-size:22px;
line-height:1.8;
color:white;
white-space:pre-wrap;
}
