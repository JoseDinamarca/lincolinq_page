import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "../views-public/Inicio.vue"
import Servicios from "../views-public/Servicios.vue"
import ApoyoPymes from "../views-public/ApoyoPymes.vue"
import Contactanos from "../views-public/Contactanos.vue"
import SobreNosotros from "../views-public/SobreNosotros.vue"
import PreguntasFrecuentes from "../views-public/PreguntasFrecuentes.vue"
import Post from "../views-public/post.vue"
import PoliticasDePrivacidad from "../views-public/PoliticasDePrivacidad.vue"
import TerminosDeUso from "../views-public/TerminosDeUso.vue"

import Login from "../views-admin/login.vue"


const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/servicios",
    name: "servicios",
    component:Servicios,
  },
  {
    path: "/apoyo_pymes",
    name: "apoyopymes",
    component: ApoyoPymes,
  },
  {
    path: "/contactanos",
    name: "contactanos",
    component: Contactanos,
  },
  {
    path: "/sobre_nosotros",
    name: "sobrenosotros",
    component: SobreNosotros,
  },
  {
    path: "/preguntas_frecuentes",
    name: "preguntasfrecuentes",
    component: PreguntasFrecuentes,
  },
  {
    path: "/post",
    name: "post",
    component: Post,
  },
  {
    path: "/politicas_de_privacidad",
    name: "politicas_de_privacidad",
    component: PoliticasDePrivacidad,
  },
  {
    path: "/termino_de_uso",
    name: "termino_de_uso",
    component: TerminosDeUso,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: Inicio,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(){
    return {top: 0}
}
})

;

export default router;
