interface ServerLocation {
	latitude: number;
	longitude: number;
	zoom: number;
}

interface ServerOffer {
	push(offer: ServerOffer): unknown;
	city: {
		name: string;
		location: ServerLocation;
	};
	id: string;
	isFavorite: boolean;
	isPremium: boolean;
	location: ServerLocation;
	previewImage: string;
	price: number;
	rating: 0 | 1 | 2 | 3| 4 | 5;
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
