<template>
  <footer>
    <div class="row justify-content-around w-100">
      <div class="col d-flex">
        <ul style="margin-top: 10px; margin-left: auto; margin-right: auto">
          <li>
            <h5 style="color: white"><strong>Ayuda al cliente</strong></h5>
          </li>
          <br />
          <li
            @mouseover="hover1 = true"
            @mouseleave="hover1 = false"
            :class="{ activo: hover1 }"
          >
            <router-link
              to="/sobre_nosotros"
              style="color: white; text-decoration: none"
              >Sobre nosotros</router-link
            >
          </li>
          <br />
          <li
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
            :class="{ activo: hover2 }"
          >
            <router-link
              to="/preguntas_frecuentes"
              style="color: white; text-decoration: none"
              >Preguntas frecuentes</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col d-flex">
        <ul style="margin-top: 10px; margin-left: auto; margin-right: auto">
          <li>
            <h5 style="color: white"><strong>Contáctanos</strong></h5>
          </li>
          <br />
          <li
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
            :class="{ activo: hover3 }"
          >
            <a
              href="https://www.instagram.com/devpro.consultora/"
              target="_blank"
              style="color: white; text-decoration: none"
              ><font-awesome-icon icon="fa-brands fa-instagram" /> Instagram</a
            >
          </li>
          <br />
          <li
            @mouseover="hover4 = true"
            @mouseleave="hover4 = false"
            :class="{ activo: hover4 }"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100090508094513"
              target="_blank"
              style="color: white; text-decoration: none"
              ><font-awesome-icon icon="fa-brands fa-square-facebook" />
              Facebook</a
            >
          </li>
          <br />
          <li
            @mouseover="hover5 = true"
            @mouseleave="hover5 = false"
            :class="{ activo: hover5 }"
          >
            <a style="color: white; text-decoration: none"
              ><font-awesome-icon icon="fa-regular fa-envelope" />
              contacto@consultoradevpro.cl</a
            >
          </li>
        </ul>
      </div>
      <div class="col d-flex">
        <ul style="margin-top: 10px; margin-left: auto; margin-right: auto">
          <h5 style="color: white">
            <strong
              ><font-awesome-icon icon="fa-brands fa-whatsapp" />
              Teléfonos</strong
            >
          </h5>
          <li
            style="margin: 0"
            @mouseover="hover6 = true"
            @mouseleave="hover6 = false"
            :class="{ activo: hover6 }"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=56926493333"
              target="_blank"
              style="color: white; text-decoration: none"
              >+56 9 2649 3333</a
            >
          </li>
          <br />
          <li
            style="color: white; margin: 0"
            @mouseover="hover7 = true"
            @mouseleave="hover7 = false"
            :class="{ activo: hover7 }"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=56926459314"
              target="_blank"
              style="color: white; text-decoration: none"
              >+56 9 2645 9314</a
            >
          </li>
          <br />
          <li
            style="color: white; margin: 0"
            @mouseover="hover8 = true"
            @mouseleave="hover8 = false"
            :class="{ activo: hover8 }"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=56991843822"
              target="_blank"
              style="color: white; text-decoration: none"
              >+56 9 9184 3822</a
            >
          </li>
        </ul>
      </div>
    </div>
    <br />
    <div class="row justify-content-center w-100">
      <div class="col-3" style="color: white">
        <font-awesome-icon icon="fa-regular fa-copyright" /> Dev&Pro 2023, Todos
        los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

footer {
  border-top: 1px solid rgb(0, 0, 0);
  background-color: gray;
}

.activo {
  text-decoration: underline;
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
      hover6: false,
      hover7: false,
      hover8: false,
    };
  },
};
</script>
