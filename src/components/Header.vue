<template>
  <header>
    <div class="header">
      <div class="row">
        <div class="col-md-3 col-4 d-flex align-items-center">
          <router-link class="header-brand" to="/">
            <img alt="logo" src="../assets/logo_devpro.png" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex align-items-center display-none">
            <router-link to="/" style="color: white"> Inicio </router-link>
          </div>
          <div class="col-md-3 d-flex align-items-center display-none">
            <router-link to="/productos_servicios" style="color: white">
              Productos y Servicios
            </router-link>
          </div>
          <div class="col-md-3 d-flex align-items-center display-none">
            <router-link to="/apoyo_pymes" style="color: white">
              Apoyo a PYMES
            </router-link>
          </div>
          <div class="col-md-3 d-flex align-items-center display-none">
            <router-link to="/contactanos" style="color: white">
              Contáctanos
            </router-link>
          </div>
          <div class="col-md-3 d-flex align-items-center display-none">
            <router-link to="/" style="color: white"> Blog </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Header */
.header {
  padding: 10px 0px 10px 0px;
}
.header-brand img {
  width: 30%;
}
.input-group {
  height: 50px;
  width: 40%;
}

/*Navbar*/

.nav {
  background-color: #399efccb;
  padding: 10px 0px 10px 0px;
}

.nav .col-md-6 p {
  color: rgb(255, 255, 255);
  margin-right: 6rem;
  font-size: 15px;
}
</style>
