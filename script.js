function comenzar() {
    const hero = document.getElementById("hero");
    const counterSection = document.getElementById("counterSection");
    const gallery = document.getElementById("gallery");
    const letter = document.getElementById("letter");
    const proposal = document.getElementById("proposal");
    const music = document.getElementById("bgMusic");

    hero.style.display = "none";

    gallery.classList.remove("hidden");
    letter.classList.remove("hidden");
    proposal.classList.remove("hidden");

    if (music) {
        music.play().catch(() => {});
    }

    
}


}

document.getElementById("yesBtn").addEventListener("click", () => {

    document.getElementById("proposal").style.display = "none";

    const counterSection = document.getElementById("counterSection");

    counterSection.classList.remove("hidden");

    counterSection.scrollIntoView({
        behavior: "smooth"
    });

    const inicioNovios = new Date();

    function actualizarNovios() {

        const ahora = new Date();

        const diferencia = ahora - inicioNovios;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        document.getElementById("counter").innerHTML = `
            <h1 style="font-size:3em;">
                ${dias} días
            </h1>

            <h2>
                ${horas} horas
                ${minutos} minutos
                ${segundos} segundos ❤️
            </h2>
        `;
    }

    actualizarNovios();

    setInterval(actualizarNovios, 1000);

});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});
