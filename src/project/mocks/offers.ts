
import { faker } from '@faker-js/faker'; //проблема с импортом
import type { ServerLocation, ServerOffer } from '../types/offers';
import { CITIES, OFFER_TYPES } from '../const/index';

const moskLocation = ():ServerLocation => ({
	latitude: faker.location.latitude(),
	longitude: faker.location.longitude(),
	zoom: faker.number.int({ min: 1, max: 6 })
});

export const mockOfferItem = () => ({
	city: {
		name: faker.helpers.arrayElement(CITIES),
		location: moskLocation(),
	},
	id: faker.string.uuid(),
	isFavorite: faker.datatype.boolean(),
	isPremium: faker.datatype.boolean(),
	location: moskLocation(),
	previewImage: faker.image.urlLoremFlickr({ width: 128, height: 128, category: 'nature' }),
	price: faker.number.int({ min: 50, max: 1000 }),
	rating: faker.number.float({ min: 1, max: 5}) as ServerOffer['rating'], //хз что за запись as ServerOffer['rating']
	title: faker.location.streetAddress(),
	type: faker.helpers.arrayElement(OFFER_TYPES),
});

