<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options='options'></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from '@/utils/line.js'
import { green, red, pink, black } from 'color-name'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null,
      options: {
        colors: [pink, red, green, black]
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['NodeJs', 'SQL', 'Java', '.Net', 'NoSQL'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#e56060',
            data: [100, 50, 30, 20, 80]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
