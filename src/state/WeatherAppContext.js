import { createContext, useReducer, useContext } from "react";
import weatherReducer from "./weatherReducer";

const WeatherContext = createContext(null);
const WeatherDispatchContext = createContext(null);

export function useWeatherContext() {
    return useContext(WeatherContext);
}

export function useWeatherDispatchContext() {
    return useContext(WeatherDispatchContext);
}

export function WeatherAppContextWrapper({children}) {
    const [weather, weatherDispatch] = useReducer(weatherReducer, {});

    return(
        <WeatherContext.Provider value={weather}>
            <WeatherDispatchContext.Provider value={weatherDispatch}>
                {children}
            </WeatherDispatchContext.Provider>
        </WeatherContext.Provider>
    )
}

