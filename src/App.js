import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Search } from './Components/Search'
import { Card } from './Components/Card';
import { convertKelvinToCelsius } from './helpers/UtilityFunctions'; 

const App = () => {
  const [place, setPlace] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [showCard, setCardView] = useState(false);
  const [unitType, setUnitType] = useState('metric');

  // set page title
  useEffect(() => {
    document.title = `Weather application`;
  })

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  }

  const handleUnitType = (value) => {
    setUnitType(value);
  }

  const fetchWeatherData = async (lon, lat) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&exclude=minutely,alerts`)
    return data;
  }

  const fetchLocationData = async () => {
    const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&types=place&limit=1`)
    return data;
  }

  const getIcon = (iconCode) => {
    //console.log(iconCode)
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fetch location and weather data from APIs
    const locationData = await fetchLocationData()
    const [lon, lat] = locationData.features[0].geometry.coordinates;
    const weatherData = await fetchWeatherData(lon, lat)

    const { temp, pressure, humidity, wind_speed, dt } = weatherData.current;
    // get icon code and get the image
    const iconCode = weatherData.current.weather[0].icon;
    const iconImg = getIcon(iconCode);

    const condition = weatherData.current.weather[0].main;
    const place  = locationData.features[0].place_name;
    const nextForecast = weatherData.daily.map(dt => 
      {
        return {date: dt.dt, min: dt.temp.min, max: dt.temp.max, iconUrl: getIcon(dt.weather[0].icon), condition: dt.weather.main}
    })

    const chartTrend = weatherData.hourly.slice(0, 24).map(tr => {
      return {date: tr.dt, temperature: convertKelvinToCelsius(tr.temp), humidity: tr.humidity, windspeed: tr.wind_speed}
    })

    setWeatherData({ temp, pressure, humidity, wind_speed, iconImg, condition, dt, place, nextForecast, chartTrend });
    // show card
    setCardView(true);
  }



  return (
    <div className="flex justify-center items-center flex-col" >
      <Search place={place} handlePlaceChange={handlePlaceChange} handleSubmit={handleSubmit} />
      {showCard ? <Card weatherData={weatherData} handleUnitType={handleUnitType} unitType={unitType} /> : null}
    </div>
  )
}

export default App;
