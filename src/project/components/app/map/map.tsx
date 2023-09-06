import React, { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../../hooks/useMap';

function Map({city}) {
	const mapRef = useRef(null);
	const map = useMap(mapRef, city);


	return(
		<div ref={mapRef}>

		</div>
	);
}

export { Map };
