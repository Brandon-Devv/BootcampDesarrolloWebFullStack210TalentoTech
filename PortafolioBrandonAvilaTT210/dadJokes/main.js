const btnChiste = document.getElementById("btnChiste");
const chiste = document.getElementById("chiste");

btnChiste.addEventListener("click", generarChiste);

async function generarChiste() {
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });

        const data = await res.json();
        chiste.innerHTML = data.joke;
    } catch (error) {
        chiste.innerHTML = "Oops, algo salió mal. Intenta nuevamente.";
        console.error(error);
    }
}