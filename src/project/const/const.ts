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

const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 1024;

export { AppRoute, AuthorizationStatus, PROJECT_NAME, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH };
