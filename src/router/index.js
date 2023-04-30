import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "../views/Inicio.vue"
import Servicios from "../views/Servicios.vue"
import ApoyoPymes from "../views/ApoyoPymes.vue"
import Contactanos from "../views/Contactanos.vue"
import SobreNosotros from "../views/SobreNosotros.vue"
import PreguntasFrecuentes from "../views/PreguntasFrecuentes.vue"

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
