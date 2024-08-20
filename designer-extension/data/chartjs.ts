const chartJS = {
  id: 'chart-js',
  name: 'Chart.js',
  preview: true,
  includeAllValues: false,
  fields: [
    { id: 'type', name: 'Type', type: 'select', defaultValue: 'bar', options: [{ id: 'bar', name: 'Bar' },{ id: 'line', name: 'Line' },{ id: 'pie', name: 'Pie' },{ id: 'doughnut', name: 'Doughnut' },{ id: 'radar', name: 'Radar' },{ id: 'polarArea', name: 'Polar Area' } ] },
    { id: 'data', name: 'Data', type: 'object', defaultValue: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    }},
  ],
  libraryCSS: ``,
  libraryJS: `https://cdn.jsdelivr.net/npm/chart.js`,
  javascript: `
<script>
const ctx = document.getElementById('myChart').getContext('2d');
const chartConfig = __DYNAMIC_CONFIG__;
const myChart = new Chart(ctx, chartConfig);
</script>
  `.trim(),
  html: `
<canvas id="myChart" width="400" height="400"></canvas>
  `.trim()
}

export default chartJS;
