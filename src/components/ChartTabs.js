import React from 'react'
import Chart from './Chart'
import { getDateInIST } from '../helpers/UtilityFunctions'

const ChartTabs = (props) => {
    const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' };
    return (
        <div>
            <ol>
                <li>Pressure</li>
                <li>Humidity</li>
                <li>Wind speed</li>
            </ol>
            <div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.pressure}))} name="Pressure" /></div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.humidity}))} name="Humidity" /></div>
                <div><Chart data={props.props.map(dr => ({ "x": getDateInIST(dr.date, options), "y": dr.windspeed}))} name="Wind Speed" /></div>
            </div>
        </div>
    )
}

export default ChartTabs;