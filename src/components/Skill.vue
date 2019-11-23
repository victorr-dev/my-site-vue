<template>
  <div class="box">
    <h2 class="subtitle has-text-centered">{{title}}</h2>
    <div class="conteiner-percent">
      <div class="pie-chart">
        <line-chart :width="200" :height="200" :options='options' :chart-data='data' />
      </div>
      <div class="text-percent">
        <h2 class="subtitle has-text-centered color-percent">{{percentage}}%</h2>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from '@/utils/line.js'
export default {
  name: 'Skill',
  components: {
    LineChart
  },
  props: [
    'options',
    'data',
    'title',
    'percentage']
}
</script>
<style scoped>
.conteiner-percent {
  padding: 0 0;
  position: relative;
}

.pie-chart {
  width: 100%;
  margin: auto;
  margin-top: 0px;
  position: relative;
  z-index: 60;
}

.text-percent {
  background-color: rgb(202, 150, 130);
  margin: auto;
  position: absolute;
  top: 70%;
  right: 40%;
  z-index: 100;
  background: transparent;
}

.color-percent{
  color: whitesmoke;
}
</style>
