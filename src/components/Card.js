import React from "react";
import Today from './Today';
import LocationInfo from "./LocationInfo";
import ChartTabs from "./ChartTabs";
import { DayThumbsArray } from "./DayThumbsArray";

export const Card = ({weatherData, handleUnitType, unitType}) => {

    return(
    <div className="max-w-3xl border-2 border-zinc-400 rounded-xl p-6">
        <div className="flex justify-between items-center">
            <Today data={weatherData} />
            <LocationInfo place={weatherData.place} date={weatherData.dt} condition={weatherData.condition} />
        </div>
        <ChartTabs props={weatherData.chartTrend} />
        <DayThumbsArray nextForecast={weatherData.nextForecast} />
    </div>
    )
}