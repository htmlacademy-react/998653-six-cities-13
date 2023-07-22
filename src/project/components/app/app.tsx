import { MainPage, MainPageProps } from '../../pages/main-page/main-page';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const/const';
import { FavoritePage }	from '../../pages/favorite-page/favorite-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { OfferPage }from '../../pages/offer-page/offer-page';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivatrRoute } from './private-route/private-route';
type AppProps = MainPageProps;

function App({ offersAmount } : AppProps):JSX.Element {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<MainPage offersAmount={offersAmount}/>} />
					<Route
						path={AppRoute.Favorites}
						element={
							<PrivatrRoute
								autorizationStatus={AutorizationStatus.NoAuth}
							>
								<FavoritePage />
							</PrivatrRoute>
						}
					/>
					<Route
						path={AppRoute.Login}
						element={<LoginPage />}
					/>
					<Route
						path={AppRoute.Offer}
						element={<OfferPage />}
					/>
					<Route
						path='*'
						element={<NotFoundScreen />}
					/>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}


export default App;
