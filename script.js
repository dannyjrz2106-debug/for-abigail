// Iniciar música automáticamente cuando sea posible
const music = document.getElementById("music");

document.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {});
    }
}, { once: true });

function comenzar() {
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");

    if (inicio) inicio.style.display = "none";
    if (contenido) contenido.style.display = "block";

    if (music) {
        music.play().catch(() => {});
    }

    contenido.scrollIntoView({
        behavior: "smooth"
    });
}

function responder(respuesta) {
    const resultado = document.getElementById("resultado");

    if (respuesta === "si") {
        resultado.innerHTML = `
            <h2 style="color:#7CFFB2;">
                💙 Sabía que dirías que sí 💙
            </h2>

            <p style="font-size:22px;line-height:1.8;">
                Hoy comienza un nuevo capítulo para nosotros.<br><br>

                Prometo cuidar de tu corazón, apoyarte en tus sueños,
                hacerte reír cuando lo necesites y estar contigo
                en los días buenos y en los difíciles.<br><br>

                Gracias por regalarme la oportunidad de compartir
                mi vida contigo.<br><br>

                <strong>Te amo muchísimo, Abigail. 💙</strong>
            </p>
        `;
    } else {
        resultado.innerHTML = `
            <h2>😢</h2>
            <p>
                Bueno... entonces tendré que seguir conquistándote
                hasta que cambies de opinión. ❤️
            </p>
        `;
    }

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}
