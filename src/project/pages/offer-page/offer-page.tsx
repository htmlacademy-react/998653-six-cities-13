import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import type { FullOffer } from '../../types/offers';

import { Header } from '../../components/app/header/header';
import { AuthorizationStatus } from '../../const/const';
import { useDocumentTitle } from '../../hooks/document-title';
import { OfferDetails } from '../../components/app/offer-details/offer-details';
import { mockStore } from '../../mocks/index';

interface LoaderResponse {
	isAuthorized: boolean;
	offer: FullOffer;
}
// const dateFormatter = new Intl.DateTimeFormat(
// 	'en-Us',
// 	{
// 		month: 'long',
// 		year: 'numeric'
// 	}
// );

export function OfferPage() {
	useDocumentTitle('Offer Example');
	const { isAuthorized, offer } = useLoaderData() as LoaderResponse;
	return(
		<div className="page">
			<Header isAuthorized={isAuthorized}/>
			<main className="page__main page__main--offer">
				<section className="offer">
					<OfferDetails offer={offer} />

					{/* {отдельный компонент} */}
					<section className="offer__map map" />
				</section>

				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">
          Other places in the neighbourhood
						</h2>
						<div className="near-places__list places__list">
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/room.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€80</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button place-card__bookmark-button--active button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">In bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Wood and stone place</a>
									</h2>
									<p className="place-card__type">Private room</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/apartment-02.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€132</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '80%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Canal View Prinsengracht</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
							<article className="near-places__card place-card">
								<div className="place-card__mark">
									<span>Premium</span>
								</div>
								<div className="near-places__image-wrapper place-card__image-wrapper">
									<a href="#">
										<img
											className="place-card__image"
											src="img/apartment-03.jpg"
											width={260}
											height={200}
											alt="Place image"
										/>
									</a>
								</div>
								<div className="place-card__info">
									<div className="place-card__price-wrapper">
										<div className="place-card__price">
											<b className="place-card__price-value">€180</b>
											<span className="place-card__price-text">/&nbsp;night</span>
										</div>
										<button
											className="place-card__bookmark-button button"
											type="button"
										>
											<svg
												className="place-card__bookmark-icon"
												width={18}
												height={19}
											>
												<use xlinkHref="#icon-bookmark" />
											</svg>
											<span className="visually-hidden">To bookmarks</span>
										</button>
									</div>
									<div className="place-card__rating rating">
										<div className="place-card__stars rating__stars">
											<span style={{ width: '100%' }} />
											<span className="visually-hidden">Rating</span>
										</div>
									</div>
									<h2 className="place-card__name">
										<a href="#">Nice, cozy, warm big bed apartment</a>
									</h2>
									<p className="place-card__type">Apartment</p>
								</div>
							</article>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

//пояснить
export function loader({
	params,
}: LoaderFunctionArgs): LoaderResponse | Response {
	const id = params.id;

	if(id === undefined) {
		return new Response('Not Found', { status: 404});
	}
	const { auth, offers } = mockStore;

	const offer = offers.find((storeOffer) => storeOffer.id === id);
	return {
		isAuthorized: auth === AuthorizationStatus.Auth,
		offer,
	};
}

