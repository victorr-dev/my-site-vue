
const hightRanking = 100
const blueColor1 = '#0B4980'
const blueColor2 = '#63B6FF'
const blueColor3 = '#1793FF'
const blueColor4 = '#1263CC'

const calculateRanking = (value) => {
  return [value, hightRanking - value]
}

const data = [{
  labels: ['NodeJs'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor1, '#ffffff'],
      data: calculateRanking(90),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Vue'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor2, '#ffffff'],
      data: calculateRanking(85),
      borderWidth: 1
    }
  ]
}, {
  labels: ['SQL / PLSQL'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor4, '#ffffff'],
      data: calculateRanking(70),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Flutter'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor1, '#ffffff'],
      data: calculateRanking(60),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Java'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor2, '#ffffff'],
      data: calculateRanking(60),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Xamarin'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor3, '#ffffff'],
      data: calculateRanking(80),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Git'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor4, '#ffffff'],
      data: calculateRanking(90),
      borderWidth: 1
    }
  ]
}, {
  labels: ['Docker'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: [blueColor4, '#ffffff'],
      data: calculateRanking(60),
      borderWidth: 1
    }
  ]
}]

const options = {
  legend: {
    display: false
  },
  tooltips: false,
  responsive: true,
  maintainAspectRatio: false
}

export default { data, options }
