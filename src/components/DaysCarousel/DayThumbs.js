import { convertKelvinToCelsius, getDateInIST } from '../../helpers/UtilityFunctions'

function DayThumbs({ dayForecast }) {
    const { date, min, max, iconUrl, condition } = dayForecast;
    const minC = convertKelvinToCelsius(min);
    const maxC = convertKelvinToCelsius(max);

    return (
        <div className='flex rounded-md flex-col justify-center items-center mx-3'>
            <span>{getDateInIST(date).split(' ')[0].slice(0,3)}</span>
            <img src={iconUrl} alt={condition} />
            <div className='flex justify-between text-xs'>
                <span className='mr-2'>{Math.trunc(maxC)}<sup>°C</sup></span>
                <span className='text-gray-500'>{Math.trunc(minC)}<sup>°C</sup></span>
            </div>
        </div>
    )
}

export default DayThumbs;