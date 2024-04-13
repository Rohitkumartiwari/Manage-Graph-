import React, { useEffect, useRef } from "react"
import { Chart, } from "chart.js"
import { format } from "date-fns"
const BarChart = ({ yearlyData,setDataValue}) => {
    console.log(yearlyData,"yearlyData")
    const canvas = useRef(null)
    useEffect(() => {
        const labels = yearlyData.map(item => format(item.date, 'MMMM dd, yyyy'))
        const data = {
            labels:labels,
            datasets: [{
                label: 'Price Range',
                data: yearlyData.map(item => item.price),
                fill: true,
                
                tension: 0.1,
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
                  borderWidth: 1,
                fill: {
                    target: 'origin',
                    
                }

            }],
            
        };
        if (canvas.current) {
            canvas.current.width=1000
         
            
            const BarChart = new Chart(canvas.current, {
                type: 'bar',
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
                    },
                    onClick: (event, elements) => {
                        if (elements.length > 0) {
                            const clickedIndex = elements[0].index;
                            const clickedPrice = yearlyData[clickedIndex].price;
                            setDataValue(clickedPrice);
                            console.log("Clicked Price:", clickedPrice);
                            // Do whatever you want with the clicked price value
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

export default BarChart