import React, { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../../hooks/map';

function Map({activeId, location, offers}) {
	const mapRef = useRef(null);
	const map = useMap(mapRef, location.latitude, location.zoom);


	return(
		<div ref={mapRef}>

		</div>
	);
}

export { Map };
