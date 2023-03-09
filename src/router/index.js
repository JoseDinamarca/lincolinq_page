import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from '../views/Inicio.vue'
import ProductosServicios from '../views/ProductosServicios.vue'
import ApoyoPymes from '../views/ApoyoPymes.vue'
import Contactanos from '../views/Contactanos.vue'
import SobreNosotros from '../views/SobreNosotros.vue'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue'
import Construccion from '../views/Construccion.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/productos_servicios',
    name: 'productosservicios',
    component: ProductosServicios
  },
  {
    path: '/apoyo_pymes',
    name: 'apoyopymes',
    component: ApoyoPymes
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: Contactanos
  },
  {
    path: '/sobre_nosotros',
    name: 'sobrenosotros',
    component: SobreNosotros
  },
  {
    path: '/preguntas_frecuentes',
    name: 'preguntasfrecuentes',
    component: PreguntasFrecuentes
  },
  {
    path: '/sitio_construccion',
    name: 'sitioconstruccion',
    component: Construccion
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: Inicio
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
