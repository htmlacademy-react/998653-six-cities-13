import classNames from 'classnames';
import { Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import type {ServerLocation, ServerOffer} from '../../../types/offers';

import { useMap } from '../../../hooks/map';
import { activeIcon, defaultIcon} from './icons';

interface MapProps {
	activeId: null | string;
	className?: string;
	location:ServerLocation;
	offers: ServerOffer[];
}

export function Map({activeId, className, location, offers}: MapProps): JSX.Element {

	const mapRef = useRef(null);
	const map = useMap(mapRef, location);

	useEffect(() => {
		if(map){
			const markerLayer = layerGroup().addTo(map);
			offers.forEach((offer) => {
				const marker = new Marker({
					lat: offer.location.latitude,
					lng: offer.location.longitude
				});
				marker
					.setIcon(
						activeId === offer.id
							? activeIcon
							: defaultIcon
					)
					.addTo(markerLayer);
			});
			return () => {
				map.removeLayer(markerLayer);
			};
		}
	}, [map, activeId, offers]);

	//че дальше - ХЗ


	return(
		<div
			ref={mapRef}
			className={classNames(className, 'map')}
		>
		</div>
	);
}


