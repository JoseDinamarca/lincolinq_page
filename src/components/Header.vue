<template>
  <header>
    <!-- Header: navbar -->
    <nav class="navbar navbar-expand-md navbar-light navbar-n">
      <div class="container-fluid align-items-center">
        <!-- logo -->
        <router-link
          to="/"
          class="navbar-brand logo"
          style=""
        >
          <img
            style=""
            class="img-fluid d-inline-block align-text-top"
            width="100"
            alt="logo"
            src="../img/logo_linco.png"
          />
        </router-link>
        <!-- fin logo -->

        <!-- boton del menu // telefono -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- fin boton del menu // telefono -->
        <!-- elementos del menu colapsable // telefono -->
        <div
          class="collapse navbar-collapse"
          id="menu"
        >
          <hr class="d-md-none d-lg-block" />
          <!-- enlaces nav header -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link navbar-element"
              >
                Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/quienes_somos"
                class="nav-link navbar-element"
              >
                Quienes somos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/que_hacemos"
                class="nav-link navbar-element"
              >
                Que hacemos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/galeria"
                class="nav-link navbar-element"
              >
                Galeria
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/blog"
                class="nav-link navbar-element"
              >
                Blog
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contactanos"
                class="nav-link navbar-element"
              >
                Contáctanos
              </router-link>
            </li>  
          </ul>
          <!-- fin enlaces nav header -->
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/*Header    border-style: solid;
*/

/*Header: navbar*/

@media only screen and (min-width: 1024px) {
  .logo {
    margin-left: 270px;
    grid-template-columns: auto;
  }
}

header {
background-color: #57f379ea;

}

.navbar-n {
  --border-style: solid;
  box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
  font-size: 1.14rem;
  font-weight: bold;
}

.navbar > div > div > ul > li .navbar-element {
  position: relative;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  color: #2b2b31;
  margin-right: 20px;
}

.navbar > div > div > ul > li .navbar-element:before,
.navbar > div > div > ul > li .navbar-element:after {
  content: "";
  position: absolute;
  height: 3px;
  width: 0;
  background: linear-gradient(to right, #0088f7, #ee8421);
  transition: 0.5s;
}

.navbar > div > div > ul > li .navbar-element:after {
  left: 0;
  bottom: 0px;
}
.navbar > div > div > ul > li .navbar-element:before {
  right: 0px;
  top: 0px;
}

.navbar > div > div > ul > li .navbar-element:hover {
  color: #004ff0;
}

.navbar > div > div > ul > li .navbar-element:hover:after,
.navbar > div > div > ul > li .navbar-element:hover:before {
  width: 100%;
}

/*Header: fin navbar*/
</style>

<script></script>
