<template>
  <header  >
    <!-- Inicio del menú -->

    <nav class="navbar navbar-expand-md navbar-light  "
    style="background:linear-gradient(to right, #1c89ff, #4dffd3)"
       >
      <div class="container-fluid" 
      style="
      background: white;
      --background:linear-gradient(to right,white, white, #4dffd3);
      --border-bottom-left-radius: 0%;
      --border-top-left-radius: 0%;
      --border-bottom-right-radius: 10%;
      --border-top-right-radius: 10%
"        >
        <!-- icono -->
        <a class="navbar-brand" tyle="background:red;" href="#" 
        style="
        background:;
      ">
          <img  class="img-fluid d-inline-block align-text-top" width="380" alt="logo" src="../img/logo_devpro.png" />
        </a>

        <!-- boton del menu -->
        <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu" aria-expanded="false"
        aria-label="toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <!-- elementos del menu colapsable -->

        <div class="collapse navbar-collapse" id="menu"  
        style="
      --  background: #1c89ff;
      -- border-bottom-left-radius: 30%;
       ">
          <ul class="navbar-nav mx-auto" >
            <li class="nav-item">
              <router-link to="/" class="nav-link active" 
             >
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos_servicios" class="nav-link"  >
                Productos y Servicios
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/apoyo_pymes" class="nav-link" >
                Apoyo a PYMES
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactanos" class="nav-link" >
                Contáctanos
              </router-link>
            </li>
            <li class="nav-item" >
              <router-link to="/blog" class="nav-link" >
                Blog
              </router-link>
            </li>
          </ul>

          <!-- enlaces redes sociales -->
          
          <hr class="d-md-none ">
          <hr style="
          border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         7vh;
    width:          1px;
          ">
          <ul class="navbar-nav  flex-row flex-wrap " >    
              <li class="nav-item col-5 col-md-auto p-3">
                <a href="https://www.instagram.com/devpro.consultora/"
                target="_blank"
                style="color: #F56040">
                <b-icon-instagram />
                <small class="d-md-none ms-2">Instagram</small></a> 
              </li>
              <li class="nav-item col-5 col-md-auto p-3">
                <a href="https://www.facebook.com/profile.php?id=100090508094513"
                target="_blank"
                style="color: #405DE6">
                <b-icon-facebook/>
                <small class="d-md-none ms-2">Facebook</small>
                <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
              </a>
              </li>
          </ul>        
        </div>
      </div>
    </nav>

   

    <div class="nav">
      <div class="container">
        <div class="row justify-content-center">
          
         
          <div class="col-md">
           
          </div>
        </div>
      </div>
    </div>
  </header> 
</template>

<style scoped>
/* Header */






/*Navbar*/



</style>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
    };
  },
};
</script>
