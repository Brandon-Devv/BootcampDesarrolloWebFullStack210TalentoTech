<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
    VALUES('$nombre_completo','$correo','$usuario','$contrasena')";
    
    //VERIFICAR REDUNDANCIA DE DATOS //
    //CORREO//
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo ='$correo'");
    if(mysqli_num_rows($verificar_correo) > 0){
        echo'
            <script>
                alert("Este correo ya está registrado, intenta con otro diferente");
                window.location = "../pagina37-iniciodesesion.php";
            </script>
        ';
        exit();
    }
    //USUARIO//
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario ='$usuario'");
    if(mysqli_num_rows($verificar_usuario) > 0){
        echo'
            <script>
                alert("Este Usuario ya está registrado, intenta con otro diferente");
                window.location = "../pagina37-iniciodesesion.php";
            </script>
        ';
        exit();
    }
    $ejecutar = mysqli_query($conexion, $query);
    if($ejecutar){
        echo'
            <script>
                alert("Usuario Almacenado Exitosamente");
                window.location = "../pagina37-iniciodesesion.php";
            </script>
        ';
    }else{
        echo'
            <script>
                alert("Inténtalo de nuevo, Usuario no almacenado");
                window.location = "../pagina37-iniciodesesion.php";
            </script>
        ';
    };
?>