import { getDateInIST } from '../../helpers/UtilityFunctions';
import { useWeatherContext } from '../../state/WeatherAppContext';

const LocationInfo = ( date ) => {
    const weather = useWeatherContext();

    return(
    <div className="hidden md:flex flex-col text-right text-gray-500">
        <span className="font-bold text-xl text-black" >{weather.place}</span>
        <span>{getDateInIST(weather.dt)}</span>
        <span>{weather.condition}</span>
    </div>
)}

export default LocationInfo;