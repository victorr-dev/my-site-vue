<template>
    <section class="section">
        <line-chart :options='options' :chart-data='data' />
    </section>
</template>
<script>
import LineChart from '@/utils/line.js'
export default {
  name: 'Skill',
  components: {
    LineChart
  },
  props: ['options', 'data']
}
</script>
