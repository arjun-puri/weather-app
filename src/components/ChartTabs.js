import React from 'react'
import Chart from './Chart'
import { getDateInIST } from '../helpers/UtilityFunctions'

const ChartTabs = (props) => {
    // const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
    const options = { hour: 'numeric', timeZone: 'Asia/Kolkata' }
    return (
        <div>
            <ol className="flex items-center justify-around">
                <li className="border-b-red-400 border-b-8">Temperature</li>
                <li className="border-b-gray-400 border-b-8">Humidity</li>
                <li className="border-b-green-200 border-b-8">Wind speed</li>
            </ol>
            <div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.temperature}))} name="Temperature" /></div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.humidity}))} name="Humidity" /></div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.windspeed}))} name="Wind Speed" /></div>
            </div>
        </div>
    )
}

export default ChartTabs;