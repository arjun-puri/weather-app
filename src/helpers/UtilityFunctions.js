
// converts temperature from kelvin to celsius
const convertKelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(2);
};

// converts temperature from kelvin to fahrenheit
const convertKelvinToFahrenheit = (tempKelvin) => {
    return (1.8 * (tempKelvin - 273.15 + 32)).toFixed(2);
};

const getDateInIST = (date, options = {weekday: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata'}) => {
    return new Date(date * 1000).toLocaleDateString("en-US", options);
}

export { convertKelvinToCelsius, convertKelvinToFahrenheit, getDateInIST }