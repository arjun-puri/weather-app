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
