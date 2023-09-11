import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { Header } from '../../components/app/header/header';
import { AppLink } from '../../link/link';
import { PlaceCard } from '../..//components/app/place-card/place-card';
import { AuthorizationStatus } from '../../const/const';
import { mockStore } from '../../mocks/index';
import type { ServerOffer } from '../../types/offers';

 interface LoaderResponse {
	auth: AuthorizationStatus;
	cities: string[];
	offersByCity: Record<string, ServerOffer[]>;
}

function MainPage() {
	const {auth, cities, offersByCity} = useLoaderData() as LoaderResponse; // ?

	const [selectedCity, setSelectedCity] = useState(cities[0]);

	const {hash} = useLocation(); //что возвращает ? location?
	const navigate = useNavigate();

	useEffect(() => {
		if(hash.length === 0) {
			return navigate(`#${selectedCity.toLowerCase()}`);
		}

		const cityLowerCase = hash.slice(1);
		setSelectedCity(cityLowerCase[0].toUpperCase + cityLowerCase.slice(1));

	},[hash]);


	return (
		<div className="page page--gray page--main">
			<Header isAuthorized={AuthorizationStatus.Auth} />
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{cities.map((city) =>(
								<li className="locations__item" key ={city}>
									<AppLink
										className={classNames(
											'locations__item-link',
											{
												'tabs__item--active': city === selectedCity,
											},
											'tabs__item'
										)}
										href={`#${city.toLowerCase()}`}
									>
										<span>{city}</span>
									</AppLink>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">
								{offersByCity[selectedCity].length} places to stay in {selectedCity}
							</b>
							<form className="places__sorting" action="#" method="get">
								<span className="places__sorting-caption">Sort by</span>
								<span className="places__sorting-type" tabIndex={0}>
					Popular
									<svg className="places__sorting-arrow" width={7} height={4}>
										<use xlinkHref="#icon-arrow-select" />
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li
										className="places__option places__option--active"
										tabIndex={0}
									>
						Popular
									</li>
									<li className="places__option" tabIndex={0}>
						Price: low to high
									</li>
									<li className="places__option" tabIndex={0}>
						Price: high to low
									</li>
									<li className="places__option" tabIndex={0}>
						Top rated first
									</li>
								</ul>
							</form>
							<div className="cities__places-list places__list tabs__content">
								{offersByCity[selectedCity].map((offer) =>(
									<PlaceCard {...offer} key={offer.id}/>
								))}
							</div>
						</section>
						<div className="cities__right-section">
							<section>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>

	);
}
// eslint-disable-next-line react-refresh/only-export-components
export function loader(): LoaderResponse {
	const{auth, offers} = mockStore;
	const cities: string[] = [];

	const offersByCity = {};
	for (const offer of offers) {
		const city = offer.city.name;
		if(city in offersByCity) {
			offersByCity[city].push(offer);
			continue;
		}

		cities.push(city);
		offersByCity[city] = [offer];
		continue;
	}

	return {
		auth,
		cities: cities.sort(),
		offersByCity
	};
}

export{ MainPage } ;

