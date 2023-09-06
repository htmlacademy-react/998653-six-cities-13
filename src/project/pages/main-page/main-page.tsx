import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Header } from '../../components/app/header/header';
import classNames from 'classnames';
import { ServerOffer } from '../../types/offers';
import { Cities } from '../../components/app/cities/cities';

export type MainPageProps = {
	offers: ServerOffer[];
}

function MainPage({ offers }: MainPageProps) {

	const offersByCity: Record<string, ServerOffer[]> = {};

	for(const offer of offers) {
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
				<Cities offers={offers}/>
			</main>
		</div>

	);
}

export{ MainPage } ;
