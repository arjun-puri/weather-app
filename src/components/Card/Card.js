import Today from './Today';
import LocationInfo from "./LocationInfo";
import ChartTabs from "../ChartTabs/ChartTabs";
import DaysCarousel from "../DaysCarousel/DaysCarousel";

function Card() {
    return(
        <div className="max-w-xs text-xs md:max-w-2xl lg:max-w-4xl border-2 shadow-2xl rounded-xl p-6">
            <div className="flex justify-center md:justify-between items-center rounded-md shadow-lg p-4 pr-6 mb-4">
                <Today />
                <LocationInfo />
            </div>
            <ChartTabs />
            <DaysCarousel />
        </div>
    )
}

export default Card;