import ApexChart from "react-apexcharts"

const PercentChart = ({ percent, title }) => {
  const series = [percent]
  const options = {
    chart: {
      height: 200,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: 'white',
            offsetY: 70
          }
          ,
          value: {
            offsetY: -10,
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'white',
            formatter:
                function (val) {
                  return val + "%"
                }
          }
        }
      }
    },
    fill: {
      type: 'solid',
      colors: ['#ecd800'],
    },
    stroke: {
      dashArray: 0
    },
    labels: [title],
  }

  return (
      <ApexChart options={options} series={series} type="radialBar" width={150} height={200}/>
  )
}

export default PercentChart