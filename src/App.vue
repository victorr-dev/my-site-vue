<template>
  <div id="app">
    <Header/>
    <!--router-view/-->
    <Home/>
    <Skills/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/MyHeader'
import Footer from '@/components/MyFooter'
import Skills from '@/components/Skills'
import Home from '@/views/Home'

export default {
  components: {
    Header,
    Home,
    Footer,
    Skills
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
