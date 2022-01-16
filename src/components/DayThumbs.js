import React from 'react'
import ReactDOM from 'react-dom'
import { convertKelvinToCelsius, convertKelvinToFahrenheit, getDateInIST } from '../helpers/UtilityFunctions'

const DayThumbs = (props) => {
    const { date, min, max, iconUrl, condition } = props.dayForecast
    const minC = convertKelvinToCelsius(min);
    const maxC = convertKelvinToCelsius(max);

    return (
        <div>
            <span>{getDateInIST(date)}</span>
            <img src={iconUrl} alt={condition} />
            <div>
                <span>{minC}</span>
                <span>{maxC}</span>
            </div>
        </div>
    )
}

export default DayThumbs;