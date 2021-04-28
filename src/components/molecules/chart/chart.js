import ApexCharts from "react-apexcharts"

const Chart = ({ data }) => {
    const x = data.map(mood => mood.date)
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
                        show: true,
                        tools: {
                            download: false,
                            zoom: false,
                            reset: false,
                        }
                    }
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: x,
                    tickAmount: 1,
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
                    colors: ["#F59E11"],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#F39C12'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [100, 100]
                    }
                },
                markers: {
                    size: 4,
                    colors: ["#2C3E50"],
                    strokeColors: "#fff",
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    min: 1,
                    max: 5,
                    tickAmount: 4,
                    title: {
                        text: '',
                    },
                },
            }}
        />
    )
}

export default Chart