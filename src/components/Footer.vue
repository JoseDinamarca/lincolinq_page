<template>
  <footer
    style="
      background: #000822;
      border-top: 1px solid #d0d6d6;
      padding-top: 30px;
    "
  >
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0d6efd; text-align: left; font-weight: bolder"
          >
            <router-link to="/" class="navbar-brand logo">
              <img
                style=""
                class="img-fluid d-inline-block align-text-top"
                width="230"
                alt="logo"
                src="../img/logo_devpro.png"
              />
            </router-link>
          </h4>

          <p style="color: #d0d6d6; text-align: left">
            Consultora informática conformada por profesionales del área que
            buscan entregar soluciones informáticas manofacturadas a la medida
            de las necesidades de sus clientes.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0d6efd; text-align: left; font-weight: bolder"
          >
            Sitio Web
          </h4>
          <p style="color: #d0d6d6; text-align: left">
            <a href="#" class="text-white" style="text-decoration: none"
              >Inicio</a
            >
          </p>
          <p style="color: #d0d6d6; text-align: left">
            <router-link
              to="/sobre_nosotros"
              class="text-white"
              style="text-decoration: none"
            >
              Sobre Nosotros
            </router-link>
          </p>
          <p style="color: #d0d6d6; text-align: left">
            <router-link
              to="/servicios"
              class="text-white"
              style="text-decoration: none"
            >
              Servicios
            </router-link>
          </p>
          <p style="color: #d0d6d6; text-align: left">
            <router-link
              to="/apoyo_pymes"
              class="text-white"
              style="text-decoration: none"
            >
              Apoyamos a las Pymes
            </router-link>
          </p>
          <p style="color: #d0d6d6; text-align: left">
            <router-link
              to="/contactanos"
              class="text-white"
              style="text-decoration: none"
            >
              Contacto
            </router-link>
          </p>
          <!--
          <p style="color: #d0d6d6; text-align: left">
            <a href="#" class="text-white" style="text-decoration: none"
              >Blog</a
            >
          </p>-->
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0d6efd; text-align: left; font-weight: bolder"
          >
            Enlaces
          </h4>
          <p style="text-align: left">
            <a href="#" class="text-white" style="text-decoration: none">
              Políticas de privacidad</a
            >
          </p>
          <p style="text-align: left">
            <a href="#" class="text-white" style="text-decoration: none">
              Términos de uso</a
            >
          </p>
          <!--
          <p style="text-align: left">
            <a href="#" class="text-white" style="text-decoration: none">
              Preguntas Frecuentes</a
            >
          </p> -->
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h4
            class="mb-4"
            style="color: #0d6efd; text-align: left; font-weight: bolder"
          >
            Contacto
          </h4>
          <p class="text-white" style="text-align: left; margin-bottom: 2px">
            <a
              href="https://api.whatsapp.com/send/?phone=56926493333"
              target="_blank"
              style="color: white; text-decoration: none"
              ><i class="bi bi-whatsapp"></i> +56 9 2649 3333
            </a>
          </p>
          <p class="text-white" style="text-align: left; margin-bottom: 2px">
            <a
              href="https://api.whatsapp.com/send/?phone=56926459314"
              target="_blank"
              style="color: white; text-decoration: none"
              ><i class="bi bi-whatsapp"></i> +56 9 2645 9314
            </a>
          </p>
          <p class="text-white" style="text-align: left">
            <a
              href="https://api.whatsapp.com/send/?phone=56991843822"
              target="_blank"
              style="color: white; text-decoration: none"
              ><i class="bi bi-whatsapp"></i> +56 9 9184 3822
            </a>
          </p>
          <p class="text-white" style="text-align: left">
            <i class="bi bi-envelope-at-fill"></i> contacto@consultoradevpro.cl
          </p>
        </div>
      </div>
      <hr class="mb-4" style="border: 1px solid #ffffff" />
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p style="color: #d0d6d6">
            Copyright <i class="bi bi-c-circle"></i>2023, Todos los derechos
            reservados.
            <a href="#" style="text-decoration: none">
              <strong>Dev&Pro Ltda</strong>
            </a>
          </p>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100090508094513"
                  target="_blank"
                  class="btn-floating btn-sm text-white"
                  style="font-size: 23px"
                  ><i class="bi bi-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.instagram.com/devpro.consultora/"
                  target="_blank"
                  class="btn-floating btn-sm text-white"
                  style="font-size: 23px"
                  ><i class="bi bi-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>

<script></script>
