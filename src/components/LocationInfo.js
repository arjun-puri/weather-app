import {getDateInIST} from '../helpers/UtilityFunctions'

const LocationInfo = ({place, date, condition}) => {
    var options = { weekday: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata'};

    return(
    <div>
        <span>{place}</span>
        <span>{getDateInIST(date)}</span>
        <span>{condition}</span>
    </div>
)}

export default LocationInfo;