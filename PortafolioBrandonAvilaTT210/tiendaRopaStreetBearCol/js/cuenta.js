document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento del SVG
    var userIcon = document.getElementById("userIcon");

    // Agrega un evento de clic al icono de usuario
    userIcon.addEventListener("click", function() {
        // Realiza una petición al servidor para verificar la sesión
        fetch('verificar_sesion.php')
            .then(function(response) {
                // Redirige según la respuesta del servidor
                if (response.ok) {
                    window.location.href = 'php/pagina41.php';
                } else {
                    window.location.href = 'pagina37-iniciodesesion.php';
                }
            })
            .catch(function(error) {
                console.log('Hubo un problema con la solicitud fetch:', error.message);
            });
    });
});