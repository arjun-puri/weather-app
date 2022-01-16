import DayThumbs from "./DayThumbs";

export const DayThumbsArray = ({nextForecast}) => {
    return (
        <div>
            {nextForecast.map(dt => 
                <DayThumbs key={dt.date} dayForecast={dt} />    
            )}
        </div>
    )
};
