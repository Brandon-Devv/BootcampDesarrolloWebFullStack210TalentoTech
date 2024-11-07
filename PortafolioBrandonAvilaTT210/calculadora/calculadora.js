const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector(".pantalla");

pantalla.textContent = "0";

botones.forEach(boton => {
    boton.addEventListener("click", () => manejarEntrada(boton.textContent));
});

function manejarEntrada(input) {
    switch (input) {
        case "AC":
            limpiarPantalla();
            break;
        case "DEL":
            borrarUltimo();
            break;
        case "=":
            calcularResultado();
            break;
        case "%":
            calcularPorcentaje();
            break;
        default:
            agregarCaracter(input);
            break;
    }
}

function limpiarPantalla() {
    pantalla.textContent = "0";
}

function borrarUltimo() {
    pantalla.textContent = pantalla.textContent.length === 1
        ? "0"
        : pantalla.textContent.slice(0, -1);
}

function calcularResultado() {
    try {
        const expresion = pantalla.textContent.replace(/×/g, "*"); // Reemplaza "×" por "*"
        pantalla.textContent = evaluarExpresion(expresion);
    } catch (error) {
        pantalla.textContent = "Error";
    }
}

function calcularPorcentaje() {
    try {
        const expresion = pantalla.textContent.replace(/×/g, "*");
        pantalla.textContent = evaluarExpresion(expresion) * 0.01;
    } catch (error) {
        pantalla.textContent = "Error";
    }
}

function agregarCaracter(caracter) {
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        pantalla.textContent = caracter;
    } else {
        pantalla.textContent += caracter;
    }
}

function evaluarExpresion(expresion) {
    const operadores = /[-+*/]/;
    const tokens = expresion.split(operadores);
    const operadoresArray = expresion.split(/[0-9]+/).filter(op => op); // Obtiene operadores

    // Convirtiendo los números a flotantes
    const numeros = tokens.map(token => parseFloat(token));
    
    // Evaluación considerando la precedencia de los operadores
    let resultado = numeros[0];
    
    for (let i = 0; i < operadoresArray.length; i++) {
        const operador = operadoresArray[i];

        switch (operador) {
            case "+":
                resultado += numeros[i + 1];
                break;
            case "-":
                resultado -= numeros[i + 1];
                break;
            case "*":
                resultado *= numeros[i + 1];
                break;
            case "/":
                if (numeros[i + 1] === 0) throw new Error("División por cero");
                resultado /= numeros[i + 1];
                break;
        }
    }

    return resultado;
}