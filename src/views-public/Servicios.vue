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
          Servicios
        </li>
      </ol>
    </div>
  </nav>

  <section class="section-service">
    <div class="container mb-5 mb-md-6 mb-xl-10">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 text-center">
          <h2 class="card-title card-title-heading center">Servicios</h2>
          <p class="service-p">
            Ayudamos a las empresas a transformar su negocio y su tecnología
          </p>
        </div>
      </div>
    </div>
    <div class="row row-service">
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-mouse"
              viewBox="0 0 16 17"
            >
              <path
                d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Soporte 24/7</h3>
          <p class="service-p">
            Ofrecemos soporte 24/7 a nuestros clientes, procurando que tu
            negocio se encuentre en óptimas condiciones.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              class="bi bi-chat-text"
              viewBox="0 0 15 17"
            >
              <path
                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              />
              <path
                d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Chat online</h3>
          <p class="service-p">
            Podrás estar en contacto con tus clientes de manera más comoda,
            rápida y segura, tanto para ti, como para tus propios clientes.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              class="bi bi-box2-heart"
              viewBox="0 0 16 17"
            >
              <path
                d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"
              />
              <path
                d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Desarrollo a medida</h3>
          <p class="service-p">
            Estudiaremos tu caso para dar con el resultado que más se acomode a
            tus necesidades.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-pc-display"
              viewBox="0 0 17 17"
            >
              <path
                d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Prestación de insumos</h3>
          <p class="service-p">
            En caso de que sea necesario, se hará prestación de los insumos que
            tu negocio requiera.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              class="bi bi-clipboard2-check"
              viewBox="0 0 16 17"
            >
              <path
                d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
              />
              <path
                d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"
              />
              <path
                d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Cotización de proyecto</h3>
          <p class="service-p">
            ¿No sabes qué necesitas? Comentanos tu idea y tus necesidades y
            nosotros te presentaremos una cotización acorde a tus
            requerimientos.
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-xl-4 column">
        <div class="card-service">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              class="bi bi-heart-pulse"
              viewBox="0 -1 16 17"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z"
              />
              <path
                d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"
              />
            </svg>
          </div>
          <h3 class="service-heading">Diagnóstico de hardware</h3>
          <p class="service-p">
            Si posees equipo en mal estado, te podemos ayudar a con su revisión
            para lograr recuperarlo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.section-service {
  padding: 4.5rem 0;
}

.row-service {
  margin-left: 12% !important;
  margin-right: 12% !important;
}

.service-heading {
  padding-top: 30px;
  font-family: sourcesanspro !important;
  font-size: 1.5em;
}

.service-p {
  padding-top: 20px;
  color: #5f6973;
}

.column {
  width: 100%;
  padding: 0 1em 1em 1em;
  text-align: center;
}

.card-service {
  width: 100%;
  height: 100%;
  padding: 2em 4em;
  background: linear-gradient(#ffffff 50%, #2c7bfe 50%);
  background-size: 100% 200%;
  background-position: 0 2.5%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #d4d4e1;
  border-style: solid;
  cursor: pointer;
  transition: 0.5s;
}

.icon-wrapper {
  background-color: #2c7bfe;
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
  align-items: center;
}

.card-service:hover {
  background-position: 0 100%;
}

.card-service:hover .icon-wrapper {
  background-color: #ffffff;
  color: #2c7bfe;
}

.card-service:hover h3 {
  color: #ffffff;
}

.card-service:hover p {
  color: #f0f0f0;
}

@media screen and (min-width: 768px) {
  section {
    padding: 0 2em;
  }

  .column {
    flex: 0 50%;
    max-width: 50%;
  }
}

@media screen and (min-width: 992px) {
  section {
    padding: 1em 3em;
  }

  .column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}
</style>
