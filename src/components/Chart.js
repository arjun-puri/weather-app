import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = (props) => {
    const { data, name } = props
    // [{x: 1, y: 2}, {x: 2, y:1}]
    const labels = data.map(ele => ele.x);
    const values = data.map(ele => ele.y);
    const customObject = {
        labels: labels,
        data: {
            datasets: [{
                data: values
            }]
        }
    }

    console.log(customObject)

    return (
        <>
            <Line data={customObject} />
        </>
    )
}

// npm install --save react-chartjs-2 chart.js

export default Chart;