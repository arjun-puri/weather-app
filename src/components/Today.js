import React from "react";

const Today = ({ data }) => {
  const { temp, pressure, humidity, wind_speed, iconImg, condition } = data;
  // converts temperature from kelvin to celsius
  const convertKelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(2);
  };

  // converts temperature from kelvin to fahrenheit
  const convertKelvinToFahrenheit = (tempKelvin) => {
    return (1.8 * (tempKelvin - 273.15 + 32)).toFixed(2);
  };

  const currTempC = convertKelvinToCelsius(temp);
  // const currTempF = convertKelvinToFahrenheit(temp);

  const otherDetailsRender = ([ detailName, detailValue ]) => {
    return <li key={detailName}>
      {detailName}: {detailValue}
    </li>
  };

  return (
    <div>
      <img src={iconImg} alt={condition} />
      <div>{currTempC}°C</div>
      <div>
        <ul>
          {[
            [ "Humidity", humidity ],
            [ "Pressure", pressure ],
            [ "Wind Speed", wind_speed ],
          ].map((detail) => otherDetailsRender(detail))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
