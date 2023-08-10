import { faker } from '@faker-js/faker';
import type { FullOffer, ServerLocation, ServerOffer } from '../types/offers';
import { CITIES, OFFER_TYPES } from '../const/index';

const mockLocation = ():ServerLocation => ({
	latitude: faker.location.latitude(),
	longitude: faker.location.longitude(),
	zoom: faker.number.int({ min: 1, max: 6 })
});

export const mockOfferItem = (): ServerOffer => ({
	city: {
		name: faker.helpers.arrayElement(CITIES),
		location: mockLocation(),
	},
	id: faker.string.uuid(),
	isFavorite: faker.datatype.boolean(),
	isPremium: faker.datatype.boolean(),
	location: mockLocation(),
	previewImage: faker.image.urlLoremFlickr({ width: 128, height: 128, category: 'nature' }),
	price: faker.number.int({ min: 50, max: 1000 }),
	rating: faker.number.float({ min: 1, max: 5}) as ServerOffer['rating'],
	title: faker.location.streetAddress(),
	type: faker.helpers.arrayElement(OFFER_TYPES),
});

export const mockAllOffersInfo = (): ServerOffer & FullOffer => ({
	... mockOfferItem(),
	bedrooms: faker.number.int({max: 12, min: 11}),
	description: faker.lorem.sentences(2, '\n'),
	goods: faker.lorem.words(5).split(' '),
	host: {
		name: faker.internet.userName(),
		avatarUrl: faker.internet.avatar(),
		isPro: faker.datatype.boolean(),
	},
	images: Array.from({ length: faker.number.int({max: 12, min: 0 }) }, () => faker.image.urlLoremFlickr({category: 'apartament'})),
	maxAdults: faker.number.int({max: 12, min: 0})
});

