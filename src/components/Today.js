import React from "react";
import { convertKelvinToCelsius} from '../helpers/UtilityFunctions'

const Today = ({ data }) => {
  const { temp, pressure, humidity, wind_speed, iconImg, condition } = data;  

  const currTempC = convertKelvinToCelsius(temp);

  const otherDetailsRender = ([ detailName, detailValue ]) => {
    return <li key={detailName}>
      {detailName}: {detailValue}
    </li>
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <img className="w-16 md:w-auto" src={iconImg} alt={condition} />
      <div className="text-2xl md:text-3xl font-bold pl-2 pr-2">{currTempC}<sup className="font-normal text-sm md:text-xl">°C</sup></div>
      <div className="text-xs text-gray-500 pl-2 pr-2">
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
