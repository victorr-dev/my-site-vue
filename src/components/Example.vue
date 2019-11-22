<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :options='options'></line-chart>
  </div>
</template>

<script>
import LineChart from '@/utils/line.js'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null,
      options: {
        legend: {
          display: true
        },
        tooltips: false,
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['NodeJs'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#e56060', '#e56077', '#aa6060'],
            data: [90, 10],
            borderWidth: 10
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
