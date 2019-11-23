<template>
    <header>
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <router-link class="navbar-item" to="/">Inicio</router-link>
              <router-link class="navbar-item" to="/">Conocimientos</router-link>
              <router-link class="navbar-item" to="/">Proyectos</router-link>
            </div>
          </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>
