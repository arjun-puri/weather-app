import { useState } from 'react';
import Chart from './Chart';
import { getDateInIST } from '../../helpers/UtilityFunctions';
import { useWeatherContext } from '../../state/WeatherAppContext';

function ChartTabs() {
    const dateOptions = { hour: 'numeric', timeZone: 'Asia/Kolkata' };
    const weather = useWeatherContext();

    const charts = {
        "temperature": {
            name: "Temperature",
            borderClass: 'border-b-red-400',
        },
        "humidity": {
            name: "Humidity",
            borderClass: "border-b-gray-400",
        },
        "windspeed": {
            name: "Wind speed",
            borderClass: 'border-b-green-400',
        }
    }
    const [activeChart, setActiveChart] = useState('temperature');

    const changeChart = (name) => {
        setActiveChart(name);
    }

    return (
        <div>
            <ol className="flex items-center justify-around">
                {Object.keys(charts).map(chartKey => {
                    return(
                    <li key={chartKey}>
                        <button onClick={() => changeChart(chartKey)} className={ `${charts[chartKey].borderClass} border-b-8 cursor-pointer shadow-lg p-2 rounded-md`}>
                            {charts[chartKey].name}
                        </button>
                    </li>)
                })}
            </ol>
            <div>
                <Chart data={weather.chartTrend.map(dr => ({ "x": getDateInIST(dr.date, dateOptions), "y": dr[activeChart]}))} name={charts[activeChart].name} />
            </div>
        </div>
    )
}

export default ChartTabs;