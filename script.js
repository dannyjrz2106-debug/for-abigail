function comenzar() {
    const hero = document.getElementById("hero");
    const counterSection = document.getElementById("counterSection");
    const gallery = document.getElementById("gallery");
    const letter = document.getElementById("letter");
    const proposal = document.getElementById("proposal");
    const music = document.getElementById("bgMusic");

    hero.style.display = "none";

    counterSection.classList.remove("hidden");
    gallery.classList.remove("hidden");
    letter.classList.remove("hidden");
    proposal.classList.remove("hidden");

    if (music) {
        music.play().catch(() => {});
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);
}

function actualizarContador() {
    const inicio = new Date("2025-11-29T00:00:00");
    const ahora = new Date();

    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("counter").innerHTML =
        `<h2>${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos ❤️</h2>`;
}

document.getElementById("yesBtn").addEventListener("click", () => {
    document.body.innerHTML = `
    <section style="
        min-height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        background:linear-gradient(180deg,#180028,#2e0d52,#12001f);
        color:white;
        padding:30px;
        font-family:Arial,sans-serif;
    ">
        <h1 style="font-size:3em;">💙 Gracias por decir que sí 💙</h1>

        <p style="max-width:700px;font-size:1.3em;line-height:1.8;margin-top:25px;">
        Hoy comienza una nueva historia para nosotros.
        Prometo seguir haciéndote reír, cuidarte, apoyarte y construir
        muchísimos recuerdos a tu lado.
        </p>

        <h2 style="margin-top:35px;">
        Te amo muchísimo, Abigail. ❤️
        </h2>
    </section>
    `;
});
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});
