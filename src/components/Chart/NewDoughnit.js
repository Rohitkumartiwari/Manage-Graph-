import React, { useEffect, useRef } from "react"
import { Chart, } from "chart.js"
import { format } from "date-fns"
const DoughnutChart = ({ dataValue,totalSum}) => {
   console.log(dataValue,totalSum)
    const canvas = useRef(null)
    useEffect(() => {
     
        const difference = totalSum - dataValue;
        const data = {
            labels: ["Difference", "Data Value"],
            datasets: [{
                label: "Price Range",
                data: [difference, dataValue],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                ],
                borderWidth: 1,
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
    }, [canvas.current,dataValue,totalSum])
    return (
        <div >
           


            <canvas  ref={canvas}></canvas>
        </div>
    )
}

export default DoughnutChart