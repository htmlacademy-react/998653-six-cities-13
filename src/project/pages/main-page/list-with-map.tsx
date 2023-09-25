import { useState } from 'react';

import type { ServerOffer } from '../../types/offers';

import { Map } from '../../components/app/map/map';
import { PlaceCard } from '../../components/app/place-card/place-card';

interface ListWithMapProps {
	offers: ServerOffer[];
}


export function ListWithMap({offers}: ListWithMapProps) {
	const [activeOffer, setActiveOffer] = useState<null | string>(null);

	return (
		<div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				<b className="places__found">
					{offers.length} places to stay in  Amsterdam
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
						<PlaceCard
							{...offer}
							key={offer.id}
							extraBemBlock="cities"
							setActive={setActiveOffer}
						/>
					))}
				</div>
			</section>
			<div className="cities__right-section">
				<section>
					<Map activeId={activeOffer} location={offers[0]} offers={offers} className="cities__map"/>
				</section>
			</div>
		</div>
	);
}
