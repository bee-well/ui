import ApexCharts from "react-apexcharts"

const CircularProgressBar = ({percentage, title}) => {
  return (
    <ApexCharts
      series={[percentage]}
      type="radialBar"
      height={200}
      width={160}
      options={{
        chart: {
          height: 200,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
             hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: false,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.05
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0,
              dropShadow: {
                enabled: true,
                top: 1,
                left: 0,
                blur: 6,
                opacity: 0.05
              }
            },
            dataLabels: {
              show: true,
              name: {
                offsetY: -15,
                show: true,
                color: '#aaa',
                fontSize: '14px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: '#2C3E50',
                fontSize: '32px',
                show: true,
                offsetY: 10
              }
            }
          }
        },
        fill: {
          colors: ["#F59E11"],
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#F39C12'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [title],
      }}
    />
  )
}

export default CircularProgressBar