import { useWeatherContext } from "../../state/WeatherAppContext";
import { convertKelvinToCelsius } from "../../helpers/UtilityFunctions";

function Today() {
  const weather = useWeatherContext();

  const otherDetailsRender = ([ detailName, detailValue ]) => {
    return <li key={detailName}>
      {detailName}: {detailValue}
    </li>
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <img className="w-16 md:w-auto" src={weather.iconImg} alt={weather.condition} />
      <div className="text-2xl md:text-3xl font-bold pl-2 pr-2">{convertKelvinToCelsius(weather.temp)}<sup className="font-normal text-sm md:text-xl">°C</sup></div>
      <div className="text-xs text-gray-500 pl-2 pr-2">
        <ul>
          {[
            [ "Pressure", weather.pressure ],
            [ "Humidity", weather.humidity ],
            [ "Wind Speed", weather.wind_speed ],
          ].map((detail) => otherDetailsRender(detail))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
