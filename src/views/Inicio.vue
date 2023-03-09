<template>
  <div style="background: #fcfcd5">
    <br />
    <br />
    <Carousel />
    <h1>¿Quiénes somos?</h1>
    <div class="row">
      <div class="col-md-6 col-4 align-items-center"></div>
      <div class="col-md-6 col-4 align-items-center">
        <a
          >Dev&Pro es una consultora informática localizada en la región del
          Maule enfocada en el desarrollo de software de escritorio y servicios
          web. Comprometidos con la región, nuestro objetivo es entregar
          soluciones informáticas manofacturadas a la medida en base a las
          necesidades de los cliente para un mejor servicio.</a
        >
      </div>
    </div>
    <h1>Digitalización de tu PYME</h1>
    <div class="row">
      <div class="col-md-6 col-4 align-items-center">
        <a
          >Nuestro país posee una gran cantidad de emprendedores el cual nos
          posiciona en un escenario áltamente competitivo dentro de los
          distintos rubros que se pueden encontrar. Es por esto que no se deben
          dejar de lado las distintas oportunidades de crecimiento y estabilidad
          que se puedan aplicar a su emprendimiento, en donde, según expertos,
          digitalizar su negocio puede ser clave. Pero, ¿Qué implica la
          digitalización de una PYME? La digitalización -o transformación
          digital- hace referencia al uso de tecnologías para crear o reinventar
          procesos empresariales, implicando que esta puede ser usada a favor
          tanto para la facilitación de procesos tanto para sus clientes como
          para usted, lo cual puede entregar múltiples beneficios. Para más
          informacion al respecto, te invitamos a revisar la guía para la
          digitalización de las PYMES confeccionada por la Cámara de Comercio de
          Santiago:
          <a
            href="https://www.ccs.cl/html/estudios/guia-digitalizacion-pymes.pdf"
            target="_blank"
            >https://www.ccs.cl/html/estudios/guia-digitalizacion-pymes.pdf</a
          ></a
        >
      </div>
      <div class="col-md-6 col-4 align-items-center"></div>
    </div>
    <br />
    <h1>Compromiso con la región</h1>
    <div class="row">
      <div class="col-md-6 col-4 align-items-center"></div>
      <div class="col-md-6 col-4 align-items-center">
        <a
          >En Dev&Pro nos comprometemos a dar impulso a los proyectos que se
          desean realizar dentro de la región del Maule, con la intención de que
          esta continue su desarrollo. De igual forma, en Dev&Pro nos
          comprometemos a dar facilidades a PYMES, con la intención de ser de
          alguna manera una ayuda para su crecimiento dentro de su rubro.
          Finalmente, nos comprometemos a buscar y presentarle a nuestros
          clientes la mejor solución posible para su problema, con la intención
          de no generar mayores problemas al entregar una solución que no se
          ajuste a sus necesidades, procurando informarles siempre cuales son
          las mejores opciones, a nuestro parecer, para solventar sus
          necesidades como PYME.</a
        >
      </div>
    </div>
    <Empresas />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Empresas from "../components/Empresas.vue";

export default {
  components: {
    Carousel,
    Empresas,
  },
};
</script>

<style>
div {
  text-align: justify;
}

h1 {
  text-align: center;
}
</style>
