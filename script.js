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
counterSection.classList.remove("hidden");

actualizarNovios();
setInterval(actualizarNovios, 1000);

    if (music) {
        music.play().catch(() => {});
    }
}
function actualizarNovios() {

    const inicioNovios = new Date("2026-07-10T11:01:00");

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
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});
