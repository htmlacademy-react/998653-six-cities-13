import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Header } from '../../components/header/header';
import { PlaceCard } from '../../components/place-card/place-card';
import classNames from 'classnames';
import { ServerOffer } from '../../types/offers';


export type MainPageProps = {
	offers: ServerOffer[];
}

function MainPage({ offers }: MainPageProps) {

	const offersByCity: Record<string, ServerOffer[]> = {};
	for(const offer of offers) { //хз
		const city = offer.city.name;
		if (city in offersByCity) {
			offersByCity[city].push(offer);
			continue;
		}

		offersByCity[city] = [offer];
		continue;
	}
	const cities = Object.keys(offersByCity);

	const [selectedCity, setCity] = useState(cities[0]);

	const [activeOffer, setOfer] = useState<null / string>(null);

	return (
		<div className="page page--gray page--main">
			<Header isAuthorized={faker.datatype.boolean()} />
			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{cities.map((city) =>(
								<li className="locations__item" key ={city}>
									<a className={classNames(
										'locations__item-link',
										{
											'tabs__item--active': city === selectedCity,
										},
										'tabs__item'
									)}
									href={`#${city.toLowerCase()}`}
									onClick={() => setCity(city)}
									>
										<span>{city}</span>
									</a>
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
								{offersByCity[selectedCity].length} places to stay in Amsterdam
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
								{offers.map((offer) =>(
									<PlaceCard {...offer} key={offer.id}/>
								))}
							</div>
						</section>
						<div className="cities__right-section">
							<section className="cities__map map" />
						</div>
					</div>
				</div>
			</main>
		</div>

	);
}

export{ MainPage } ;
