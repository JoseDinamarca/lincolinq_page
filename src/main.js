import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

library.add(faSquareFacebook, faInstagram, faEnvelope, faWhatsapp, faCopyright)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");

import "bootstrap/dist/js/bootstrap.js";