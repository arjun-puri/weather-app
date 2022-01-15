import React from 'react'

const Today = ({temp, pressure, humidity, wind_speed, iconImg, condition}) => {
    // converts temperature from kelvin to celsius
    const convertKelvinToCelsius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(2);
    }

    // converts temperature from kelvin to fahrenheit
    const convertKelvinToFahrenheit = (tempKelvin) => {
        return (1.8 * ( (tempKelvin - 273.15) + 32 )).toFixed(2);
    }

    // const currTempC = convertKelvinToCelsius(temp);
    // const currTempF = convertKelvinToFahrenheit(temp);

    return(
    <div>
        <img src={iconImg} alt={condition}/>
        <span></span>
        <span></span>
    </div>
    )
}

export default Today;
