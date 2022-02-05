import React from "react";
import Today from './Today';
import LocationInfo from "./LocationInfo";
import ChartTabs from "./ChartTabs";
import { DayThumbsArray } from "./DayThumbsArray";

export const Card = ({weatherData, handleUnitType, unitType}) => {

    return(
    <div className="max-w-4xl border-2 shadow-2xl rounded-xl p-6">
        <div className="flex justify-between items-center rounded-md shadow-lg p-4 pr-6 mb-4">
            <Today data={weatherData} />
            <LocationInfo place={weatherData.place} date={weatherData.dt} condition={weatherData.condition} />
        </div>
        <ChartTabs props={weatherData.chartTrend} />
        <DayThumbsArray nextForecast={weatherData.nextForecast} />
    </div>
    )
}