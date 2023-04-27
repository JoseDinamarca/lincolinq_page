<template>
  <section>
    <div class="container containerIn-about">
      <div class="row">
        <div class="col-lg-6 col-xxl-5">
          <div class="aboutIn-position">
            <div class="img-aboutIn-1"></div>
            <div class="img-aboutIn-2"></div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-5 offset-xxl-1">
          <div class="card-body aboutIn-contenedor">
            <h5 class="card-title aboutIn-subheading">Sobre nosotros</h5>
            <h2 class="card-title aboutIn-heading">
              Agencia de consultoría informática
            </h2>
            <p class="card-text aboutIn-description">
              Comprendemos las dificultades que se presentan a las pymes, por
              eso podemos ayudarte a obtener presencia digital.
            </p>
            <div class="row justify-content-xs-center">
              <div class="col-12 col-md-12 col-lg-8 col-xl-8 text-center">
                <button class="btn aboutIn-button">
                  Descubre <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.containerIn-about {
  padding-top: 80px;
}

@media (max-width: 767px) {
  .img-aboutIn-1 {
    background-image: url("../img/imagen3.png");
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 338px;
    height: 253px;
  }

  .img-aboutIn-2 {
    background-image: url("../img/imagen3.jpg");
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 20%;
    width: 334px;
    height: 253px;
  }

  .aboutIn-position {
    position: relative;
    width: 100%;
    height: 500px;
  }

  .aboutIn-contenedor {
    margin-top: -100px;
    background: white;
  }

  .aboutIn-subheading {
    transform: translate(0px);
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    font-family: sourcesanspro;
    margin-top: -40px;
    text-align: center !important;
    margin-top: 9%;
    color: #004ff0;
  }

  .aboutIn-heading {
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center !important;
    margin-right: 0 !important;
  }

  .aboutIn-description {
    margin-right: 100px !important;
    font-size: 0.9rem !important;
    max-width: 100%;
    opacity: 0.9;
    font-family: sourcesanspro;
    margin-top: 20px;
    color: black !important;
    text-align: center !important;
    margin-right: 0 !important;
  }

  .aboutIn-button {
    left: 0 !important;
    height: 50px !important;
    float: center !important;
    margin-top: 3% !important;
    border-style: solid !important;
    border-color: black !important;
  }

  .aboutIn-button:hover {
    border-style: solid !important;
    border-color: black !important;
    background: #3a3b3b !important;
    color: white !important;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .img-aboutIn-1 {
    background-image: url("../img/imagen3.png");
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 338px;
    height: 253px;
  }

  .img-aboutIn-2 {
    background-image: url("../img/imagen3.jpg");
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 20%;
    width: 334px;
    height: 253px;
  }

  .aboutIn-position {
    position: relative;
    width: 80%;
    height: 500px;
    margin-left: 10%;
  }

  .aboutIn-contenedor {
    margin: 0;
    background: white;
  }

  .aboutIn-subheading {
    transform: translate(0px);
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    font-family: sourcesanspro;
    text-align: center;
    margin-top: -9%;
    color: #004ff0;
  }

  .aboutIn-heading {
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2.4rem;
    padding-top: 10px;
    margin-bottom: 20px;
    text-align: center;
  }

  .aboutIn-description {
    padding-top: 10px;
    color: black;
    text-align: center;
    content: center !important;
  }

  .aboutIn-button {
    left: 40px !important;
    height: 50px !important;
    float: center !important;
    margin-top: 3% !important;
    border-style: solid !important;
    border-color: black !important;
  }

  .aboutIn-button:hover {
    border-style: solid !important;
    border-color: black !important;
    background: #3a3b3b !important;
    color: white !important;
  }
}

@media (min-width: 992px) {
  .img-aboutIn-1 {
    background-image: url("../img/imagen3.png");
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 338px;
    height: 253px;
  }

  .img-aboutIn-2 {
    background-image: url("../img/imagen3.jpg");
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 0%;
    width: 334px;
    height: 253px;
  }

  .aboutIn-position {
    position: relative;
    width: 100%;
    height: 400px;
  }

  .aboutIn-contenedor {
    margin: 0;
    background: white;
  }

  .aboutIn-heading {
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2.6rem;
    padding-top: 5px;
    margin-bottom: 20px;
  }

  .aboutIn-description {
    color: black;
    padding-top: 10px;
  }

  .aboutIn-button {
    left: 0 !important;
    height: 50px !important;
    float: left !important;
    margin-top: 3% !important;
    border-style: solid !important;
    border-color: black !important;
  }

  .aboutIn-button:hover {
    left: 0 !important;
    height: 50px !important;
    float: left !important;
    margin-top: 3% !important;
    border-style: solid !important;
    border-color: black !important;
    background: #3a3b3b !important;
    color: white !important;
  }

  .aboutIn-subheading {
    transform: translate(0px);
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    text-transform: uppercase;
    color: #004ff0 !important;
    font-family: sourcesanspro;
    color: #004ff0;
    padding-top: 12%;
  }
}
</style>
