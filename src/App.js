import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Search} from './Components/Search'
import {Card} from './Components/Card';

const App = () => {
    const [place, setPlace] = useState('');
    const [weatherToday, setWeatherToday] = useState({});
    const [showCard, setCardView] = useState(true);
    const [unitType, setUnitType] = useState('metric');

    const handlePlaceChange = (event) => {
      setPlace(event.target.value);
    }

    const handleUnitType = (value) => {
      setUnitType(value);
    }

    const getIcon = (iconCode) => {
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
          "dt": 1641487415,
          "sunrise": 1641433499,
          "sunset": 1641470903,
          "temp": 288.2,
          "feels_like": 288.06,
          "pressure": 1017,
          "humidity": 88,
          "dew_point": 286.23,
          "uvi": 0,
          "clouds": 40,
          "visibility": 1800,
          "wind_speed": 2.06,
          "wind_deg": 100,
          "weather": [
            {
              "id": 701,
              "main": "Mist",
              "description": "mist",
              "icon": "50n"
            }
          ]
        },
        "hourly": [
          {
            "dt": 1641484800,
            "temp": 288.5,
            "feels_like": 288.31,
            "pressure": 1017,
            "humidity": 85,
            "dew_point": 285.99,
            "uvi": 0,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 2.69,
            "wind_deg": 125,
            "wind_gust": 5.71,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.55
          },
          {
            "dt": 1641488400,
            "temp": 288.2,
            "feels_like": 288.06,
            "pressure": 1017,
            "humidity": 88,
            "dew_point": 286.23,
            "uvi": 0,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 2.75,
            "wind_deg": 127,
            "wind_gust": 6.29,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
              }
            ],
            "pop": 0.55
          },
          {
            "dt": 1641492000,
            "temp": 288.34,
            "feels_like": 288.16,
            "pressure": 1017,
            "humidity": 86,
            "dew_point": 286.02,
            "uvi": 0,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 2.78,
            "wind_deg": 117,
            "wind_gust": 6.51,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.57
          },
          {
            "dt": 1641495600,
            "temp": 288.32,
            "feels_like": 288.11,
            "pressure": 1017,
            "humidity": 85,
            "dew_point": 285.82,
            "uvi": 0,
            "clouds": 63,
            "visibility": 10000,
            "wind_speed": 3.13,
            "wind_deg": 107,
            "wind_gust": 7.01,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.18
          },
          {
            "dt": 1641499200,
            "temp": 288.13,
            "feels_like": 287.9,
            "pressure": 1016,
            "humidity": 85,
            "dew_point": 285.63,
            "uvi": 0,
            "clouds": 71,
            "visibility": 10000,
            "wind_speed": 3.4,
            "wind_deg": 103,
            "wind_gust": 7.28,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.13
          },
          {
            "dt": 1641502800,
            "temp": 287.83,
            "feels_like": 287.6,
            "pressure": 1016,
            "humidity": 86,
            "dew_point": 285.52,
            "uvi": 0,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 3.42,
            "wind_deg": 116,
            "wind_gust": 8,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.12
          },
          {
            "dt": 1641506400,
            "temp": 288.06,
            "feels_like": 287.83,
            "pressure": 1016,
            "humidity": 85,
            "dew_point": 285.55,
            "uvi": 0,
            "clouds": 79,
            "visibility": 10000,
            "wind_speed": 3.77,
            "wind_deg": 126,
            "wind_gust": 8.79,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.12
          },
          {
            "dt": 1641510000,
            "temp": 287.84,
            "feels_like": 287.61,
            "pressure": 1016,
            "humidity": 86,
            "dew_point": 285.54,
            "uvi": 0,
            "clouds": 77,
            "visibility": 10000,
            "wind_speed": 3.58,
            "wind_deg": 123,
            "wind_gust": 9.39,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.06
          },
          {
            "dt": 1641513600,
            "temp": 287.78,
            "feels_like": 287.52,
            "pressure": 1016,
            "humidity": 85,
            "dew_point": 285.32,
            "uvi": 0,
            "clouds": 72,
            "visibility": 10000,
            "wind_speed": 3.38,
            "wind_deg": 122,
            "wind_gust": 8.64,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.03
          },
          {
            "dt": 1641517200,
            "temp": 288.07,
            "feels_like": 287.78,
            "pressure": 1016,
            "humidity": 83,
            "dew_point": 285.28,
            "uvi": 0,
            "clouds": 69,
            "visibility": 10000,
            "wind_speed": 3.52,
            "wind_deg": 118,
            "wind_gust": 8.33,
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
            "dt": 1641520800,
            "temp": 288.19,
            "feels_like": 287.94,
            "pressure": 1017,
            "humidity": 84,
            "dew_point": 285.45,
            "uvi": 0,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 3.77,
            "wind_deg": 121,
            "wind_gust": 8.37,
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
            "dt": 1641524400,
            "temp": 288.31,
            "feels_like": 288.1,
            "pressure": 1018,
            "humidity": 85,
            "dew_point": 285.88,
            "uvi": 0.22,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 3.82,
            "wind_deg": 121,
            "wind_gust": 8.03,
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
            "dt": 1641528000,
            "temp": 288.49,
            "feels_like": 288.35,
            "pressure": 1019,
            "humidity": 87,
            "dew_point": 286.32,
            "uvi": 1.25,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 3.74,
            "wind_deg": 125,
            "wind_gust": 7.77,
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
            "dt": 1641531600,
            "temp": 289.14,
            "feels_like": 289.04,
            "pressure": 1020,
            "humidity": 86,
            "dew_point": 286.74,
            "uvi": 2.3,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 4,
            "wind_deg": 129,
            "wind_gust": 7.32,
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
            "dt": 1641535200,
            "temp": 289.73,
            "feels_like": 289.64,
            "pressure": 1019,
            "humidity": 84,
            "dew_point": 286.97,
            "uvi": 3.16,
            "clouds": 94,
            "visibility": 10000,
            "wind_speed": 4.18,
            "wind_deg": 132,
            "wind_gust": 7.34,
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
            "dt": 1641538800,
            "temp": 290.41,
            "feels_like": 290.28,
            "pressure": 1018,
            "humidity": 80,
            "dew_point": 286.95,
            "uvi": 3.77,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.51,
            "wind_deg": 137,
            "wind_gust": 6.93,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.1
          },
          {
            "dt": 1641542400,
            "temp": 291.38,
            "feels_like": 291.22,
            "pressure": 1017,
            "humidity": 75,
            "dew_point": 286.9,
            "uvi": 3.27,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.49,
            "wind_deg": 138,
            "wind_gust": 6.66,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.06
          },
          {
            "dt": 1641546000,
            "temp": 292.03,
            "feels_like": 291.83,
            "pressure": 1016,
            "humidity": 71,
            "dew_point": 286.75,
            "uvi": 2.21,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.13,
            "wind_deg": 130,
            "wind_gust": 6.21,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.06
          },
          {
            "dt": 1641549600,
            "temp": 293.21,
            "feels_like": 292.97,
            "pressure": 1015,
            "humidity": 65,
            "dew_point": 286.49,
            "uvi": 1.09,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 4.16,
            "wind_deg": 130,
            "wind_gust": 6.04,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.06
          },
          {
            "dt": 1641553200,
            "temp": 293.09,
            "feels_like": 292.81,
            "pressure": 1015,
            "humidity": 64,
            "dew_point": 286.14,
            "uvi": 0.33,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 4.24,
            "wind_deg": 133,
            "wind_gust": 6.64,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.07
          },
          {
            "dt": 1641556800,
            "temp": 292.48,
            "feels_like": 292.19,
            "pressure": 1015,
            "humidity": 66,
            "dew_point": 285.9,
            "uvi": 0,
            "clouds": 84,
            "visibility": 10000,
            "wind_speed": 3.69,
            "wind_deg": 134,
            "wind_gust": 6.79,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "pop": 0.01
          },
          {
            "dt": 1641560400,
            "temp": 292.12,
            "feels_like": 291.85,
            "pressure": 1016,
            "humidity": 68,
            "dew_point": 286.18,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.13,
            "wind_deg": 126,
            "wind_gust": 7.34,
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
            "dt": 1641564000,
            "temp": 292.01,
            "feels_like": 291.75,
            "pressure": 1016,
            "humidity": 69,
            "dew_point": 286.15,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.22,
            "wind_deg": 122,
            "wind_gust": 7.63,
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
            "dt": 1641567600,
            "temp": 292.13,
            "feels_like": 291.83,
            "pressure": 1017,
            "humidity": 67,
            "dew_point": 285.93,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.13,
            "wind_deg": 127,
            "wind_gust": 7.89,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.01
          },
          {
            "dt": 1641571200,
            "temp": 291.94,
            "feels_like": 291.68,
            "pressure": 1017,
            "humidity": 69,
            "dew_point": 286.12,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.27,
            "wind_deg": 129,
            "wind_gust": 8.51,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.22,
            "rain": {
              "1h": 0.17
            }
          },
          {
            "dt": 1641574800,
            "temp": 291.63,
            "feels_like": 291.41,
            "pressure": 1017,
            "humidity": 72,
            "dew_point": 286.51,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.12,
            "wind_deg": 109,
            "wind_gust": 8.55,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.34,
            "rain": {
              "1h": 0.11
            }
          },
          {
            "dt": 1641578400,
            "temp": 290.47,
            "feels_like": 290.29,
            "pressure": 1016,
            "humidity": 78,
            "dew_point": 286.68,
            "uvi": 0,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 4.29,
            "wind_deg": 114,
            "wind_gust": 10.22,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.39,
            "rain": {
              "1h": 0.19
            }
          },
          {
            "dt": 1641582000,
            "temp": 289.91,
            "feels_like": 289.83,
            "pressure": 1015,
            "humidity": 84,
            "dew_point": 287.16,
            "uvi": 0,
            "clouds": 70,
            "visibility": 10000,
            "wind_speed": 4.42,
            "wind_deg": 117,
            "wind_gust": 10.86,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.75,
            "rain": {
              "1h": 0.97
            }
          },
          {
            "dt": 1641585600,
            "temp": 289.81,
            "feels_like": 289.75,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 287.24,
            "uvi": 0,
            "clouds": 78,
            "visibility": 10000,
            "wind_speed": 5.43,
            "wind_deg": 112,
            "wind_gust": 12.73,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "pop": 0.81
          },
          {
            "dt": 1641589200,
            "temp": 289.67,
            "feels_like": 289.54,
            "pressure": 1014,
            "humidity": 83,
            "dew_point": 286.84,
            "uvi": 0,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 4.46,
            "wind_deg": 127,
            "wind_gust": 12.23,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.93,
            "rain": {
              "1h": 0.34
            }
          },
          {
            "dt": 1641592800,
            "temp": 289.83,
            "feels_like": 289.77,
            "pressure": 1013,
            "humidity": 85,
            "dew_point": 287.39,
            "uvi": 0,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 4.6,
            "wind_deg": 143,
            "wind_gust": 12.17,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.9,
            "rain": {
              "1h": 0.31
            }
          },
          {
            "dt": 1641596400,
            "temp": 289.51,
            "feels_like": 289.58,
            "pressure": 1014,
            "humidity": 91,
            "dew_point": 288.02,
            "uvi": 0,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 4.06,
            "wind_deg": 151,
            "wind_gust": 11.02,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
              }
            ],
            "pop": 0.87,
            "rain": {
              "1h": 1.43
            }
          },
          {
            "dt": 1641600000,
            "temp": 289.56,
            "feels_like": 289.63,
            "pressure": 1015,
            "humidity": 91,
            "dew_point": 288.05,
            "uvi": 0,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 4.57,
            "wind_deg": 171,
            "wind_gust": 11.03,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
              }
            ],
            "pop": 0.97,
            "rain": {
              "1h": 2.05
            }
          },
          {
            "dt": 1641603600,
            "temp": 289.39,
            "feels_like": 289.47,
            "pressure": 1015,
            "humidity": 92,
            "dew_point": 288.11,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.57,
            "wind_deg": 166,
            "wind_gust": 11.43,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
              }
            ],
            "pop": 0.96,
            "rain": {
              "1h": 1.7
            }
          },
          {
            "dt": 1641607200,
            "temp": 289.47,
            "feels_like": 289.53,
            "pressure": 1016,
            "humidity": 91,
            "dew_point": 287.99,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.95,
            "wind_deg": 145,
            "wind_gust": 11.06,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.96,
            "rain": {
              "1h": 0.62
            }
          },
          {
            "dt": 1641610800,
            "temp": 289.41,
            "feels_like": 289.49,
            "pressure": 1017,
            "humidity": 92,
            "dew_point": 288.07,
            "uvi": 0.16,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.61,
            "wind_deg": 134,
            "wind_gust": 10.45,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.95,
            "rain": {
              "1h": 0.56
            }
          },
          {
            "dt": 1641614400,
            "temp": 289.61,
            "feels_like": 289.69,
            "pressure": 1018,
            "humidity": 91,
            "dew_point": 288.24,
            "uvi": 0.61,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.75,
            "wind_deg": 132,
            "wind_gust": 10.16,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.95,
            "rain": {
              "1h": 0.8
            }
          },
          {
            "dt": 1641618000,
            "temp": 289.59,
            "feels_like": 289.69,
            "pressure": 1018,
            "humidity": 92,
            "dew_point": 288.29,
            "uvi": 1.13,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.65,
            "wind_deg": 128,
            "wind_gust": 9.35,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.95,
            "rain": {
              "1h": 0.86
            }
          },
          {
            "dt": 1641621600,
            "temp": 289.34,
            "feels_like": 289.47,
            "pressure": 1018,
            "humidity": 94,
            "dew_point": 288.43,
            "uvi": 1.56,
            "clouds": 100,
            "visibility": 8800,
            "wind_speed": 3.01,
            "wind_deg": 127,
            "wind_gust": 7.71,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 0.95,
            "rain": {
              "1h": 1.86
            }
          },
          {
            "dt": 1641625200,
            "temp": 289.66,
            "feels_like": 289.79,
            "pressure": 1017,
            "humidity": 93,
            "dew_point": 288.51,
            "uvi": 2.24,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.41,
            "wind_deg": 126,
            "wind_gust": 8.34,
            "weather": [
              {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
              }
            ],
            "pop": 0.84,
            "rain": {
              "1h": 1.74
            }
          },
          {
            "dt": 1641628800,
            "temp": 290.18,
            "feels_like": 290.26,
            "pressure": 1015,
            "humidity": 89,
            "dew_point": 288.34,
            "uvi": 1.95,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.81,
            "wind_deg": 127,
            "wind_gust": 8.58,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.85,
            "rain": {
              "1h": 0.66
            }
          },
          {
            "dt": 1641632400,
            "temp": 290.57,
            "feels_like": 290.61,
            "pressure": 1015,
            "humidity": 86,
            "dew_point": 288.21,
            "uvi": 1.31,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 4.55,
            "wind_deg": 122,
            "wind_gust": 9.59,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.89,
            "rain": {
              "1h": 0.31
            }
          },
          {
            "dt": 1641636000,
            "temp": 291.04,
            "feels_like": 291.05,
            "pressure": 1014,
            "humidity": 83,
            "dew_point": 288.11,
            "uvi": 0.14,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 4.83,
            "wind_deg": 121,
            "wind_gust": 10.11,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.9,
            "rain": {
              "1h": 0.29
            }
          },
          {
            "dt": 1641639600,
            "temp": 291.27,
            "feels_like": 291.28,
            "pressure": 1014,
            "humidity": 82,
            "dew_point": 288.06,
            "uvi": 0.04,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 5,
            "wind_deg": 119,
            "wind_gust": 10.08,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.94,
            "rain": {
              "1h": 0.28
            }
          },
          {
            "dt": 1641643200,
            "temp": 290.77,
            "feels_like": 290.75,
            "pressure": 1014,
            "humidity": 83,
            "dew_point": 287.9,
            "uvi": 0,
            "clouds": 92,
            "visibility": 10000,
            "wind_speed": 4.08,
            "wind_deg": 130,
            "wind_gust": 9.17,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
              }
            ],
            "pop": 0.99,
            "rain": {
              "1h": 0.53
            }
          },
          {
            "dt": 1641646800,
            "temp": 290.58,
            "feels_like": 290.6,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 288.03,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.89,
            "wind_deg": 132,
            "wind_gust": 10.51,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.97,
            "rain": {
              "1h": 0.83
            }
          },
          {
            "dt": 1641650400,
            "temp": 290.16,
            "feels_like": 290.19,
            "pressure": 1015,
            "humidity": 87,
            "dew_point": 288.04,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 5.22,
            "wind_deg": 141,
            "wind_gust": 11.36,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 0.97,
            "rain": {
              "1h": 0.65
            }
          },
          {
            "dt": 1641654000,
            "temp": 289.79,
            "feels_like": 289.81,
            "pressure": 1015,
            "humidity": 88,
            "dew_point": 287.91,
            "uvi": 0,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 4.92,
            "wind_deg": 142,
            "wind_gust": 11.19,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
              }
            ],
            "pop": 1,
            "rain": {
              "1h": 0.55
            }
          }
        ]
      };
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

      const { temp, pressure, humidity, wind_speed } = weatherData.current;
      // get icon code and get the image
      const iconCode = weatherData.current.weather[0].icon;
      const iconImg = getIcon(iconCode);

      const condition = weatherData.current.weather[0].main;
      
      setWeatherToday({temp, pressure, humidity, wind_speed, iconImg, condition});
      // show card
      setCardView(true);
    }



  return (
    <>
    <Search place={place} handlePlaceChange={handlePlaceChange} handleSubmit={handleSubmit} />
    <Card weatherToday={weatherToday} handleUnitType={handleUnitType} unitType={unitType}/>
    </>
  )
}

export default App;
