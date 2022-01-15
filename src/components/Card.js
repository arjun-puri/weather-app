import React from "react";
import Today from './Today';

export const Card = ({weatherToday, handleUnitType, unitType}) => {

    return(
    <>
        <div>
            <Today data={weatherToday} />
            {/* <LocationInfo /> */}
        </div>
        {/* <ChartTab />
        <DayThumbsArray /> */}
    </>
    )
}