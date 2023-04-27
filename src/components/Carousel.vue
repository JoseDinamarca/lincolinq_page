<template>
  <!-- Carousel -->
  <div
    id="carousel"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <!-- Botones izquierdos y derecho -->
    <!--   -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>

    <!-- FIn botones izquierdos y derecho -->

    <div class="carousel-inner">
      <!-- Carousel 1 -->
      <div
        class="carousel-item active"
        data-bs-interval="5000"
      >
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-12 align-self-center d-md-block texto-encima"
          >
            <div class="card col-xs-7 col-md-7 carousel-card">
              <div class="card-body contenedor">
                <h5 class="card-title card-title-subheading">Maule</h5>
                <h2 class="card-title card-title-heading">
                  Apoyamos a las pymes
                </h2>
                <p class="card-text card-description">
                  Comprendemos las dificultades que se presentan a las pymes,
                  por eso podemos ayudarte a obtener presencia digital.
                </p>
                <button class="btn btn-primary card-button pull-right">
                  Conocer Más <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="offset-md-3 col-md-9 carousel-image">
            <div class="img-carousel-1"></div>
          </div>
        </div>
      </div>
      <div
        class="carousel-item"
        data-bs-interval="5000"
      >
        <div class="row">
          <div class="col-md-9 carousel-image">
            <div class="img-carousel-2"></div>
          </div>
          <div
            class="col-12 col-sm-12 col-md-12 align-self-center d-md-block texto-encima"
          >
            <div class="card col-xs-7 col-md-7 carousel-card-2">
              <div class="card-body contenedor">
                <h5 class="card-title card-title-subheading">Maule</h5>
                <h2 class="card-title card-title-heading">
                  Aprende a utilizar los productos
                </h2>
                <p class="card-text card-description">
                  Para una mejor experiencia te invitamos a revisar el uso de
                  nuestros productos.
                </p>
                <button class="btn btn-primary card-button pull-right">
                  Conocer Más <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  
  <button class="carousel-control-prev" type="button"  data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 -->
  </div>
</template>

<style>
/**/

/* Diseño para celulares */
@media (max-width: 571px) {
  .img-carousel-1 {
    --opacidad-negro: 0.7;
    background-image: linear-gradient(
        rgba(0, 0, 0, var(--opacidad-negro)),
        rgba(0, 0, 0, var(--opacidad-negro))
      ),
      url("../img/carousel/carousel-1.jpg") !important;
    border-bottom-left-radius: 0;
    height: 520px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }

  .img-carousel-2 {
    --opacidad-negro: 0.7;
    background-image: linear-gradient(
        rgba(0, 0, 0, var(--opacidad-negro)),
        rgba(0, 0, 0, var(--opacidad-negro))
      ),
      url("../img/carousel/carousel-2.jpg") !important;
    border-bottom-left-radius: 0;
    height: 520px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }

  .texto-encima {
    position: absolute;
    align-content: center;
    opacity: 0.9;
  }

  .carousel-card {
    background: transparent !important;
    color: white !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
  }

  .carousel-card-2 {
    background: transparent !important;
    color: white !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
  }

  .card-title-subheading {
    transform: translate(0px);
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    text-align: left;
    font-family: sourcesanspro;
    margin-top: -40px;
  }

  .card-title-heading {
    margin-right: 150px !important;
    text-align: left;
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2rem;
  }

  .card-description {
    margin-right: 100px !important;
    font-size: 0.9rem !important;
    max-width: 100%;
    color: white;
    opacity: 0.9;
    font-family: sourcesanspro;
    text-align: justify;
    margin-top: 30px;
  }

  .card-button {
    left: 0 !important;
    height: 50px !important;
    float: left !important;
    margin-top: 7% !important;
  }
}

/* Diseño para Tablet */
@media (min-width: 571px) and (max-width: 766px) {
  .contenedor {
    margin: 5%;
  }

  .img-carousel-1 {
    --opacidad-negro: 0.7;
    background-image: linear-gradient(
        rgba(0, 0, 0, var(--opacidad-negro)),
        rgba(0, 0, 0, var(--opacidad-negro))
      ),
      url("../img/carousel/carousel-1.jpg") !important;
    border-bottom-left-radius: 0;
    height: 520px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }

  .img-carousel-2 {
    --opacidad-negro: 0.7;
    background-image: linear-gradient(
        rgba(0, 0, 0, var(--opacidad-negro)),
        rgba(0, 0, 0, var(--opacidad-negro))
      ),
      url("../img/carousel/carousel-2.jpg") !important;
    border-bottom-left-radius: 0;
    height: 520px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }

  .carousel-inner {
    max-height: 680px;
  }

  .carousel-card {
    background: transparent !important;
    color: white !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
  }

  .carousel-card-2 {
    background: transparent !important;
    color: white !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
  }

  .card-title-subheading {
    transform: translate(0px);
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    text-align: left;
    font-family: sourcesanspro;
    margin-top: -40px;
  }

  .card-title-heading {
    margin-right: 150px !important;
    text-align: left;
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2rem;
  }

  .card-description {
    margin-right: 100px !important;
    font-size: 0.9rem !important;
    max-width: 100%;
    color: white;
    opacity: 0.9;
    font-family: sourcesanspro;
    text-align: justify;
    margin-top: 30px;
  }

  .card-button {
    left: 0;
    height: 50px;
    float: left;
    margin-top: 7%;
  }

  .texto-encima {
    position: absolute;
    align-content: center;
    opacity: 0.9;
  }
}

@media (min-width: 767px) {
  .img-carousel-1 {
    background-image: url("../img/carousel/carousel-1.jpg") !important;
    border-bottom-left-radius: 10px;
    height: 620px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    margin-left: 6%;
  }

  .img-carousel-2 {
    --opacidad-negro: 0.7;
    background-image: url("../img/carousel/carousel-2.jpg") !important;
    border-bottom-right-radius: 10px;
    height: 620px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    margin-right: 6%;
  }

  .texto-encima {
    position: absolute;
    align-content: center;
  }

  .contenedor {
    margin: 10%;
    background: white !important;
  }

  .carousel-card {
    background: transparent !important;
    color: black !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
    background: white !important;
    margin: 15%;
    border-style: solid;
    max-width: 30rem;
  }

  .carousel-card-2 {
    background: transparent !important;
    color: black !important;
    font-family: sourcesanspro !important;
    height: 200px;
    border: 0px !important;
    box-shadow: 0px 0px 13px 0px rgba(77, 82, 94, 0.13);
    position: absolute;
    background: white !important;
    margin: 60%;
    border-style: solid;
    max-width: 30rem;
  }

  .card-title-subheading {
    transform: translate(0px);
    font-size: 16px;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    text-align: left;
    --padding-left: 11%;
    font-family: sourcesanspro;
  }

  .card-title-heading {
    text-align: left;
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2.5rem;
  }

  .card-description {
    font-size: 0.9rem !important;
    max-width: 100%;
    opacity: 0.9;
    font-family: sourcesanspro;
    text-align: justify;
    margin-top: 20px;
    color: #5f6973;
  }

  .card-button {
    left: 0;
    height: 50px;
    float: left !important;
    margin-top: 2% !important;
  }
}
</style>

<script></script>
