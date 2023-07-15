import faker from '@faker-js/faker';
import { OFFER_COUNT, CITIES, OFFER_TYPES } from '../const/const';

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
		latitude: faker.location.latitude(10, -10, 5),
		longitude: faker.location.longitude(10, -10, 5),
		zoom: faker.number.int({ min: 1, max: 6 })
	};

	const city: city = {
		name: faker.helpers.arrayElement(CITIES),
		location: location
	};

	return ({
		id: faker.string.uuid(),
		title: faker.word.words({count:{ min: 5, max: 10 }}),
		type: faker.helpers.arrayElement(OFFER_TYPES),
		price: faker.number.int({ min: 50, max: 1000 }),
		city: city,
		location: location,
		isFavorite: faker.datatype.boolean(),
		isPremium: faker.datatype.boolean(),
		rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
		previewImage: faker.image.urlLoremFlickr({  width: 128, height: 128, category: 'nature' })
	});
}

const offers = faker.helpers.multiple(getOffer, {count: OFFER_COUNT});

export default offers;
