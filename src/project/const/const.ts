const AppRoute = {
	Main: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id'
} as const;

const enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	UnKnown = 'UNKNOWN',
}

const PROJECT_NAME = '6 cities';

export { AppRoute, AuthorizationStatus, PROJECT_NAME };
