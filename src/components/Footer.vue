<template>
  <footer>
    <ul>
      <li>
        <router-link to="/quienes_somos">Quienes somos</router-link>
      </li>
      <li>
        <router-link to="/preguntas_frecuentes"
          >Preguntas frecuentes</router-link
        >
      </li>
    </ul>
    <ul>
      <li>
        <font-awesome-icon icon="fa-regular fa-envelope" /> Correo:
        contacto@consultoradevpro.cl
      </li>
      <li>
        <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram:
        https://www.instagram.com/devpro.consultora/
      </li>
    </ul>
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
}
</style>
