import React from 'react';
import { mockOfferItem } from '../../mocks/offers';
import { PlaceCard } from '../../components/place-card/place-card';

const OfferPage = () =>{
	const offer = mockOfferItem();

	return <PlaceCard {...offer} />;

};


