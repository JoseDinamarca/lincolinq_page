<template>
  <main>
    <Header />

    <loading-screen v-if="isLoading"></loading-screen>
    <router-view
    class="app-container"
      v-if="!isLoading"
      v-slot="{ Component, route }"
    >
      <transition
        name="page-slide"
        mode="out-in"
      >
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

    <Footer/>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
    background-color: #b3f7b3; /* Reemplaza con el color de fondo deseado */
  }

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SobreNosotrosInicio from "./components/SobreNosotrosInicio.vue";
import ServicioInicio from "./components/ServicioInicio.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  components: {
    Header,
    Footer,
    SobreNosotrosInicio,
    ServicioInicio,
    LoadingScreen,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
