<template>
  <nav aria-label="breadcrumb " class="positioning" style="--bs-breadcrumb-divider: '»';">
    <div class="container access">
      <ol class="breadcrumb ">
        <li class="breadcrumb-item"><a href="#">Inicio</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sobre nosotros</li>
      </ol>
    </div>
  </nav>


  <div class="container">
    <div class="row section-heading">
      <header class="col-lg-12 col-xxl-12 ">
        <h5 class="card-title card-title-subheading center">Consultores</h5>
        <h2 class="card-title card-title-heading about-heading center">Sobre nosotros</h2>
      </header>
    </div>
    <div class="row section-content">
      <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <div class="col-lg-12" style="margin-bottom: 10px;">
          <img src="../img/imagen3.png" class="rounded mx-auto d-block about-img-1 " alt="...">
        </div>

      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div class="row">
          <div class="col-sm-12  col-md-12 col-lg-12" style="padding-bottom: 10px;">
            <img src="../img/imagen3.png" class="rounded mx-auto d-block about-img-2" alt="...">
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 " style="">
            <img src="../img/imagen3.png" class="rounded mx-auto d-block about-img-3" alt="...">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class=" positioning">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 ">
          <div class="container-img-about">
            <div class="img-about-3"></div>
          </div>

        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1" style="padding-top: 20px;">
          <h2 class="about-title-heading">Inspiration, innova & countless opportunities.</h2>
          <p class="card-text about-description">Comprendemos las dificultades que presentan las pymes por eso
            podemos ayudarte a obtener presencia digital.</p>
          <div class="accordion accordion-flush" id="accordion-about">
            <div class="accordion-item" >
              <h2 class="accordion-header" >
                <button class="accordion-button "  type="button" 
                  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  Empresa Dev&Pro
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordion-about">
                <div class="accordion-body">
                  Dev&Pro es una consultora informática conformada por profesionales del área
                  que buscan entregar soluciones informáticas
                  manofacturadas a la medida de las necesidades de sus clientes. Localizada en la región del Maule, esta
                  busca potenciar a los diversos emprendimientos
                  que puedan ser beneficiados con un sistema informático, ya sea de escritorio o de servicios web.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Nuestra misión
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion-about">
                <div class="accordion-body">Desarrollar software a la medida en base a las necesidades del cliente con fin
                  de generar oportunidades de crecimiento mediante la digitalización
                  de sus proyectos, centrándonos en el futuro para impulsar el crecimiento de pequeñas y grandes empresas.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Visión del negocio
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordion-about">
                <div class="accordion-body">Ser un pilar de la informática, generando oportunidades de crecimiento e
                  impulsando nuestra región mediante nuestra labor.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  
</template>
<style>
.positioning {
  position: relative;
  background-color: #f7f8fa;
  margin: 0;
}

.access {
  padding: 1.125rem 0;
}

.breadcrumb {
  margin-bottom: 0 !important;
}

.breadcrumb-item {
  color: #004ff0 !important
}

.breadcrumb-item a {
  color: #5f6973;
  text-decoration: none;
}

.center {
  text-align: center;
}

.section-heading {
  padding-top: 0;
  padding-bottom: 3%;
}

.about-img-1 {
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.about-img-2 {

  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.about-img-3 {

  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}


.container-img-about {

  height: 550px;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  position: relative;
  z-index: 50;
}

.img-about-3 {
  background-image: url("../img/imagen3.jpg") !important;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  position: absolute;
}


.accordion .accordion-item+.accordion-item {
  margin-top: 0.7rem;
  
}

.accordion-body{
  text-align: left;
  color: #5f6973
}



.about-title-heading {
    text-align: left;
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2.5rem;
  }

  .about-description {
    font-size: 16px !important;
    max-width: 100%;
    color: black;
    font-family: sourcesanspro;
    text-align: left;
    margin-top: 30px;
    
  }

  @media (max-width:991px)  { 
    .about-title-heading {
    font-weight: bold;
    font-family: sourcesanspro;
    font-size: 2.5rem;
    text-align: center;

  }

  .about-description {
    font-size: 16px !important;
    max-width: 100%;
    color: black;
    font-family: sourcesanspro;
    text-align: center;
    margin-top: 30px;
  }
}

</style>


