<template>
  <div>
    <Carousel />

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div
      class="row justify-content-around w-auto box-info"
      style="margin: 12px"
    >
      <h3 style="color: #1c89ff;">¿Quiénes somos?</h3>
      <br />
      <br />
      <div class="col-md-5 col-4 align-self-center">
        <img
          alt="Quienes somos"
          src="../img/quienes_somos.png"
          class="responsive"
        />
      </div>
      <div class="col-md-5 col-4 align-self-center justify">
        <a
          >Dev&Pro es una consultora informática localizada en la región del
          Maule enfocada en el desarrollo de software de escritorio y servicios
          web. Comprometidos con la región, nuestro objetivo es entregar
          soluciones informáticas manofacturadas a la medida en base a las
          necesidades de los cliente para un mejor servicio.</a
        >
      </div>
    </div>
    <br />
    <div
      class="row justify-content-around w-auto box-info"
      style="margin: 12px"
    >
      <h3>Digitalización de tu PYME</h3>
      <br />
      <br />
      <div class="col-md-5 col-4 align-self-center justify">
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
      <div class="col-md-5 col-4 align-self-center">
        <img
          alt="Digitalización de tu PYME"
          src="../img/quienes_somos.png"
          class="responsive"
        />
      </div>
    </div>
    <br />
    <div
      class="row justify-content-around w-auto box-info"
      style="margin: 12px"
    >
      <h3>Compromiso con la región</h3>
      <br />
      <br />
      <div class="col-md-5 col-4 align-self-center">
        <img
          alt="Compromiso con la región"
          src="../img/quienes_somos.png"
          class="responsive"
        />
      </div>
      <div class="col-md-5 col-4 align-self-center justify">
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
          las mejores opciones para solventar sus necesidades como PYME.</a
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
.justify {
  text-align: justify;
}

h1 {
  text-align: center;
}

.box-info {
  padding: 30px 0;
  box-shadow: 0px 0px 27px 0px rgb(153, 152, 152);
  border-radius: 15px;
}

.responsive {
  width: 100%;
  height: auto;
}
</style>
