import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = (props) => {
    const { data, name } = props
    // [{x: 1, y: 2}, {x: 2, y:1}]
    const labels = data.map(ele => ele.x);
    const values = data.map(ele => ele.y);
    const customObject = {
        labels: labels,    
        datasets: [{
            label: name,
            data: values
        }]
    }
    // const customObject = {
    //     labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    //     datasets: [
    //         {
    //             label: name,
    //             data: [1,2,3,4,5,6,7]
    //         }
    //     ]
    // }

    // console.log(customObject)

    return (
        <>
            <Line data={customObject} />
        </>
    )
}

// npm install --save react-chartjs-2 chart.js

export default Chart;