<template>
  <nav aria-label="breadcrumb " class="positioning" style="--bs-breadcrumb-divider: '»';">
    <div class="container access">
      <ol class="breadcrumb ">
        <li class="breadcrumb-item"><a href="#">Inicio</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sobre nosotros</li>
      </ol>
    </div>
  </nav>

  <section class="section-about">
    <div class="container">
      <div class="row section-heading">
        <header class="col-lg-12 col-xxl-12 ">
          <h5 class="card-title card-title-subheading center">Consultoría</h5>
          <h2 class="card-title card-title-heading center">Sobre nosotros</h2>
        </header>
      </div>
      
    </div>
    <div class="container grid-container">
      <div class="grid-item tall wide2"></div>
      <div class="grid-item" ></div>
      <div class="grid-item" ></div>
      <div class="grid-item" ></div>
      <div class="grid-item wide2"></div>
     
      
      
    </div>
  </section>
  <section class="section-about-2">
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
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button " type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
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
                <div class="accordion-body">Desarrollar software a la medida en base a las necesidades del cliente con
                  fin
                  de generar oportunidades de crecimiento mediante la digitalización
                  de sus proyectos, centrándonos en el futuro para impulsar el crecimiento de pequeñas y grandes
                  empresas.
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
    
  </section>
</template>
<style>

 



.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../img/imagen3.png');
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-item:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  padding: 20px;
  grid-auto-flow: dense;
  position: relative;
}

.centrado{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (min-width: 600px) {
  .wide {
    grid-column: span 2;
  }
  .wide2 {
    grid-column: span 3;
  }

  .tall {
    grid-row: span 2;
  }
  .tall2 {
    grid-row: span 3;
  }
}

.section-about {
  padding: 4.5rem 0;
}

.positioning {
  position: relative;
  background-color: #f7f8fa;
  margin: 0;
}

.section-about-2 {
  padding: 4.5rem 0;
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

.accordion-body {
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

@media (max-width:991px) {
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


