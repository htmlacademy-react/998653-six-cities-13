import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom';


import { AppRoute} from '../../const/const';
import { mockStore } from '../../mocks/index';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute, PublicRoute } from '../../pages/AccessRoute';
import { FavoritePage }	from '../../pages/favorite-page/favorite-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { loader as AllOffersLoader, MainPage } from '../../pages/main-page/main-page';
import { loader as OfferLoader, OfferPage }from '../../pages/offer-page/offer-page';


const router = createBrowserRouter([
	{
		element: <MainPage />,
		loader: AllOffersLoader,
		path: AppRoute.Main,
	},

	{
		children: [
			{
				element: <FavoritePage />,
				index: true,
			},
		],
		element: <PrivateRoute status={mockStore.auth}> </PrivateRoute>,
		path: AppRoute.Favorites,
	},

	{
		children: [
			{
				element: <LoginPage />,
				index: true,
			},
		],
		element: <PublicRoute status={mockStore.auth}> </PublicRoute>,
		path: AppRoute.Login
	},

	{
		element: <OfferPage />,
		errorElement: <NotFoundScreen />,
		loader: OfferLoader,
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
