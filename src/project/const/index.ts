const enum TemporalData {
	OfferAmount = 4,
}

const CITIES = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf',
] as const;

const OFFER_TYPES = [
	'Private Room',
	'Apartament',
	'House',
	'Hotel',
	'Cursed old house',
] as const;

const OFFER_COUNT = 4;

export{ TemporalData, CITIES, OFFER_TYPES, OFFER_COUNT };
