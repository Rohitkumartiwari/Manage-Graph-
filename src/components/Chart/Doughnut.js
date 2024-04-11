import React, { useEffect, useRef } from "react"
import { Chart, } from "chart.js"
import { format } from "date-fns"
const DoughnutChart = ({ yearlyData}) => {
    console.log(yearlyData,"yearlyData")
    const canvas = useRef(null)
    useEffect(() => {
        const labels = yearlyData.map(item => format(item.date, 'MMMM dd, yyyy'))
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
            datasets: [{
                label: 'Price Range',
                data: yearlyData.map(item => item.price),
                fill: true,
                
                tension: 0.1,
              
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                  ],
                  borderWidth: 1,
                fill: {
                    target: 'origin',
                    
                }

            }],
            
        };
        if (canvas.current) {
            canvas.current.width=1000
         
            
            const BarChart = new Chart(canvas.current, {
                type: 'doughnut',
                data,
                options: {
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
                            display: true
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
                BarChart.destroy()
            })
        }
    }, [canvas.current, yearlyData])
    return (
        <div >
           


            <canvas  ref={canvas}></canvas>
        </div>
    )
}

export default DoughnutChart