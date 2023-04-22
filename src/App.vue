<template>
  <main>
    <Header />

    <router-view v-slot="{ Component, route }">
      <transition name="page-slide" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

    <Footer />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SobreNosotrosInicio from "./components/SobreNosotrosInicio.vue";
import ServicioInicio from "./components/ServicioInicio.vue";


export default {
  components: {
    Header,
    Footer,
    SobreNosotrosInicio,
    ServicioInicio,
  },
};
</script>
