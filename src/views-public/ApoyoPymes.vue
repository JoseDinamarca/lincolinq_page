<template>
  <div id="progress">
    <span id="progress-value"><i class="bi bi-arrow-up-short"></i></span>
  </div>
  <nav
    aria-label="breadcrumb "
    class="positioning"
    style="--bs-breadcrumb-divider: '»'"
  >
    <div class="container access">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/"> Inicio </router-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          Apoyo a PYMES
        </li>
      </ol>
    </div>
  </nav>

  <div
    class="section"
    style="padding: 4.5rem 0"
  >
    <div class="container">
      <div class="row"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-5 col-lg-5">
          <div class="img-pymes"></div>
        </div>
        <div class="offset-md-1 col-md-6 offset-lg-1 col-lg-6 col-xs-12">
          <h2 class="apoyopyme-title-heading">
            Nuestro compromiso con las pymes
          </h2>
          <p class="apoyopyme-description">
            En Dev&Pro nos comprometemos a dar impulso a los proyectos que se
            desean realizar dentro de la región del Maule, con la intención de
            que esta continúe su desarrollo. De igual forma, en Dev&Pro nos
            comprometemos a dar facilidades a PYMES, con la intención de ser de
            alguna manera una ayuda para su crecimiento dentro de su rubro.
            Finalmente, nos comprometemos a buscar y presentarle a nuestros
            clientes la mejor solución posible para su problema, con la
            intención de no generar mayores problemas al entregar una solución
            que no se ajuste a sus necesidades, procurando informarles siempre
            cuales son las mejores opciones para solventar sus necesidades como
            PYME.
          </p>
          <p class="apoyopyme-description">
            Nuestro país posee una gran cantidad de emprendedores el cual nos
            posiciona en un escenario áltamente competitivo dentro de los
            distintos rubros que se pueden encontrar. Es por esto que no se
            deben dejar de lado las distintas oportunidades de crecimiento y
            estabilidad que se puedan aplicar a su emprendimiento, en donde,
            según expertos, digitalizar su negocio puede ser clave. Pero, ¿Qué
            implica la digitalización de una PYME? La digitalización -o
            transformación digital- hace referencia al uso de tecnologías para
            crear o reinventar procesos empresariales, implicando que esta puede
            ser usada a favor tanto para la facilitación de procesos tanto para
            sus clientes como para usted, lo cual puede entregar múltiples
            beneficios. Para más informacion al respecto, te invitamos a revisar
            la guía para la digitalización de las PYMES confeccionada por la
            Cámara de Comercio de Santiago:
            <a
              href="https://www.ccs.cl/html/estudios/guia-digitalizacion-pymes.pdf"
              >https://www.ccs.cl/html/estudios/guia-digitalizacion-pymes.pdf</a
            >
          </p>
        </div>
        <div
          class="row"
          style="padding-top: 50px"
        ></div>
      </div>
    </div>

    <!--
  <div>
    <h1>Compromiso con la región</h1>
    <a
      >En Dev&Pro nos comprometemos a dar impulso a los proyectos que se desean
      realizar dentro de la región del Maule, con la intención de que esta
      continúe su desarrollo.</a
    ><br />
    <h1>Impulso a PYMES</h1>
    <a
      >De igual forma, en Dev&Pro nos comprometemos a dar facilidades a PYMES,
      con la intención de ser de alguna manera una ayuda para su crecimiento
      dentro de su rubro.</a
    >
  </div>-->
  </div>
</template>

<style>
.apoyopyme-title-heading {
  text-align: left;
  font-weight: bold;
  font-family: sourcesanspro;
  font-size: 2.2rem;
}

.apoyopyme-description {
  font-size: 16px !important;
  max-width: 100%;
  color: black;
  font-family: sourcesanspro;
  text-align: justify;
  margin-top: 30px;
}

.img-pymes {
  background-image: url("../img/carousel/carousel-1.png") !important;
  border-radius: 10px;
  height: 635px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}
</style>

<script></script>
