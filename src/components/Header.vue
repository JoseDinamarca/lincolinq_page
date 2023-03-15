<template>
  <header>
    <div class="header">
      <div class="row justify-content-between w-100">
        <div class="col-md-4">
          <router-link class="header-brand" to="/">
            <img alt="logo" src="../img/logo_devpro.png" />
          </router-link>
        </div>
        <div class="col-md-2" style="margin-top: auto">
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
                ><font-awesome-icon
                  icon="fa-brands fa-square-facebook"
                  size="3x"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md">
            <router-link to="/" style="color: white; text-decoration: none">
              <strong
                @mouseover="hover1 = true"
                @mouseleave="hover1 = false"
                :class="{ activo: hover1 }"
                >Inicio</strong
              >
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/productos_servicios"
              style="color: white; text-decoration: none"
            >
              <strong
                @mouseover="hover2 = true"
                @mouseleave="hover2 = false"
                :class="{ activo: hover2 }"
                >Productos y Servicios</strong
              >
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/apoyo_pymes"
              style="color: white; text-decoration: none"
            >
              <strong
                @mouseover="hover3 = true"
                @mouseleave="hover3 = false"
                :class="{ activo: hover3 }"
                >Apoyo a PYMES</strong
              >
            </router-link>
          </div>
          <div class="col-md">
            <router-link
              to="/contactanos"
              style="color: white; text-decoration: none"
            >
              <strong
                @mouseover="hover4 = true"
                @mouseleave="hover4 = false"
                :class="{ activo: hover4 }"
                >Contáctanos</strong
              >
            </router-link>
          </div>
          <div class="col-md">
            <router-link to="/blog" style="color: white; text-decoration: none">
              <strong
                @mouseover="hover5 = true"
                @mouseleave="hover5 = false"
                :class="{ activo: hover5 }"
                >Blog</strong
              >
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

.activo {
  text-shadow: 5px 5px 5px black;
}
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
