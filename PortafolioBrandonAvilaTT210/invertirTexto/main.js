function invertirTexto() {
    // Obtener el valor ingresado
    let texto = document.getElementById("textoUsuario").value;
    
    // Invertir el texto
    let textoInvertido = texto.split("").reverse().join("");
    
    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = "Texto invertido: " + textoInvertido;
}