document.getElementById("btnFiboLimite").addEventListener("click", () => {
    const limite = parseInt(document.getElementById("fiboLimite").value);
    const resultado = generarFibonacciHasta(limite);
    document.getElementById("resultadoFiboLimite").innerHTML = resultado.join(', ');
});

document.getElementById("btnFiboPersonalizado").addEventListener("click", () => {
    const elementos = parseInt(document.getElementById("numElementos").value);
    const inicio1 = parseInt(document.getElementById("inicio1").value);
    const inicio2 = parseInt(document.getElementById("inicio2").value);
    const resultado = generarFibonacciPersonalizado(elementos, inicio1, inicio2);
    document.getElementById("resultadoFiboPersonalizado").innerHTML = resultado.join(', ');
});

document.getElementById("btnFiboElementos").addEventListener("click", () => {
    const elementos = parseInt(document.getElementById("fiboElementos").value);
    const resultado = generarFibonacciElementos(elementos);
    document.getElementById("resultadoFiboElementos").innerHTML = resultado.join(', ');
});

function generarFibonacciHasta(n) {
    let fibo = [0, 1];
    for (let i = 2; ; i++) {
        let siguiente = fibo[i - 1] + fibo[i - 2];
        if (siguiente > n) break;
        fibo.push(siguiente);
    }
    return fibo;
}

function generarFibonacciPersonalizado(n, inicio1, inicio2) {
    let fibo = [inicio1, inicio2];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

function generarFibonacciElementos(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo.slice(0, n);
}