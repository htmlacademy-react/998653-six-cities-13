import { mockAuthStatus } from './auth';
import { mockAllOffersInfo } from './offers';

export const mockStore = {
	auth: mockAuthStatus(),
	offers: Array.from({ length: 50 }, mockAllOffersInfo)
};
