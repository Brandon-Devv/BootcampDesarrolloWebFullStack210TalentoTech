<?php
  session_start();

  // Verificar si el usuario está autenticado
  if(!isset($_SESSION['usuario'])){
    echo'
      <script>
        alert("Debes iniciar sesion para ingresar a esta página");
        window.location = "../pagina37-iniciodesesion.php";
      </script>
    ';
    session_destroy();
    die();
  }

  if(isset($_SESSION['usuario']) && isset($_SESSION['nombre_completo'])){
      $nombre_completo = $_SESSION['nombre_completo'];
  } else {
      // Si el usuario no está autenticado, redirigir al inicio de sesión
      header("location: ../pagina37-iniciodesesion.php");
      exit; // Terminar la ejecución del script después de la redirección
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Street Bear Col</title>
    <link rel="icon" type="image/png" href="imagenes/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Krub:wght@300;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../stilos/normalize.css">
    <link rel="stylesheet" href="../estilos/estilos.css">
</head>
<body> 
    <!--Aqui empieza el cuerpo de la pagina -->
    <!--Este archivo fue elaborado por Brandon Avila 9/08/2023  8:00 am -->
    <header>
      <section class="menu-lateral">
        <a href="../pagina15-principalmujer.html" class="opcion-lateral"><h2>MUJER</h2></a>
        <a href="../pagina1-principalhombre.html" class="opcion-lateral"><h2 >HOMBRE</h2></a>
      </section>
      <section class="contenedor-titulo">
        <h1 class="title"><a href="../index.html"> STREET BEAR COL</a></h1>
      </section>
      <section class="opciones">
        <div class="login">
          <a href="../pagina37-iniciodesesion.php"><p class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009eff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
          </p></a>
      </div>
      <div class="cuenta">
        <a href="pagina41.php"><p class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009eff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg></a>
        </p>
      </div>

      <div class="carrito">
        <a onclick="openCartModal()" ><p class="icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009eff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg></p></a>
      </div>
      
      <div class="logo">
        <img src="../imagenes/logo1.png">
      </div>
      </section>
      <script src="./js/carrito.js"></script>
    </header>
    
    <section class="separador"></section>
    <nav class="navegacion-principal contenedor">
            <a href="../pagina29-marcas.html">Marcas</a>
            <a href="../pagina30-quienessomos.html">Quienes Somos</a>
            <a href="../pagina31-contacto.html">Contacto</a> 
            <a href="../pagina2-productosh.html">Todos los Productos</a>
            <a href="../pagina32-galeria.html">Galería</a>
    </nav>
    <main class="menu-cuenta">
    <section class="separador-nav"></section>
    <h1>BIENVENIDO A TU CUENTA <p><?php echo $nombre_completo; ?></p></h1>
    <section class="categorias-cuenta">
        <a href="../pagina15-principalmujer.html" class="contenedor-categorias1-cuenta">
            <h2>IR A MODA <br><span>MUJER</span></h2>
        </a>
        <a href="../pagina1-principalhombre.html" class="contenedor-categorias2-cuenta">
            <h2>IR A MODA <br><span>HOMBRE</span></h2>
        </a>
        <a href="cerrar_sesion.php" class="contenedor-categorias3-cuenta">
            <h2>CERRAR <br><span>SESIÓN</span></h2>
        </a>
    </section>

</main>
<div id="cart-modal" class="cart-modal">
      <div class="cart-content">
          <h2>Carrito de Compras</h2>
          <ol id="cart-items">
              <!-- Los elementos del carrito se agregarán aquí dinámicamente -->
          </ol>
          <p>Total: <span id="cart-total">$0.00</span></p>

          <div class="btn-modal">
              <button class="pay-btn" onclick="checkout()">Pagar</button>
              <button class="close-btn" onclick="closeCartModal()">Cerrar</button>
          </div>
      </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script>
  <script src="../js/carrito.js"></script>
  <footer>
    <section class="bf">
        
      <div class="footer-logo">
        <img src="../imagenes/logo1.png">
      </div>
  
  
      <div class="footer-redes">
        <div class="footer-titulo-redes">
          <h3 > REDES SOCIALES</h3>
        </div>
        <div class="footer-iconos">
          <a href="https://www.instagram.com/streetbear_col/"><p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg></p></a>
        <a href="https://www.facebook.com"><p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg></p></a>
        </div>
      </div>
  
        <div class="footer-politicas">
          <a href="../pagina33-cookies.html"><h2 >COOKIES</h2></a>
          <a href="../pagina34-politicasdeprivacidad.html"><h2 >POLITICAS DE PRIVACIDAD</h2></a>
          <a href="../pagina35-politicasdeenvio.html"><h2 >POLITICAS DE ENVIO</h2></a>
          <a href="../pagina36-terminosdelservicio.html"><h2 >TERMINOS DEL SERVICIO</h2></a>
        </div>
  
        <div class="footer-nav">
          <a href="../pagina39-olvidosucontraseña.html"><p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-left" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
          </svg></p></a>
          <a href="../index.html"><p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg></p></a>
        </div>
        </div>
  
    </section>
    <section class="separador"></section>
    <section class="derechos">
      <div class="autor">
        <h4>© 2023 STREET BEAR COL. Tecnología de Brandon Avila Freelancer</h4>
      </div>
      <div class="medios-pago">
        <div>
          <svg class="section-footer-payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
        </div>
        <div>
          <svg class="section-footer-payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
        </div>
        <div>
          <svg class="section-footer-payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
        </div>
      </div>
    </section>
  </footer>
</html>  