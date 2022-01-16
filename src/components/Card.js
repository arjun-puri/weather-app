import React from "react";
import Today from './Today';
import LocationInfo from "./LocationInfo";
import ChartTabs from "./ChartTabs";
import { DayThumbsArray } from "./DayThumbsArray";

export const Card = ({weatherData, handleUnitType, unitType}) => {

    return(
    <>
        <div>
            <Today data={weatherData} />
            <LocationInfo place={weatherData.place} date={weatherData.dt} condition={weatherData.condition} />
        </div>
        <ChartTabs props={weatherData.chartTrend} />
        <DayThumbsArray nextForecast={weatherData.nextForecast} />
    </>
    )
}