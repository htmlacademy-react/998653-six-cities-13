import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom';

import { AppRoute} from '../../const/const';
import { mockAuthStatus } from '../../mocks/auth';
import { mockOffers } from '../../mocks/offers';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute, PublicRoute } from '../../pages/AccessRoute';
import { FavoritePage }	from '../../pages/favorite-page/favorite-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { OfferPage }from '../../pages/offer-page/offer-page';

const authorizationStatus = mockAuthStatus();

const mockedOffers = mockOffers; //или  mockOffers()

const router = createBrowserRouter([
	{
		element: <MainPage offers={mockOffers} />,
		path: AppRoute.Main,
	},

	{
		children: [
			{
				element: 	<FavoritePage />,
				index: true,
			},
		],
		element: <PrivateRoute status={authorizationStatus} />,
		path: AppRoute.Favorites,
	},

	{
		children: [
			{
				element: <LoginPage />,
				index: true,
			},
		],
		element: <PublicRoute status={authorizationStatus} />,
		path: AppRoute.Login
	},

	{
		element: <OfferPage />,
		path: AppRoute.Offer,
	},

	{
		element: <NotFoundScreen />,
		path: '*',
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
