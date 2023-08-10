import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TemporalData } from '../../const/index';
import { MainPage } from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { FavoritePage }	from '../../pages/favorite-page/favorite-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage }from '../../pages/offer-page/offer-page';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute, PublicRoute } from '../../pages/AccessRoute';

const authorizationStatus = AuthorizationStatus.Auth;

const router = createBrowserRouter([
	{
		element: <MainPage offersAmount={TemporalData.OfferAmount}/>,
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
