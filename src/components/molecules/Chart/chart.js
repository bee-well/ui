import ApexCharts from "react-apexcharts"

const Chart = ({ data }) => {
    const x = data.map(mood => mood.reported)
    const y = data.map(mood => mood.mood)

    return (
        <ApexCharts 
            series={[
                {
                    name: "Mood",
                    data: y
                }
            ]}

            options={{
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: x,
                    tickAmount: 10,
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd/M')
                        }
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    style: {
                        fontSize: "16px",
                        color: '#666'
                    }
                },
                fill: {
                    colors: ["#00BA88"],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [ '#ED2E7E'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    },
                },
                markers: {
                    size: 4,
                    colors: ["#FFA41B"],
                    strokeColors: "#fff",
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    min: 0,
                    max: 5,
                    title: {
                        text: '',
                    },
                }
            }}
        />
    )
}

export default Chart