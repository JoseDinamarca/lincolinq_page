import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faInstagram)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
