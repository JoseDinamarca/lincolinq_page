<template>
  <div class="landing-page">
    <header class="header">
      <h1 class="title">Bienvenido a mi landing page</h1>
      <p class="subtitle">Descubre nuestro producto increíble</p>
    </header>
    <section class="hero">
      <div class="hero-image">
        <img src="/assets/hero-image.jpg" alt="Imagen del producto" />
      </div>
      <div class="hero-content">
        <h2 class="hero-title">Tu solución perfecta</h2>
        <p class="hero-description">
          Nuestro producto revolucionario te ayudará a resolver todos tus
          problemas. ¡Descúbrelo hoy mismo!
        </p>
        <a href="/producto" class="cta-button">Descubrir más</a>
      </div>
    </section>
    <section class="features">
      <h2 class="section-title">Características principales</h2>
      <ul class="features-list">
        <li class="feature-item">
          <img src="/assets/feature-1.png" alt="Característica 1" />
          <h3 class="feature-title">Característica 1</h3>
          <p class="feature-description">
            Descripción de la característica 1. Explica los beneficios y
            ventajas de esta característica.
          </p>
        </li>
        <li class="feature-item">
          <img src="/assets/feature-2.png" alt="Característica 2" />
          <h3 class="feature-title">Característica 2</h3>
          <p class="feature-description">
            Descripción de la característica 2. Explica los beneficios y
            ventajas de esta característica.
          </p>
        </li>
        <li class="feature-item">
          <img src="/assets/feature-3.png" alt="Característica 3" />
          <h3 class="feature-title">Característica 3</h3>
          <p class="feature-description">
            Descripción de la característica 3. Explica los beneficios y
            ventajas de esta característica.
          </p>
        </li>
      </ul>
    </section>
    <section class="call-to-action">
      <h2 class="section-title">¡Únete a nosotros hoy mismo!</h2>
      <p class="section-description">
        ¿Quieres saber más sobre nuestro producto? ¡Regístrate ahora y
        obtén un descuento especial!
      </p>
      <a href="/registro" class="cta-button">Registrarse</a>
    </section>
    <footer class="footer">
      <p class="footer-text">Derechos de autor © 2023. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
/* Estilos CSS específicos para esta landing page */
.landing-page {
  /* Estilos para el contenedor principal de la landing page */
}

/* Estilos para los diferentes elementos de la landing page, como header, hero, features, etc. */
</style>

