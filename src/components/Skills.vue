<template>
    <section class="section">
      <div class="columns">
        <div class="column">
          <Skill :options='options' :data='dataCollection'/>
        </div>
        <div class="column">
          <Skill :options='options' :data='dataCollection'/>
        </div>
        <div class="column">
          <Skill :options='options' :data='dataCollection'/>
        </div>
      </div>
    </section>
</template>
<script>
import Skill from '@/components/Skill'
export default {
  name: 'Skills',
  components: {
    Skill
  },
  data () {
    return {
      dataCollection: null,
      options: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: ['NodeJs'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#e56060', '#ffffff'],
            data: [90, 10],
            borderWidth: 1
          }
        ]
      }

      this.options = {
        legend: {
          display: false
        },
        tooltips: false,
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
