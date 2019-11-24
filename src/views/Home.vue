<template>
  <section class="hero is-medium is-dark has-background">
    <img
      src="../assets/Background_hero.png"
      alt="Not Found Image"
      class="hero-background is-transparent">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Victor Sinuhé Ruiz Pérez
        </h1>
        <h2 class="subtitle">
          Desarrollador Front-end, Back-end y Dispositivos Móviles.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>
<style lang="sass" scoped>
.hero
  &.has-background
    position: relative
    overflow: hidden
  &-background
    position: absolute
    object-fit: cover
    object-position: center center
    width: 100%
    height: 100%
    &.is-transparent
      opacity: 0.6
</style>
