<?php
    session_start();
    include 'conexion_be.php';
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' 
    and contrasena='$contrasena'");

    if(mysqli_num_rows($validar_login) > 0){
        $_SESSION['usuario'] = $correo;
        // Obtener el nombre completo del usuario desde la base de datos
        $row = mysqli_fetch_assoc($validar_login);
        $_SESSION['nombre_completo'] = $row['nombre_completo']; // Asegúrate de que 'nombre_completo' sea el nombre correcto de la columna en la base de datos
        header("location: pagina41.php");
    }else{
        echo'
            <script>
                alert("Usuario no existe, por favor verifique los datos introducidos");
                window.location = "../pagina37-iniciodesesion.php";
            </script>
        ';
    };
?>
