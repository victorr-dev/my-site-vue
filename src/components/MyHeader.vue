<template>
    <header>
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="" alt="Not Found" width="112" height="28">
            </a>
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              @click="isOpen = !isOpen"
              :class="{'is-active': isOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu"
            :class="{'is-active': isOpen}">
            <div class="navbar-end">
              <!--router-link class="navbar-item" to="/">Inicio</router-link-->
              <!--router-link class="navbar-item" to="/">Conocimientos</router-link-->
              <!--router-link class="navbar-item" to="/">Proyectos</router-link-->
              <a class="navbar-item" href="/">Inicio</a>
              <a class="navbar-item" href="#skills">Conocimientos</a>
              <!--a class="navbar-item" href="">Proyectos</a-->
            </div>
          </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
