import React, {useState} from 'react'
import Chart from './Chart'
import { getDateInIST } from '../helpers/UtilityFunctions'

const ChartTabs = (props) => {
    // const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
    const options = { hour: 'numeric', timeZone: 'Asia/Kolkata' }

    const charts = [
        {
            name: "Temperature",
            color: 'red',
        },
        {
            name: "Humidity",
            color: "gray",
        },
        {
            name: "Wind speed",
            color: 'green',
        }
    ]
    const [activeChart, setActiveChart] = useState('Temperature');

    const changeChart = (name) => {
        setActiveChart(name);
    }

    return (
        <div>
            <ol className="flex items-center justify-around">
                {charts.map(chart => {
                    return(<li key={chart.name} onClick={() => changeChart(chart.name)} className={"border-b-"+chart.color+"-400 border-b-8 cursor-pointer shadow-lg p-2 rounded-md"}>{chart.name}</li>)
                })}
            </ol>
            <div>
                { activeChart === "Temperature" ? <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.temperature}))} name="Temperature" /></div> : null }
                { activeChart === "Humidity" ? <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.humidity}))} name="Humidity" /></div> : null }
                { activeChart === "Wind speed" ? <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.windspeed}))} name="Wind Speed" /></div> : null }
            </div>
        </div>
    )
}

export default ChartTabs;