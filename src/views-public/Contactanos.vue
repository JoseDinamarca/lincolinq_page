<template>
  <div id="progress">
    <span id="progress-value"><i class="bi bi-arrow-up-short"></i></span>
  </div>
  <nav
    aria-label="breadcrumb "
    class="positioning"
    style="background-color: rgba(22, 201, 22, 0.815) ;--bs-breadcrumb-divider: '»'"
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
          Contáctanos
        </li>
      </ol>
    </div>
  </nav>
  <div
    class="section"
    style="padding: 4.5rem 0"
  >
    <div class="container">
      <div class="row">
        <header class="col-12">
          <div
            class="section-heading"
            style="opacity: 1"
          >
            <h1 class="title-contact">Contáctanos</h1>
          </div>
        </header>
      </div>
    </div>
    <div class="container">
      <div class="row items">
        <div class="col-xl-4 col-md-5 item">
          <div class="contact-info section-bg animate-item">
            <h3 class="title-contact2">Información</h3>
            <ul class="contact-list">
              
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at boostrap-icons md-22"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
                  />
                  <path
                    d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                  />
                </svg>
                <div>
                  <a
                    href="mailto:ggslincolinqk@gmail.com"
                    target="_self"
                    rel="noopener"
                    class="link-contacto"
                    >ggslincolinqk@gmail.com</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-8 col-md-7 item">
          <div
            class="contact-form-padding animate-item"
            style="
              translate: none;
              rotate: none;
              scale: none;
              opacity: 1;
              transform: translate(0px);
            "
          >
            <div
              class="wpcf7 js"
              id="wpcf7-f1365-p1110-o1"
              dir="ltr"
              lang="en-US"
            >
              <div class="screen-reader-response">
                <p
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                ></p>
                <ul></ul>
              </div>
              <form @submit.prevent="submitForm">
                <div class="row gutters-default">
                  <div class="col-12">
                    <h3 class="title-contact2">Formulario de contacto</h3>
                  </div>
                  <div class="col-xl-4 col-sm-6 col-12">
                    <div class="form-field">
                      <p>
                        <span data-name="contact-name"
                          ><input
                            size="40"
                            class="form-field-input"
                            id="contact-fullname"
                            autocomplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="text"
                            name="contact-fullname"
                            placeholder="Nombre completo"
                            v-model="name"
                        /></span>
                      </p>
                    </div>
                  </div>
                  <div class="col-xl-4 col-sm-6 col-12">
                    <div class="form-field">
                      <p>
                        <span data-name="contact-phone"
                          ><input
                            size="40"
                            class="form-field-input"
                            id="contact-phone"
                            autocomplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="tel"
                            name="contact-phone"
                            placeholder="Número telefónico"
                            v-model="phone"
                        /></span>
                      </p>
                    </div>
                  </div>
                  <div class="col-xl-4 col-12">
                    <div class="form-field">
                      <p>
                        <span data-name="contact-email"
                          ><input
                            size="40"
                            class="form-field-input"
                            id="contact-email"
                            autocomplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="email"
                            name="contact-email"
                            placeholder="Correo electrónico"
                            v-model="useremail"
                        /></span>
                      </p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-field">
                      <p>
                        <span data-name="contact-message">
                          <textarea
                            cols="40"
                            rows="10"
                            class="form-field-input"
                            id="contact-message"
                            aria-invalid="false"
                            name="contact-message"
                            placeholder="Mensaje"
                            style="resize: none"
                            v-model="message"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-field form-field-checkbox focus">
                      <p>
                        <span
                          class="wpcf7-form-control-wrap"
                          data-name="contact-pp"
                          ><span
                            class="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required"
                            ><span class="wpcf7-list-item first last"
                              ><label
                                ><input
                                  type="checkbox"
                                  name="contact-pp"
                                  value="Acepto la transferencia de datos personales de acuerdo con la Política de Privacidad"
                                  v-model="isChecked"
                                /><span class="list-item-label"
                                  >Acepto la transferencia de datos personales
                                  de acuerdo con las
                                  <router-link
                                    to="/politicas_de_privacidad"
                                    style="color: blue !important"
                                  >
                                    Políticas de privacidad
                                  </router-link>
                                </span></label
                              ></span
                            ></span
                          ></span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-btn">
                      <p>
                        <button
                          v-if="isChecked"
                          class="button-teams"
                        >
                          Enviar mensaje
                        </button>
                      </p>
                    </div>
                    <div
                      v-if="success"
                      class="alert alert-success mt-3"
                      style="text-align: center"
                    >
                      Correo enviado!
                    </div>
                  </div>
                </div>
                <div
                  class="wpcf7-response-output"
                  aria-hidden="true"
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      name: "",
      phone: "",
      useremail: "",
      message: "",
      email: "",
      success: false,
      isChecked: false,
    };
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        phone: this.phone,
        useremail: this.useremail,
        message: this.message,
        email: "contacto@consultoradevpro.cl",
      };
      fetch(process.env.VUE_APP_ROOT_API + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            this.name = "";
            this.phone = "";
            this.useremail = "";
            this.message = "";
            this.success = true;
          } else {
            this.status = "Ocurrió un error al enviar el correo.";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.list-item-label {
  position: relative;
  line-height: 1.25rem;
  font-weight: 400;
  margin: 0;
  font-size: 0.875rem;
  color: #63636b;
  cursor: pointer;
  padding-left: 1rem;
}

.form-field-input {
  display: block;
  font-size: 1rem;
  font-family: sourcesanspro;
  font-weight: 400;
  width: 100%;
  padding: calc(0.75em - 1px) 1rem;
  margin-bottom: 1rem;
  line-height: 1.625;
  border-radius: 6px;
  border: 1px solid #d4d4e1;
  background-color: transparent;
  outline: none;
  color: #303036;
  box-shadow: none;
  appearance: none;
  transition: all 0.2s;
}
.contact-list li a {
  text-decoration: none;
  display: block;
  color: #63636f;
  margin-bottom: 0.25rem;
}

.boostrap-icons.md-22 {
  font-size: 1.375rem;
  width: 1rem;
  height: 1rem;
}
.contact-list {
  list-style: none;
  padding: 0;
  color: #63636f;
}
.contact-list li {
  display: flex;
  margin-bottom: 1.625rem;
  line-height: 1rem;
}

.contact-list li .boostrap-icons {
  margin-right: 0.625rem;
  color: #186adc;
}
.contact-info {
  position: relative;
  padding: 2rem 1.25rem;
  background-color: #57f379ea;
  border-radius: 10px;
  height: 100%;
}
.section-subheading {
  margin-bottom: 0.3125rem;
  text-transform: uppercase;
  color: #2c7bfe;
}

.title-contact2 {
  font-weight: bold;
}

.title-contact {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
