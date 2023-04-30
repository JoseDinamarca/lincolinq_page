<template>
  <section class="section-service">
    <div id="progress">
      <span id="progress-value"><i class="bi bi-arrow-up-short"></i></span>
    </div>
    <div class="container mb-5 mb-md-6 mb-xl-10">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-8 text-center">
          <h5 class="card-title service-subheading-inicio">Servicios</h5>
          <h2
            class="card-title card-title-heading center service-heading-inicio"
          >
            Ayudamos a las empresas a transformar su negocio y tecnología
          </h2>
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
      <div class="container mb-5 mb-md-6 mb-xl-10">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-8 text-center">
            <button class="btn service-button-inicio">
              <router-link to="/servicios" class="nav-link navbar-element">
                Más Servicios <i class="bi bi-arrow-right"></i>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.service-button-inicio {
  left: 0 !important;
  height: 50px !important;
  float: center !important;
  margin-top: 5% !important;
  background-color: #2c7bfe !important;
  color: white !important;
}

.service-button-inicio:hover {
  left: 0 !important;
  height: 50px !important;
  float: center !important;
  margin-top: 5% !important;
  background: linear-gradient(#2c7bfe 20%, #176cf5 50%) !important;
  transition: 1s;
  color: white !important;
}

.section-service {
  padding: 4.5rem 0;
}

.row-service {
  margin-left: 12% !important;
  margin-right: 12% !important;
}

.service-heading-inicio {
  padding-top: 10px;
  font-family: sourcesanspro !important;
}

.service-subheading-inicio {
  transform: translate(0px);
  font-size: 16px;
  margin-bottom: 0.3125rem;
  text-transform: uppercase;
  color: #004ff0 !important;
  font-family: sourcesanspro;
  text-align: center;
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

#progress {
  position: fixed;
  bottom: 20px;
  right: 10px;
  height: 60px;
  width: 60px;
  display: none;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

#progress-value {
  display: block;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  background-color: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 30px;
  color: #004ff0;
}
</style>

<script>
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#004ff0 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
</script>
