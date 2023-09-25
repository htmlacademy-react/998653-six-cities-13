interface ServerLocation {
	latitude: number;
	longitude: number;
	zoom: number;
}

interface City {
	name: string;
	location: ServerLocation;
}

interface ServerOffer {
	city: City;
	id: string;
	isFavorite: boolean;
	isPremium: boolean;
	location: ServerLocation;
	previewImage: string;
	price: number;
	rating: number;
	title: string;
	type: string;
}

type FullOffer = Omit<ServerOffer, 'previewImage'> & {
	description: string;
	bedrooms: number;
	goods: string[];
	host: {
		name: string;
		avatarUrl: string;
		isPro: boolean;
	};
images: string[];
maxAdults: number;
}
export type { ServerLocation, ServerOffer, FullOffer };
