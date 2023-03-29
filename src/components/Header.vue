<template>
  <header>

    <!-- topbar -->
    <nav class="navbar navbar-expand-lg navbar-light topbar" id="menu_topbar">
      <div class="container-fluid">
        <div class="mx-auto">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">
                <b-icon-Clock /> 
                Horario de atención: Lun - Vie: 9:00 - 18:00 hrs.
              </a>
              <a class="nav-item nav-link" href="#" >
                <b-icon-mailbox2 />
                contacto@consultoradevpro.cl
              </a>
            </div>
          </div>
        </div>

        <div class="mx-auto">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

              <a class=" nav-item nav-link  topbar-social" href="https://www.instagram.com/devpro.consultora/" target="_blank"
                ><b-icon-instagram /> Instagram</a>
              <a class="topbar-social nav-item nav-link " href="https://www.facebook.com/profile.php?id=100090508094513" target="_blank"
                ><b-icon-facebook /> Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Header: topbar -->








    <!-- Inicio del menú -->

    <nav class="navbar navbar-expand-md navbar-light  "
      style="--background:linear-gradient(to right, #1c89ff, #4dffd3);box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);">

      <div class="row flex-nowrap align-items-center justify-content-between" style=" 
            background: white;
            --background:linear-gradient(to right,white, white, #4dffd3);
            --border-bottom-left-radius: 0%;
            --border-top-left-radius: 0%;
            --border-bottom-right-radius: 10%;
            --border-top-right-radius: 10%
      ">

        <!-- boton del menu -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
          aria-expanded="false" aria-label="toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- icono -->
        <a class="navbar-brand">
          <img class="img-fluid d-inline-block align-text-top" style="display: block;" width="230" alt="logo"
            src="../img/logo_devpro.png" />
        </a>



        <!-- elementos del menu colapsable -->

        <div class="collapse navbar-collapse " id="menu" style="
            --background: #1c89ff;
            --border-bottom-left-radius: 30%;
             ">
          <hr class="d-md-none d-lg-block ">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link active"
                style="color: linear-gradient(to right, #1c89ff, #4dffd3);font-size: 1rem;font-family: sourcesanspro;">
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productos_servicios" class="nav-link" style="color: #2b2b31;font-family: sourcesanspro;">
                Productos y Servicios
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/apoyo_pymes" class="nav-link" style="color: #2b2b31;font-family: sourcesanspro;">
                Apoyo a PYMES
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactanos" class="nav-link" style="color: #2b2b31;font-family: sourcesanspro;">
                Contáctanos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link" style="color: #2b2b31;font-family: sourcesanspro;">
                Blog
              </router-link>
            </li>
          </ul>

          <!-- enlaces redes sociales -->

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
/*Header*/

/*Header: topbar*/
.topbar{
  background: #0094f0 ;
  padding: 0.030%;
  font-size: .9375rem;
}

.topbar > div > div > div > div > a{
  font-family: sourcesanspro;
  color: white;
  margin-right: 30px;
  --border-style: solid;
}

.topbar > div > div > div > div .topbar-social{
  margin-right: 10px;
}


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
