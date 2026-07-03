document.getElementById("entrar").addEventListener("click", function () {

    document.body.style.transition = "1s";
    document.body.style.background = "linear-gradient(135deg,#ff4d6d,#ff758f)";

    setTimeout(() => {
        document.querySelector(".loader").innerHTML = `
            <h1>Bienvenida mi amor ❤️</h1>

            <h2 style="margin-top:20px;">Lidia Ayne Garcia Ruiz</h2>

            <p style="max-width:700px;margin:30px auto;font-size:22px;line-height:1.8;">
            Este pequeño lugar fue creado únicamente para ti.
            Aquí guardaré nuestros recuerdos, nuestras risas y cada momento que hemos vivido juntos.
            Espero que cada vez que entres aquí recuerdes cuánto te amo. ❤️
            </p>
        `;
    },1000);

});
