import { useState } from "react";
import axios from "axios";
import { useWeatherDispatchContext } from "../../state/WeatherAppContext";
import { convertKelvinToCelsius } from "../../helpers/UtilityFunctions";

function Search() {
  const [placeQuery, setPlaceQuery] = useState('');
  const weatherDispatch = useWeatherDispatchContext();

  function handlePlaceChange(e) {
    setPlaceQuery(e.target.value);
  }

  async function fetchWeatherData(lon, lat) {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&exclude=minutely,alerts`)
    return data;
  }

  async function fetchLocationData(place) {
      const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&types=place&limit=1`)
      return data;
  }

  function getIcon (iconCode) {
      return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // fetch location and weather data from APIs
    const locationData = await fetchLocationData(placeQuery);
    const [lon, lat] = locationData.features[0].geometry.coordinates;
    const weatherData = await fetchWeatherData(lon, lat)

    const { temp, pressure, humidity, wind_speed, dt } = weatherData.current;

    // get icon code and get the image
    const iconImg = getIcon(weatherData.current.weather[0].icon);

    const condition = weatherData.current.weather[0].main;
    const place  = locationData.features[0].place_name;
    const nextForecast = weatherData.daily.map(dt => 
      ({date: dt.dt, min: dt.temp.min, max: dt.temp.max, iconUrl: getIcon(dt.weather[0].icon), condition: dt.weather.main})
    )

    const chartTrend = weatherData.hourly.slice(0, 24).map(tr => 
      ({date: tr.dt, temperature: convertKelvinToCelsius(tr.temp), humidity: tr.humidity, windspeed: tr.wind_speed})
    )


    weatherDispatch({type: 'SEARCH_SUBMIT', payload: { temp, pressure, humidity, wind_speed, iconImg, condition, dt, place, nextForecast, chartTrend }});
  }

  return (
    <div>
      <form className="flex py-6 max-w-xs lg:max-w-4xl items-center justify-center" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="searchLabel">Search Weather</label>
        <input
          id="searchLabel"
          type="text"
          placeholder="search weather for a place"
          value={placeQuery}
          onChange={handlePlaceChange}
          className="border-2 w-56 lg:w-96 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mx-2 lg:mx-6"
        ></input>
        <input type="submit" className="cursor-pointer rounded-lg font-bold text-white bg-blue-700 text-center py-2 px-4" value="Submit"></input>
      </form>
    </div>
  );
};

export default Search;