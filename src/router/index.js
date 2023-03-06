import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from '../views/Inicio.vue'
import ProductosServicios from '../views/ProductosServicios.vue'
import ApoyoPymes from '../views/ApoyoPymes.vue'
import Contactanos from '../views/Contactanos.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue'

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
    path: '/quienes_somos',
    name: 'quienessomos',
    component: QuienesSomos
  },
  {
    path: '/preguntas_frecuentes',
    name: 'preguntasfrecuentes',
    component: PreguntasFrecuentes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
