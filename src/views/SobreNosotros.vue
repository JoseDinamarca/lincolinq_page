<template>
  <nav
    aria-label="breadcrumb "
    class="positioning"
    style="--bs-breadcrumb-divider: '»'"
  >
    <div class="container access">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Inicio</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          Sobre nosotros
        </li>
      </ol>
    </div>
  </nav>

  <section class="section-about">
    <div class="container">
      <div class="row section-heading">
        <header class="col-lg-12 col-xxl-12">
          <h2 class="card-title card-title-heading center">Sobre nosotros</h2>
        </header>
      </div>
    </div>
    <div class="container grid-container">
      <div class="grid-item-1 tall wide2"></div>
      <div class="grid-item-2"></div>
      <div class="grid-item-3"></div>
      <div class="grid-item-4"></div>
      <div class="grid-item-5 wide2"></div>
    </div>
  </section>
  <section class="section-about-2">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <div class="container-img-about">
            <div class="img-about-3"></div>
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1"
          style="padding-top: 20px"
        >
          <h2 class="about-title-heading">
            Innovamos para conseguir nuevas oportunidades.
          </h2>
          <p class="card-text about-description">
            Comprendemos las dificultades que se presentan a las pymes por eso
            podemos ayudarte a obtener presencia digital.
          </p>
          <div class="accordion accordion-flush" id="accordion-about">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  ¿Que es Dev&Pro?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordion-about"
              >
                <div class="accordion-body">
                  Dev&Pro es una consultora informática conformada por
                  profesionales del área que buscan entregar soluciones
                  informáticas manofacturadas a la medida de las necesidades de
                  sus clientes. Localizada en la región del Maule, esta busca
                  potenciar a los diversos emprendimientos que puedan ser
                  beneficiados con un sistema informático, ya sea de escritorio
                  o de servicios web.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Misión
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordion-about"
              >
                <div class="accordion-body">
                  Desarrollar software a la medida en base a las necesidades del
                  cliente, con fin de generar oportunidades de crecimiento
                  mediante la digitalización de sus proyectos, centrándonos en
                  el futuro para impulsar el crecimiento de pequeñas y grandes
                  empresas.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Visión
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordion-about"
              >
                <div class="accordion-body">
                  Ser un pilar de la informática, generando oportunidades de
                  crecimiento e impulsando nuestra región mediante nuestra
                  labor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container items-service">
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-xl-3 col-lg-3 content-service"
        >
          <div class="icon-wrapper icon-service">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-mouse"
              viewBox="0 0 16 17"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div class="box-service">
            <h3 class="icon-title">Seguridad</h3>
            <p class="icon-descripcion">Loreame el impsun</p>
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-xl-3 col-lg-3 content-service"
        >
          <div class="icon-wrapper icon-service">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-mouse"
              viewBox="0 0 16 17"
            >
              <path
                d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"
              />
            </svg>
          </div>
          <div class="box-service">
            <h3 class="icon-title">Seguridad</h3>
            <p class="icon-descripcion">Loreame el impsun</p>
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-xl-3 col-lg-3 content-service"
        >
          <div class="icon-wrapper icon-service">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-mouse"
              viewBox="0 0 16 17"
            >
              <path
                d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
              />
            </svg>
          </div>
          <div class="box-service">
            <h3 class="icon-title">Seguridad</h3>
            <p class="icon-descripcion">Loreame el impsun</p>
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-xl-3 col-lg-3 content-service"
        >
          <div class="icon-wrapper icon-service">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-mouse"
              viewBox="0 0 16 17"
            >
              <path
                d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
              />
            </svg>
          </div>
          <div class="box-service">
            <h3 class="icon-title">Seguridad</h3>
            <p class="icon-descripcion">Loreame el impsun</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-about-3">
    <div class="container mb-5 mb-md-6 mb-xl-10">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-8 text-center">
          <h5 class="card-title service-subheading-inicio">Conoce al equipo</h5>
          <h2
            class="card-title card-title-heading center service-heading-inicio"
          >
            Nuestro equipo
          </h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="card-teams">
          <div class="trabajador-1"></div>
          <div class="container-teams">
            <h2>Raúl Morales</h2>
            <p class="title-teams">Fundador</p>
            <p>raul.morales@consultoradevpro.cl</p>
            <p><button class="button-teams">Contacto</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card-teams">
          <div class="trabajador-2"></div>
          <div class="container-teams">
            <h2>Luis Caroca</h2>
            <p class="title-teams">Fundador/Desarrollador</p>
            <p>luis.caroca@consultoradevpro.cl</p>
            <p><button class="button-teams">Contacto</button></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card-teams">
          <div class="trabajador-3"></div>

          <div class="container-teams">
            <h2>Jose Dinamarca</h2>
            <p class="title-teams">Fundador/Desarrollador</p>
            <p>jose.dinamarca@consultoradevpro.cl</p>
            <p><button class="button-teams">Contacto</button></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.section-about-3 {
  padding: 4.5rem;
}

.trabajador-1 {
  background-image: url("../img/about/person-1.jpg") !important;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.trabajador-2 {
  background-image: url("../img/about/person-2.jpg") !important;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.trabajador-3 {
  background-image: url("../img/about/person-3.jpg") !important;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.row-teams {
  margin: 10%;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card-teams {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Some left and right padding inside the container */
.container-teams {
  padding: 0 16px;
}

/* Clear floats */
.container-teams::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title-teams {
  color: grey;
}

.button-teams {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #2c7bfe;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button-teams:hover {
  background: linear-gradient(#2c7bfe 20%, #176cf5 50%);
}

.content {
  --position: relative;
  display: flex;
}

.grid-item-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/about/about-1.jpg");
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.grid-item-1:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-item-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/about/about-2.jpg");
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.grid-item-2:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-item-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/about/about-3.jpg");
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.grid-item-3:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-item-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/about/about-4.jpg");
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.grid-item-4:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-item-5 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/about/about-5.jpg");
  background-color: #03afff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.grid-item-5:hover {
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

.centrado {
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
  color: #004ff0 !important;
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
  background-image: url("../img/about/about-6.jpg") !important;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  position: absolute;
}

.accordion .accordion-item + .accordion-item {
  margin-top: 0.7rem;
}

.accordion-body {
  text-align: left;
  color: #5f6973;
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

@media (max-width: 991px) {
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

.content-service {
  display: flex;
}

.items-service {
  padding-top: 50px;
}

.icon-service {
  margin-left: 10%;
  margin-right: 20px;
  margin-bottom: 20px;
}

.box-service {
  padding-top: 10px;
}

.icon-title {
  font-size: 1.125rem;
  font-weight: bold;
}

.icon-descripcion {
  font-size: 0.775rem;
  margin-top: 0.5rem;
  color: #5f6973;
}
</style>
