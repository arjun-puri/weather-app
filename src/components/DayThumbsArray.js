import DayThumbs from "./DayThumbs";

export const DayThumbsArray = ({nextForecast}) => {
    return (
        <div class="flex items-center">
            {nextForecast.map(dt => 
                <DayThumbs key={dt.date} dayForecast={dt} />    
            )}
        </div>
    )
};
