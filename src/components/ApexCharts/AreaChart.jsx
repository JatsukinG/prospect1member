import ApexChart from "react-apexcharts"

const AreaChart = () => {
  const options = {
    chart: {
      foreColor: 'white',
      height: 300,
      toolbar: {
        show: false
      },
    },
    colors: ['#ecd800'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      categories: ['Resistencia', 'Velocidad', 'Agilidad', 'Potencia Inferior', 'Tren Superior', 'Zona Media', 'Flexibilidad']
    },
    yaxis: {
      show: true,
    },
    tooltip: {
      colors: ['black'],
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    grid: {
      borderColor: '#797979',
      strokeDashArray: 7,
    }
  }

  const series = [{
    name: 'series-1',
    data: [40, 48, 50, 50, 49, 60, 70]
  }
  ]

  return (
      <ApexChart options={options} series={series} type="area" width="100%" height={300} className="text-white"/>
  )
}

export default AreaChart