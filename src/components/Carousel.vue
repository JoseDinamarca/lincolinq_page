<template>
  <carousel
    :per-page="1"
    :mouse-drag="true"
    :centerMode="true"
    :autoplay="true"
    :autoplayTimeout="10000"
    :loop="true"
    :speed="650"
  >
    <slide style="text-align: center">
      <router-link to="/quienes_somos"
        ><img src="../assets/logo.png" /><br />Quienes somos
      </router-link>
    </slide>
    <slide style="text-align: center"
      ><router-link to="/contactanos"
        ><img src="../assets/logo.png" /><br />Contáctanos
      </router-link>
    </slide>
    <slide style="text-align: center"
      ><router-link to="/productos_servicios"
        ><img src="../assets/logo.png" /><br />Productos y servicios
      </router-link>
    </slide>
    <slide style="text-align: center"
      ><router-link to="/apoyo_pymes"
        ><img src="../assets/logo.png" /><br />Apoyo a pymes
      </router-link>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "@jambonn/vue-concise-carousel";
import "@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
