<template>
  <header>
    <div class="header">
      <div class="row justify-content-between">
        <div class="col-md-3 col-4 d-flex align-items-center">
          <router-link class="header-brand" to="/">
            <img alt="logo" src="../assets/logo_devpro.png" />
          </router-link>
        </div>
        <div class="col-md-2 col-4 align-items-center">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/devpro.consultora/"
                target="_blank"
                style="color: rgb(0, 110, 255)"
                ><font-awesome-icon icon="fa-brands fa-instagram" size="3x"
              /></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100090508094513"
                target="_blank"
                style="color: rgb(0, 110, 255)"
                ><font-awesome-icon icon="fa-brands fa-facebook" size="3x"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <router-link to="/" style="color: white; text-decoration: none">
              <strong>Inicio</strong>
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/productos_servicios"
              style="color: white; text-decoration: none"
            >
              <strong>Productos y Servicios</strong>
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/apoyo_pymes"
              style="color: white; text-decoration: none"
            >
              <strong>Apoyo a PYMES</strong>
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/contactanos"
              style="color: white; text-decoration: none"
            >
              <strong>Contáctanos</strong>
            </router-link>
          </div>
          <div class="col-md">
            <router-link to="/" style="color: white; text-decoration: none">
              <strong>Blog</strong>
            </router-link>
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
  width: 70%;
}
.input-group {
  height: 50px;
  width: 40%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
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
