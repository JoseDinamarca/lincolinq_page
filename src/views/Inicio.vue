<template>
  <div>
    <h1>Presentación</h1>
    <a
      >Somos un equipo comprometido con la buena atención hacia nuestros
      clientes, procurando ser una ayuda a sus negocios.</a
    ><br />
    <br />
    <Carousel />
    <h1>Ingeniería de software</h1>
    <a
      >Realizamos desarrollos bajo tus necesidades, asegurandonos de cumplir con
      tus expectativas. Nos enfocamos netamente en tus necesiades, en donde
      aseguramos la calidad de tu software.</a
    ><br />
    <h1>Empresas que trabajan con nosotros</h1>
    <a>Empresas que trabajan con nosotros</a>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>
