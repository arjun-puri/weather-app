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
    Filler,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

// removing grid lines
ChartJS.defaults.scale.grid.drawOnChartArea = false;

const Chart = (props) => {
    const { data, name } = props
    let lineColor = 'rgba(255, 0, 0, 0.4)';
    switch(name) {
        default: {lineColor = 'rgba(183, 193, 172, 0.4)'; break;}
        case 'Temperature': {lineColor = 'rgba(255, 0, 0, 0.4)'; break;}
        case 'Humidity': {lineColor = 'rgba(23,67,88,0.4)'; break;}
    }

    const labels = data.map(ele => {
        return ele.x.toString().split(', ')[1];
    });
    // const labels = data.map(ele => ele.x);
    const values = data.map(ele => ele.y);
    const customOptions = {
        plugins: {
            legend: {
                display: false,
            },

        },
        scales: {
            y: {
                display: false,
            },
            x: {
                display: true,
            }
        }
    }
    const customData = {
        labels: labels,   
        datasets: [{
            backgroundColor: lineColor,
            borderColor: lineColor,
            fill: 'origin',
            label: name,
            data: values,
        }],

    }
    return (
            <Line data={customData} options={customOptions} />
    )
}

export default Chart;