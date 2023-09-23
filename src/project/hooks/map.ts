import { useState, useRef, useEffect } from 'react';
import leaflet from 'leaflet';

import type { MutableRefObject } from 'react';
import type { ServerLocation } from '../types/offers';
import { Map as LeafletMap, TileLayer } from 'leaflet';


function useMap(
	mapRef: MutableRefObject<HTMLElement | null>, //?
	location: ServerLocation): LeafletMap | null {
	const [map, setMap] = useState<LeafletMap | null>(null);
	const isRenderedRef = useRef(false);

	useEffect(() => {
		if(mapRef.current !== null && !isRenderedRef.current) {
			const instance = new LeafletMap(mapRef.current, {
				center:{
					lat: location.latitude,
					lng: location.latitude
				},
				zoom: location.zoom
			});

			const layer = new TileLayer(
				'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
				{
					attribution:

					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				}
			)
				.addTo(instance);

			setMap(instance);
			isRenderedRef.current = true;

		}
	}, [mapRef, location.latitude, location.zoom]);
	return map;
}

export { useMap };
