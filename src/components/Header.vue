<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Inicio</router-link>
      </li>

      <li>
        <router-link to="/productos_servicios"
          >Productos y Servicios</router-link
        >
      </li>

      <li>
        <router-link to="/apoyo_pymes">Apoyo a PYMES</router-link>
      </li>

      <li>
        <router-link to="/contactanos">Contáctanos</router-link>
      </li>

      <li>
        <router-link to="/">Blog</router-link>
      </li>
    </ul>
  </header>
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
header {
  border-bottom: 1px solid rgb(0, 0, 0);
}
</style>
