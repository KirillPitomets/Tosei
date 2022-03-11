import L from 'leaflet';
// ======= Icon ======
import icon from '../../../assets/img/map/marker.svg'

const marker = new L.Icon({
		iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export {marker}