<template>
  <footer
    style="
      background: #f3a53f;
      border-top: 1px solid #000000;
      padding-top: 30px;
    "
  >
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #000000; text-align: left; font-weight: bolder"
          >
            <router-link
              to="/"
              class="navbar-brand logo"
            >
              <img
                style=""
                class="img-fluid d-inline-block align-text-top"
                width="230"
                alt="logo"
                src="../img/logo_linco.png"
              />
            </router-link>
          </h4>

        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0050c9; text-align: left; font-weight: bolder"
          >
            Sitio Web
          </h4>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
              >Inicio</router-link
            >
          </p>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/quienes_somos"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            
            >
              Quienes somos
            </router-link>
          </p>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/que_hacemos"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Que hacemos
            </router-link>
          </p>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/galeria"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Galeria
            </router-link>
          </p>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/blog"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Blog
            </router-link>
          </p>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/contactanos"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Contactanos
            </router-link>
          </p>
          
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0050c9; text-align: left; font-weight: bolder"
          >
            Enlaces
          </h4>
          <p style="color: #000000; text-align: left">
            <router-link
              to="/politicas_de_privacidad"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Políticas de privacidad
            </router-link>
          </p>

          <p style="color: #000000; text-align: left">
            <router-link
              to="/termino_de_uso"
              class="text-black"
              style="text-decoration: none; font-weight: bold;"
            >
              Términos de uso
            </router-link>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0050c9; text-align: left; font-weight: bolder"
          >
            Contacto
          </h4>
          <p
            class="text-black"
            style="text-align: left; font-weight: bold"
          >
            <i class="bi bi-envelope-at-fill"></i> ggslincolinqk@gmail.com
          </p>
        </div>
      </div>
      <hr
        class="mb-4"
        style="border: 2px solid #000000"
      />
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p style="color: #000000">
            Copyright <i class="bi bi-c-circle"></i>2023, Todos los derechos
            reservados.
            <a
              href="https://www.consultoradevpro.cl/#/"
              style="text-decoration: none"
            >
              <strong>Dev&Pro Ltda</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

<script></script>
