import { useWeatherContext } from "../../state/WeatherAppContext";
import DayThumbs from "./DayThumbs";

function DaysCarousel() {
    const weather = useWeatherContext();

    return (
        <div className="flex justify-between overflow-x-scroll md:overflow-x-visible shadow-lg py-2 rounded-md">
            {weather.nextForecast.map(dt => 
                <DayThumbs key={dt.date} dayForecast={dt} />    
            )}
        </div>
    )
};

export default DaysCarousel;