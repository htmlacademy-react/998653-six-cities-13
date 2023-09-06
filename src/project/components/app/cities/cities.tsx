import { PlaceCard } from '../place-card/place-card';
import { ServerOffer } from '../../../types/offers';
import { MainPageProps } from '../../../pages/main-page/main-page';
import { useState } from 'react';


function Cities({offers}: MainPageProps) {
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

	return(<div className="cities">
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
					{offers.map((offer) =>(
						<PlaceCard {...offer} key={offer.id}/>
					))}
				</div>
			</section>
			<div className="cities__right-section">
				<section>
				</section>
			</div>
		</div>
        </div>);
}

export { Cities };
