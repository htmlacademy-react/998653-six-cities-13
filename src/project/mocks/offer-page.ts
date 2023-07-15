import faker from '@faker-js/faker';
import { OFFER_COUNT } from '../const/const';

type location= {
	latitude: number;
	longitude: number;
	zoom: number;
}

type city = {
	name: string;
	location: location;
}

export interface offer {
	id: string;
	title: string;
	type: string;
	price: number;
	city: city;
	location: location;
	isFavorite: boolean;
	isPremium: boolean;
	rating: number;
	previewImage: string;
}

function getOffer(){

	const location: location = {
		latitude: faker.location.latitude(),
		longitude: faker.location.longitude(),
		zoom: 1
	};

	const city: city = {
		name: 'string',
		location: location
	};

	return ({
		id: faker.string.uuid(),
		title: 'Beautiful & luxurious studio at great location',
		type: 'apartment',
		'price': 120,
		'city':  city,
		'location': location,
		'isFavorite': false,
		'isPremium': false,
		'rating': 4,
		'previewImage': 'https://url-to-image/image.png'
	});
}

function getOffers(): offer[]{
	return Array.from({length: OFFER_COUNT}, getOffer());
}

export default getOffers();
