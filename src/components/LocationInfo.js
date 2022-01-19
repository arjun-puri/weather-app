import {getDateInIST} from '../helpers/UtilityFunctions'

const LocationInfo = ({place, date, condition}) => {
    var options = { weekday: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata'};

    return(
    <div className="flex flex-col text-right text-gray-500">
        <span className="font-bold text-xl text-black" >{place}</span>
        <span>{getDateInIST(date, options)}</span>
        <span>{condition}</span>
    </div>
)}

export default LocationInfo;