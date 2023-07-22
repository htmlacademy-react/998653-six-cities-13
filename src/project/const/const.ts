const AppRoute = {
	Main: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id'
} as const;

const AutorizationStatus = {
	Auth: 'AUTH',
	NoAuth:  'NO_AUTH',
	UnKnown: 'UNKNOWN',
} as const;

const PROJECT_NAME = '6 cities';

export { AppRoute, AutorizationStatus, PROJECT_NAME };
