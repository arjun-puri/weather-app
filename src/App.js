import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Search } from './Components/Search'
import { Card } from './Components/Card';

const App = () => {
  const [place, setPlace] = useState('');
  const [weatherData, setweatherData] = useState({});
  const [showCard, setCardView] = useState(false);
  const [unitType, setUnitType] = useState('metric');

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  const handleUnitType = (value) => {
    setUnitType(value);
  }

  const fetchWeatherData = async () => {
    const { data } = await axios.get('')
    setweatherData(data);
  }

  const getIcon = (iconCode) => {
    //console.log(iconCode)
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const weatherData = {
      "lat": 28.7,
      "lon": 77.2,
      "timezone": "Asia/Kolkata",
      "timezone_offset": 19800,
      "current": {
        "dt": 1642321211,
        "sunrise": 1642297498,
        "sunset": 1642335376,
        "temp": 286.2,
        "feels_like": 285.41,
        "pressure": 1021,
        "humidity": 71,
        "dew_point": 281.07,
        "uvi": 3.68,
        "clouds": 40,
        "visibility": 2200,
        "wind_speed": 2.06,
        "wind_deg": 250,
        "weather": [
          {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
          }
        ]
      },
      "hourly": [
        {
          "dt": 1642320000,
          "temp": 286.2,
          "feels_like": 285.41,
          "pressure": 1021,
          "humidity": 71,
          "dew_point": 281.07,
          "uvi": 3.68,
          "clouds": 40,
          "visibility": 10000,
          "wind_speed": 2.48,
          "wind_deg": 303,
          "wind_gust": 2.97,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642323600,
          "temp": 287.43,
          "feels_like": 286.53,
          "pressure": 1020,
          "humidity": 62,
          "dew_point": 280.26,
          "uvi": 2.51,
          "clouds": 39,
          "visibility": 10000,
          "wind_speed": 2.5,
          "wind_deg": 303,
          "wind_gust": 2.89,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642327200,
          "temp": 288.67,
          "feels_like": 287.69,
          "pressure": 1020,
          "humidity": 54,
          "dew_point": 279.41,
          "uvi": 1.22,
          "clouds": 34,
          "visibility": 10000,
          "wind_speed": 2.65,
          "wind_deg": 306,
          "wind_gust": 2.99,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642330800,
          "temp": 289.55,
          "feels_like": 288.5,
          "pressure": 1019,
          "humidity": 48,
          "dew_point": 278.52,
          "uvi": 0.37,
          "clouds": 30,
          "visibility": 10000,
          "wind_speed": 2.27,
          "wind_deg": 303,
          "wind_gust": 2.7,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642334400,
          "temp": 289.3,
          "feels_like": 288.15,
          "pressure": 1019,
          "humidity": 45,
          "dew_point": 277.37,
          "uvi": 0,
          "clouds": 27,
          "visibility": 10000,
          "wind_speed": 2.6,
          "wind_deg": 307,
          "wind_gust": 4.22,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642338000,
          "temp": 288.92,
          "feels_like": 287.65,
          "pressure": 1019,
          "humidity": 42,
          "dew_point": 276.09,
          "uvi": 0,
          "clouds": 50,
          "visibility": 10000,
          "wind_speed": 1.97,
          "wind_deg": 307,
          "wind_gust": 2.93,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642341600,
          "temp": 288.28,
          "feels_like": 287,
          "pressure": 1020,
          "humidity": 44,
          "dew_point": 276.23,
          "uvi": 0,
          "clouds": 69,
          "visibility": 10000,
          "wind_speed": 1.37,
          "wind_deg": 303,
          "wind_gust": 1.53,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642345200,
          "temp": 287.69,
          "feels_like": 286.4,
          "pressure": 1020,
          "humidity": 46,
          "dew_point": 276.24,
          "uvi": 0,
          "clouds": 55,
          "visibility": 10000,
          "wind_speed": 1.27,
          "wind_deg": 300,
          "wind_gust": 1.37,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642348800,
          "temp": 287.18,
          "feels_like": 285.87,
          "pressure": 1020,
          "humidity": 47,
          "dew_point": 276.21,
          "uvi": 0,
          "clouds": 42,
          "visibility": 10000,
          "wind_speed": 1.14,
          "wind_deg": 306,
          "wind_gust": 1.24,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642352400,
          "temp": 286.7,
          "feels_like": 285.39,
          "pressure": 1020,
          "humidity": 49,
          "dew_point": 276.17,
          "uvi": 0,
          "clouds": 35,
          "visibility": 10000,
          "wind_speed": 1.46,
          "wind_deg": 300,
          "wind_gust": 1.49,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642356000,
          "temp": 286.2,
          "feels_like": 284.87,
          "pressure": 1020,
          "humidity": 50,
          "dew_point": 276.08,
          "uvi": 0,
          "clouds": 30,
          "visibility": 10000,
          "wind_speed": 1.56,
          "wind_deg": 315,
          "wind_gust": 1.85,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642359600,
          "temp": 285.7,
          "feels_like": 284.34,
          "pressure": 1020,
          "humidity": 51,
          "dew_point": 275.96,
          "uvi": 0,
          "clouds": 30,
          "visibility": 10000,
          "wind_speed": 1.64,
          "wind_deg": 313,
          "wind_gust": 2.25,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642363200,
          "temp": 285.39,
          "feels_like": 284.03,
          "pressure": 1020,
          "humidity": 52,
          "dew_point": 275.86,
          "uvi": 0,
          "clouds": 53,
          "visibility": 10000,
          "wind_speed": 1.3,
          "wind_deg": 341,
          "wind_gust": 1.45,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642366800,
          "temp": 285.11,
          "feels_like": 283.75,
          "pressure": 1020,
          "humidity": 53,
          "dew_point": 275.81,
          "uvi": 0,
          "clouds": 68,
          "visibility": 10000,
          "wind_speed": 1.56,
          "wind_deg": 323,
          "wind_gust": 2.02,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642370400,
          "temp": 284.89,
          "feels_like": 283.5,
          "pressure": 1020,
          "humidity": 53,
          "dew_point": 275.71,
          "uvi": 0,
          "clouds": 75,
          "visibility": 10000,
          "wind_speed": 1.66,
          "wind_deg": 317,
          "wind_gust": 2,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642374000,
          "temp": 284.38,
          "feels_like": 282.99,
          "pressure": 1019,
          "humidity": 55,
          "dew_point": 275.69,
          "uvi": 0,
          "clouds": 61,
          "visibility": 10000,
          "wind_speed": 1.64,
          "wind_deg": 306,
          "wind_gust": 2.29,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642377600,
          "temp": 284.21,
          "feels_like": 282.81,
          "pressure": 1019,
          "humidity": 55,
          "dew_point": 275.59,
          "uvi": 0,
          "clouds": 51,
          "visibility": 10000,
          "wind_speed": 1.05,
          "wind_deg": 297,
          "wind_gust": 1.09,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642381200,
          "temp": 283.94,
          "feels_like": 282.54,
          "pressure": 1019,
          "humidity": 56,
          "dew_point": 275.54,
          "uvi": 0,
          "clouds": 4,
          "visibility": 10000,
          "wind_speed": 1.12,
          "wind_deg": 314,
          "wind_gust": 1.24,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642384800,
          "temp": 283.88,
          "feels_like": 282.47,
          "pressure": 1020,
          "humidity": 56,
          "dew_point": 275.51,
          "uvi": 0,
          "clouds": 4,
          "visibility": 10000,
          "wind_speed": 1.57,
          "wind_deg": 297,
          "wind_gust": 1.76,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642388400,
          "temp": 285.1,
          "feels_like": 283.73,
          "pressure": 1021,
          "humidity": 53,
          "dew_point": 275.7,
          "uvi": 0.56,
          "clouds": 3,
          "visibility": 10000,
          "wind_speed": 1.5,
          "wind_deg": 268,
          "wind_gust": 2.31,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642392000,
          "temp": 287.06,
          "feels_like": 285.68,
          "pressure": 1021,
          "humidity": 45,
          "dew_point": 275.4,
          "uvi": 1.5,
          "clouds": 16,
          "visibility": 10000,
          "wind_speed": 1.55,
          "wind_deg": 283,
          "wind_gust": 2.12,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642395600,
          "temp": 288.91,
          "feels_like": 287.59,
          "pressure": 1022,
          "humidity": 40,
          "dew_point": 275.23,
          "uvi": 2.76,
          "clouds": 13,
          "visibility": 10000,
          "wind_speed": 2.35,
          "wind_deg": 302,
          "wind_gust": 3.24,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642399200,
          "temp": 290.5,
          "feels_like": 289.2,
          "pressure": 1021,
          "humidity": 35,
          "dew_point": 274.92,
          "uvi": 3.77,
          "clouds": 15,
          "visibility": 10000,
          "wind_speed": 2.3,
          "wind_deg": 300,
          "wind_gust": 3.07,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642402800,
          "temp": 291.64,
          "feels_like": 290.38,
          "pressure": 1019,
          "humidity": 32,
          "dew_point": 274.49,
          "uvi": 3.65,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 2.06,
          "wind_deg": 304,
          "wind_gust": 2.54,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642406400,
          "temp": 292.6,
          "feels_like": 291.36,
          "pressure": 1018,
          "humidity": 29,
          "dew_point": 274.04,
          "uvi": 3.18,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 1.92,
          "wind_deg": 304,
          "wind_gust": 2.27,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642410000,
          "temp": 293.16,
          "feels_like": 291.95,
          "pressure": 1018,
          "humidity": 28,
          "dew_point": 274.17,
          "uvi": 2.17,
          "clouds": 86,
          "visibility": 10000,
          "wind_speed": 2.71,
          "wind_deg": 300,
          "wind_gust": 3.22,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642413600,
          "temp": 293.06,
          "feels_like": 291.89,
          "pressure": 1017,
          "humidity": 30,
          "dew_point": 274.86,
          "uvi": 1.2,
          "clouds": 73,
          "visibility": 10000,
          "wind_speed": 2.86,
          "wind_deg": 310,
          "wind_gust": 3.24,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642417200,
          "temp": 292.36,
          "feels_like": 291.22,
          "pressure": 1017,
          "humidity": 34,
          "dew_point": 276.25,
          "uvi": 0.37,
          "clouds": 76,
          "visibility": 10000,
          "wind_speed": 2.64,
          "wind_deg": 316,
          "wind_gust": 3.21,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642420800,
          "temp": 290.9,
          "feels_like": 289.75,
          "pressure": 1018,
          "humidity": 39,
          "dew_point": 276.84,
          "uvi": 0,
          "clouds": 80,
          "visibility": 10000,
          "wind_speed": 1.66,
          "wind_deg": 327,
          "wind_gust": 2.58,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642424400,
          "temp": 289.99,
          "feels_like": 288.83,
          "pressure": 1018,
          "humidity": 42,
          "dew_point": 276.93,
          "uvi": 0,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 1.39,
          "wind_deg": 321,
          "wind_gust": 1.73,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642428000,
          "temp": 289.39,
          "feels_like": 288.22,
          "pressure": 1019,
          "humidity": 44,
          "dew_point": 277.09,
          "uvi": 0,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 1.69,
          "wind_deg": 317,
          "wind_gust": 2.1,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642431600,
          "temp": 288.71,
          "feels_like": 287.52,
          "pressure": 1020,
          "humidity": 46,
          "dew_point": 277.14,
          "uvi": 0,
          "clouds": 88,
          "visibility": 10000,
          "wind_speed": 1.55,
          "wind_deg": 313,
          "wind_gust": 1.6,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642435200,
          "temp": 288.08,
          "feels_like": 286.88,
          "pressure": 1020,
          "humidity": 48,
          "dew_point": 277.09,
          "uvi": 0,
          "clouds": 68,
          "visibility": 10000,
          "wind_speed": 1.68,
          "wind_deg": 313,
          "wind_gust": 1.95,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642438800,
          "temp": 287.4,
          "feels_like": 286.19,
          "pressure": 1020,
          "humidity": 50,
          "dew_point": 277.02,
          "uvi": 0,
          "clouds": 55,
          "visibility": 10000,
          "wind_speed": 1.84,
          "wind_deg": 324,
          "wind_gust": 2.44,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642442400,
          "temp": 286.83,
          "feels_like": 285.59,
          "pressure": 1020,
          "humidity": 51,
          "dew_point": 276.9,
          "uvi": 0,
          "clouds": 47,
          "visibility": 10000,
          "wind_speed": 1.55,
          "wind_deg": 327,
          "wind_gust": 1.77,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642446000,
          "temp": 286.38,
          "feels_like": 285.12,
          "pressure": 1019,
          "humidity": 52,
          "dew_point": 276.74,
          "uvi": 0,
          "clouds": 8,
          "visibility": 10000,
          "wind_speed": 1.45,
          "wind_deg": 336,
          "wind_gust": 1.66,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642449600,
          "temp": 285.96,
          "feels_like": 284.68,
          "pressure": 1019,
          "humidity": 53,
          "dew_point": 276.62,
          "uvi": 0,
          "clouds": 7,
          "visibility": 10000,
          "wind_speed": 1.61,
          "wind_deg": 344,
          "wind_gust": 1.85,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642453200,
          "temp": 285.49,
          "feels_like": 284.19,
          "pressure": 1019,
          "humidity": 54,
          "dew_point": 276.46,
          "uvi": 0,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 1.65,
          "wind_deg": 345,
          "wind_gust": 2.12,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642456800,
          "temp": 285.12,
          "feels_like": 283.81,
          "pressure": 1018,
          "humidity": 55,
          "dew_point": 276.29,
          "uvi": 0,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 1.49,
          "wind_deg": 337,
          "wind_gust": 1.83,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642460400,
          "temp": 284.82,
          "feels_like": 283.48,
          "pressure": 1018,
          "humidity": 55,
          "dew_point": 276.22,
          "uvi": 0,
          "clouds": 13,
          "visibility": 10000,
          "wind_speed": 1.41,
          "wind_deg": 328,
          "wind_gust": 1.87,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642464000,
          "temp": 284.53,
          "feels_like": 283.19,
          "pressure": 1018,
          "humidity": 56,
          "dew_point": 276.12,
          "uvi": 0,
          "clouds": 12,
          "visibility": 10000,
          "wind_speed": 1.68,
          "wind_deg": 322,
          "wind_gust": 2.21,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642467600,
          "temp": 284.24,
          "feels_like": 282.89,
          "pressure": 1018,
          "humidity": 57,
          "dew_point": 276.03,
          "uvi": 0,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 1.7,
          "wind_deg": 313,
          "wind_gust": 2.36,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642471200,
          "temp": 284.06,
          "feels_like": 282.69,
          "pressure": 1019,
          "humidity": 57,
          "dew_point": 275.97,
          "uvi": 0,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 1.85,
          "wind_deg": 305,
          "wind_gust": 3.02,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642474800,
          "temp": 285.15,
          "feels_like": 283.82,
          "pressure": 1019,
          "humidity": 54,
          "dew_point": 276.09,
          "uvi": 0.57,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 1.95,
          "wind_deg": 298,
          "wind_gust": 3.27,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642478400,
          "temp": 287.15,
          "feels_like": 285.81,
          "pressure": 1019,
          "humidity": 46,
          "dew_point": 275.79,
          "uvi": 1.63,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 2.27,
          "wind_deg": 301,
          "wind_gust": 3.43,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642482000,
          "temp": 289.11,
          "feels_like": 287.78,
          "pressure": 1019,
          "humidity": 39,
          "dew_point": 275.24,
          "uvi": 2.99,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 2.37,
          "wind_deg": 299,
          "wind_gust": 3.51,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642485600,
          "temp": 290.87,
          "feels_like": 289.59,
          "pressure": 1019,
          "humidity": 34,
          "dew_point": 274.75,
          "uvi": 4.08,
          "clouds": 6,
          "visibility": 10000,
          "wind_speed": 2.55,
          "wind_deg": 300,
          "wind_gust": 3.52,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1642489200,
          "temp": 292.25,
          "feels_like": 291.03,
          "pressure": 1017,
          "humidity": 31,
          "dew_point": 274.6,
          "uvi": 4.42,
          "clouds": 0,
          "visibility": 10000,
          "wind_speed": 2.94,
          "wind_deg": 303,
          "wind_gust": 3.89,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "pop": 0
        }
      ],
      "daily": [
        {
          "dt": 1642314600,
          "sunrise": 1642297498,
          "sunset": 1642335376,
          "moonrise": 1642329960,
          "moonset": 1642293000,
          "moon_phase": 0.45,
          "temp": {
            "day": 287.49,
            "min": 282.87,
            "max": 289.55,
            "night": 286.2,
            "eve": 289.3,
            "morn": 283.77
          },
          "feels_like": {
            "day": 286.44,
            "night": 284.87,
            "eve": 288.15,
            "morn": 282.38
          },
          "pressure": 1021,
          "humidity": 56,
          "dew_point": 278.84,
          "wind_speed": 2.65,
          "wind_deg": 306,
          "wind_gust": 4.28,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "clouds": 29,
          "pop": 0,
          "uvi": 4.22
        },
        {
          "dt": 1642401000,
          "sunrise": 1642383889,
          "sunset": 1642421826,
          "moonrise": 1642419600,
          "moonset": 1642382400,
          "moon_phase": 0.48,
          "temp": {
            "day": 290.5,
            "min": 283.88,
            "max": 293.16,
            "night": 286.83,
            "eve": 290.9,
            "morn": 284.21
          },
          "feels_like": {
            "day": 289.2,
            "night": 285.59,
            "eve": 289.75,
            "morn": 282.81
          },
          "pressure": 1021,
          "humidity": 35,
          "dew_point": 274.92,
          "wind_speed": 2.86,
          "wind_deg": 310,
          "wind_gust": 3.24,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": 15,
          "pop": 0,
          "uvi": 3.77
        },
        {
          "dt": 1642487400,
          "sunrise": 1642470279,
          "sunset": 1642508276,
          "moonrise": 1642509360,
          "moonset": 1642471620,
          "moon_phase": 0.5,
          "temp": {
            "day": 290.87,
            "min": 284.06,
            "max": 293.6,
            "night": 287.44,
            "eve": 291.42,
            "morn": 284.53
          },
          "feels_like": {
            "day": 289.59,
            "night": 286.52,
            "eve": 290.48,
            "morn": 283.19
          },
          "pressure": 1019,
          "humidity": 34,
          "dew_point": 274.75,
          "wind_speed": 3.09,
          "wind_deg": 303,
          "wind_gust": 4.61,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 6,
          "pop": 0,
          "uvi": 4.42
        },
        {
          "dt": 1642573800,
          "sunrise": 1642556667,
          "sunset": 1642594726,
          "moonrise": 1642599240,
          "moonset": 1642560540,
          "moon_phase": 0.54,
          "temp": {
            "day": 292.28,
            "min": 285.64,
            "max": 294.87,
            "night": 290.23,
            "eve": 292.69,
            "morn": 285.64
          },
          "feels_like": {
            "day": 291.35,
            "night": 289.43,
            "eve": 291.93,
            "morn": 284.62
          },
          "pressure": 1017,
          "humidity": 42,
          "dew_point": 279.22,
          "wind_speed": 2.94,
          "wind_deg": 311,
          "wind_gust": 4.12,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 3,
          "pop": 0,
          "uvi": 4.58
        },
        {
          "dt": 1642660200,
          "sunrise": 1642643054,
          "sunset": 1642681176,
          "moonrise": 1642689120,
          "moonset": 1642649280,
          "moon_phase": 0.57,
          "temp": {
            "day": 293.45,
            "min": 287.42,
            "max": 295.91,
            "night": 289.77,
            "eve": 293.61,
            "morn": 287.42
          },
          "feels_like": {
            "day": 292.58,
            "night": 288.92,
            "eve": 292.81,
            "morn": 286.57
          },
          "pressure": 1013,
          "humidity": 40,
          "dew_point": 279.52,
          "wind_speed": 2.28,
          "wind_deg": 320,
          "wind_gust": 3.61,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 6,
          "pop": 0,
          "uvi": 4.59
        },
        {
          "dt": 1642746600,
          "sunrise": 1642729439,
          "sunset": 1642767627,
          "moonrise": 1642779000,
          "moonset": 1642737780,
          "moon_phase": 0.6,
          "temp": {
            "day": 293.54,
            "min": 287.09,
            "max": 296.13,
            "night": 289.71,
            "eve": 294.02,
            "morn": 287.09
          },
          "feels_like": {
            "day": 292.84,
            "night": 288.96,
            "eve": 293.26,
            "morn": 286.39
          },
          "pressure": 1013,
          "humidity": 46,
          "dew_point": 281.68,
          "wind_speed": 2.49,
          "wind_deg": 90,
          "wind_gust": 4.77,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 2,
          "pop": 0,
          "uvi": 5
        },
        {
          "dt": 1642833000,
          "sunrise": 1642815823,
          "sunset": 1642854078,
          "moonrise": 1642868880,
          "moonset": 1642826100,
          "moon_phase": 0.64,
          "temp": {
            "day": 289.3,
            "min": 286.24,
            "max": 289.3,
            "night": 286.24,
            "eve": 286.93,
            "morn": 288.05
          },
          "feels_like": {
            "day": 288.93,
            "night": 285.93,
            "eve": 286.58,
            "morn": 287.61
          },
          "pressure": 1009,
          "humidity": 75,
          "dew_point": 284.95,
          "wind_speed": 6.69,
          "wind_deg": 112,
          "wind_gust": 14.29,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 99,
          "pop": 1,
          "rain": 7.61,
          "uvi": 5
        },
        {
          "dt": 1642919400,
          "sunrise": 1642902205,
          "sunset": 1642940528,
          "moonrise": 1642958760,
          "moonset": 1642914360,
          "moon_phase": 0.67,
          "temp": {
            "day": 286.92,
            "min": 285.93,
            "max": 287.75,
            "night": 286.28,
            "eve": 287.5,
            "morn": 285.93
          },
          "feels_like": {
            "day": 286.68,
            "night": 286.02,
            "eve": 287.26,
            "morn": 285.72
          },
          "pressure": 1011,
          "humidity": 89,
          "dew_point": 285.1,
          "wind_speed": 4.76,
          "wind_deg": 112,
          "wind_gust": 12.17,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 100,
          "pop": 0.83,
          "rain": 3.09,
          "uvi": 5
        }
      ]
    }
    const locationData = {
      "type": "FeatureCollection",
      "query": [
        77.2311,
        28.6128
      ],
      "features": [
        {
          "id": "place.8915687851165670",
          "type": "Feature",
          "place_type": [
            "place"
          ],
          "relevance": 1,
          "properties": {
            "wikidata": "Q987"
          },
          "text": "New Delhi",
          "place_name": "New Delhi, Delhi, India",
          "bbox": [
            76.942051,
            28.404263,
            77.347105,
            28.883588
          ],
          "center": [
            77.2,
            28.7
          ],
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.2,
              28.7
            ]
          },
          "context": [
            {
              "id": "district.6350047862165670",
              "wikidata": "Q987",
              "text": "New Delhi"
            },
            {
              "id": "region.9972194009026890",
              "wikidata": "Q1353",
              "short_code": "IN-DL",
              "text": "Delhi"
            },
            {
              "id": "country.2782945337",
              "wikidata": "Q668",
              "short_code": "in",
              "text": "India"
            }
          ]
        },
        {
          "id": "region.9972194009026890",
          "type": "Feature",
          "place_type": [
            "region",
            "place"
          ],
          "relevance": 1,
          "properties": {
            "wikidata": "Q1353",
            "short_code": "IN-DL"
          },
          "text": "Delhi",
          "place_name": "Delhi, India",
          "bbox": [
            76.8388830269287,
            28.4042620003073,
            77.3464387601731,
            28.8835889894397
          ],
          "center": [
            77.21667,
            28.66667
          ],
          "geometry": {
            "type": "Point",
            "coordinates": [
              77.21667,
              28.66667
            ]
          },
          "context": [
            {
              "id": "country.2782945337",
              "wikidata": "Q668",
              "short_code": "in",
              "text": "India"
            }
          ]
        }
      ],
      "attribution": "NOTICE: © 2021 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
    }

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
    //console.log(nextForecast)
    const chartTrend = weatherData.hourly.slice(0, 24).map(tr => {
      return {date: dt, pressure: tr.pressure, humidity: tr.humidity, windspeed: tr.wind_speed}
    })

    setweatherData({ temp, pressure, humidity, wind_speed, iconImg, condition, dt, place, nextForecast, chartTrend });
    // show card
    setCardView(true);
  }



  return (
    <>
      <Search place={place} handlePlaceChange={handlePlaceChange} handleSubmit={handleSubmit} />
      {showCard ? <Card weatherData={weatherData} handleUnitType={handleUnitType} unitType={unitType} /> : null}
    </>
  )
}

export default App;
