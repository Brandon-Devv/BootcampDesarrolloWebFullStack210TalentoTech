// Selección de elementos para la verificación de números pares
const btnPar = document.getElementById("btnPar");
const entradaPar = document.getElementById("entradaPar");
const salidaPar = document.getElementById("salidaPar");

// Añadimos un evento al botón para números pares
btnPar.addEventListener("click", () => {
    const valorEntrada = entradaPar.value.trim();
    verificarParidad(valorEntrada);
});

// Función para verificar si el número es par
function verificarParidad(valor) {
    const numero = Number(valor);
    if (valor === "") {
        salidaPar.textContent = "Por favor, introduce un número.";
        salidaPar.style.color = "red";
    } else if (isNaN(numero)) {
        salidaPar.textContent = "Entrada no válida. Solo se permiten números.";
        salidaPar.style.color = "red";
    } else if (numero % 2 === 0) {
        salidaPar.textContent = `${numero} es un número par.`;
        salidaPar.style.color = "green";
    } else {
        salidaPar.textContent = `${numero} es un número impar.`;
        salidaPar.style.color = "orange";
    }
}

// Selección de elementos para la verificación de números primos
const entradaPrimo = document.getElementById("numero");
const btnPrimo = document.getElementById("btn");
const salidaPrimo = document.getElementById("resultado");

let numero = 0;

// Añadimos un evento al botón para números primos
entradaPrimo.addEventListener("input", (evento) => {
    numero = Number(evento.target.value);
});

function numeroPrimo(n) {
    if (n <= 1) {
        return false; 
    }
    
    for (let i = 2; i < n; i++) {  
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

// Añadimos el evento para el botón de números primos
btnPrimo.addEventListener("click", () => {
    const resultado = numeroPrimo(numero);
    salidaPrimo.innerHTML = "<h2>Resultados</h2>";

    let hijo = document.createElement("h3");
    if (resultado) {
        hijo.innerHTML = `El ${numero} es primo.`;
    } else {
        hijo.innerHTML = `El ${numero} no es primo.`;
    }

    salidaPrimo.appendChild(hijo);
});