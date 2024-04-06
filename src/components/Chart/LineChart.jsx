import React, { useEffect, useRef } from "react"
import { Chart, } from "chart.js"
import { format } from "date-fns"
const LineChart = ({ yearlyData}) => {
    const canvas = useRef(null)
    useEffect(() => {
        const labels = yearlyData.map(item => format(item.date, 'MMMM dd, yyyy'))
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: yearlyData.map(item => item.price),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: {
                    target: 'origin',
                    above: 'transparent',
                }

            }]
        };
        if (canvas.current) {
            const LineChart = new Chart(canvas.current, {
                type: 'line',
                data,
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Target Report',
                            font: {
                                weight: "bold"
                            }
                        },
                        legend: {
                            display: false
                        }
                    },
                    elements: {
                        point: {
                            borderWidth: 3,
                            hoverBorderWidth: 15,
                            pointStyle: "circle"
                        },
                        line: {
                            borderCapStyle: "round"
                        }
                    }

                },
            })

            return (() => {
                LineChart.destroy()
            })
        }
    }, [canvas.current, yearlyData])
    return (
        <div >
           


            <canvas width={700} ref={canvas}></canvas>
        </div>
    )
}

export default LineChart