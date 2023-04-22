<template>
  <header>

    <!--Header: topbar -->
    <nav class="navbar navbar-expand-lg navbar-light topbar" id="menu_topbar">
      <div class="container-fluid">
        <div class="mx-auto">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">
                <i class="bi bi-clock-fill"></i>
                Horario de atención: Lun - Vie: 9:00 - 18:00 hrs.
              </a>
              <a class="nav-item nav-link" href="#" >
                <i class="bi bi-envelope-at-fill"></i>
                contacto@consultoradevpro.cl
              </a>
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link  topbar-social instagram" href="https://www.instagram.com/devpro.consultora/" target="_blank">
                <i class="bi bi-instagram"></i>
                Instagram
              </a>
              <a class="topbar-social nav-item nav-link facebook" href="https://www.facebook.com/profile.php?id=100090508094513" target="_blank">
                <i class="bi bi-facebook"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Header: topbar -->

    <!-- Header: navbar --> 
    <nav class="navbar navbar-expand-md navbar-light navbar-n">
      <div class="container-fluid align-items-center" > 
        <!-- logo -->
        <router-link to="/" class="navbar-brand logo" style="" >
                <img style="" class="img-fluid d-inline-block align-text-top"  width="230" alt="logo" src="../img/logo_devpro.png" />
        </router-link>
        <!-- fin logo -->
        <!-- boton del menu -->
        <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu" aria-expanded="false"
        aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>     
        <!-- fin boton del menu -->
        <!-- elementos del menu colapsable -->
        <div class="collapse navbar-collapse " id="menu">
          <hr class="d-md-none d-lg-block ">
          <!-- enlaces redes sociales -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/inicio" class="nav-link navbar-element" >
                Inicio
              </router-link>
            </li>    
            <li class="nav-item">
              <router-link  to="/sobre_nosotros" class="nav-link navbar-element">
                Sobre nosotros
              </router-link>
            </li>
            <li class="nav-item ">
              <router-link to="/servicios" class="nav-link navbar-element" >
               Servicios
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/apoyo_pymes" class="nav-link navbar-element" >
                Apoyo a PYMES 
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactanos" class="nav-link navbar-element" >
                Contáctanos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link " >
                Blog
              </router-link>
            </li>
          </ul>
          <!-- fin enlaces redes sociales -->
         </div> 
        </div>
    </nav>
</header>

</template>

<style scoped>
/*Header    border-style: solid;
*/







/*Header: topbar*/
.topbar{
  background: #4788ff ;
  background: linear-gradient(72deg, rgba(0,127,255,1) 14%, rgba(0,120,241,1) 55%, rgba(0,89,255,1) 75%, rgba(0,212,255,1) 100%); 
  font-size: .8rem;
  
}

.topbar > div > div > div > div > a{
  font-family: sourcesanspro;
  color: white;
  margin-right: 30px;
}

.topbar > div > div > div > div .instagram:before,
.topbar > div > div > div > div .instagram:after{
  transition: 0.5s;
}

.topbar > div > div > div > div .instagram{
background: rgb(254, 254, 255); 
font-size: 0.9rem;  
color: #cc2366;
border-radius: 30px;
font-size: .8rem;

}

.topbar > div > div > div > div .instagram:hover{
  background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
font-size: .8rem;
color: white;
border-radius: 30px;
}

.topbar > div > div > div > div .facebook{
background: rgb(254, 254, 255); 
font-size: .8rem;
color: #3C5A99;
border-radius: 30px;
}
  
.topbar > div > div > div > div .facebook:hover{
  background-color: #3C5A99;
    background: -moz-linear-gradient(top, #3C5A99, #3C5A99);
    background: -ms-linear-gradient(top, #3C5A99, #3C5A99);
    background: -webkit-linear-gradient(top, #3C5A99, #3C5A99);
    font-size: .8rem;
color: white;
border-radius: 30px;
}
/*Header: fin topbar*/


/*Header: navbar*/

@media only screen and (min-width: 1024px) {
  .logo {
    margin-left: 270px;
    grid-template-columns: auto;
  }
}

.navbar-n{
  --border-style: solid;
  box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
  font-size: .9rem;
}

.navbar > div > div >ul >li .navbar-element{
  position: relative;
  text-decoration: none;
  font-family: sourcesanspro;
  color: #2b2b31;
  margin-right: 20px;
}

.navbar > div > div >ul >li .navbar-element:before,
.navbar > div > div >ul >li .navbar-element:after{
  content: "";
  position: absolute;
  height: 3px;
  width: 0;
  background:linear-gradient(to right, #1c89ff, #4dffd3);
  transition: 0.5s;
}

.navbar > div > div >ul >li .navbar-element:after{
  left: 0;
  bottom: 0px;
}
.navbar > div > div >ul >li .navbar-element:before{
right: 0px;
top: 0px;
}

.navbar > div > div >ul >li .navbar-element:hover{
 color: #004ff0;
}

.navbar > div > div >ul >li .navbar-element:hover:after,
.navbar > div > div >ul >li .navbar-element:hover:before{
 width: 100%;
}

/*Header: fin navbar*/

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
