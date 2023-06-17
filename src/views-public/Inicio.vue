<template>
  <div>
    <div>
      <Carousel />
    </div>

    <div>
      <SobreNosotrosInicio />
    </div>

    <div>
      <ServicioInicio />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import SobreNosotrosInicio from "../components/SobreNosotrosInicio.vue";
import ServicioInicio from "../components/ServicioInicio.vue";

export default {
  components: {
    Carousel,

  },
};
</script>
