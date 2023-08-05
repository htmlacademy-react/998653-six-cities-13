import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { TemporalData } from '../../const/index';
import { MainPage } from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { FavoritePage }	from '../../pages/favorite-page/favorite-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage }from '../../pages/offer-page/offer-page';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute, PublicRoute } from '../../pages/AccessRoute';


function App() {
	const authorizationStatus = AuthorizationStatus.Auth;
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<MainPage offersAmount={TemporalData.OfferAmount}/>}
						path={AppRoute.Main}
					/>
					<Route
						element={
							<PrivateRoute status={authorizationStatus}>
								<FavoritePage />
							</PrivateRoute>
						}
						path={AppRoute.Favorites}
					/>
					<Route
						element={
							<PublicRoute status={authorizationStatus}>
								<LoginPage></LoginPage>
							</PublicRoute>
						}
						path={AppRoute.Login}
					/>
					<Route
						element={<OfferPage />}
						path={AppRoute.Offer}
					/>
					<Route
						element={<NotFoundScreen />}
						path='*'
					/>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}


export default App;
import { MainPage, MainPageProps } from '../../pages/main-page/main-page';

type AppProps = MainPageProps;

function App({ offersAmount } : AppProps):JSX.Element {
	return <MainPage offersAmount={offersAmount} />;
}


export default App;
