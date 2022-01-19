import React from "react";
import { convertKelvinToCelsius, convertKelvinToFahrenheit} from '../helpers/UtilityFunctions'

const Today = ({ data }) => {
  const { temp, pressure, humidity, wind_speed, iconImg, condition } = data;  

  const currTempC = convertKelvinToCelsius(temp);
  // const currTempF = convertKelvinToFahrenheit(temp);

  const otherDetailsRender = ([ detailName, detailValue ]) => {
    return <li key={detailName}>
      {detailName}: {detailValue}
    </li>
  };

  return (
    <div className="flex items-center justify-between">
      <img src={iconImg} alt={condition} />
      <div className="text-3xl font-bold pl-2 pr-2">{currTempC}<sup className="font-normal text-xl">°C</sup></div>
      <div className="text-sm text-gray-500 pl-2 pr-2">
        <ul>
          {[
            [ "Pressure", pressure ],
            [ "Humidity", humidity ],
            [ "Wind Speed", wind_speed ],
          ].map((detail) => otherDetailsRender(detail))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
