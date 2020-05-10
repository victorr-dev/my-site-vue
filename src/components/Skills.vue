<template>
    <section id="skills" class="section">
        <h2 class="title is-2">
          Conocimientos
        </h2>
        <div class="columns is-multiline">
          <div v-for="item in skills" :key="item.labels[0]" class="column">
            <Skill
              :title=item.labels[0]
              :percentage=item.datasets[0].data[0]
              :options='options'
              :data='item'/>
          </div>
        </div>
    </section>
</template>
<script>
import data from '@/utils/dataSkills'
import Skill from '@/components/Skill'
export default {
  name: 'Skills',
  components: { Skill },
  data () {
    return {
      skills: [],
      options: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.skills = data.data
      this.options = data.options
    }
  }
}
</script>
<style scoped>
  .columns {max-width: 100%;}
  @media(max-width: 767px) {
  .custom-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
