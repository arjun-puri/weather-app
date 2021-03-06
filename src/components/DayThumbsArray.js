import DayThumbs from "./DayThumbs";

export const DayThumbsArray = ({nextForecast}) => {
    return (
        <div className="flex justify-between overflow-x-scroll">
            {nextForecast.map(dt => 
                <DayThumbs key={dt.date} dayForecast={dt} />    
            )}
        </div>
    )
};
