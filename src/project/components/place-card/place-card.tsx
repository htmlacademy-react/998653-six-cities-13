import classNames from 'classnames';
import type { ServerOffer } from '../../types/offers';
import { AppLink } from '../../link/link';
import { Dispatch, SetStateAction } from 'react';

type OfferCardProps = Pick<
ServerOffer,
'id' |'isFavorite' | 'isPremium' | 'previewImage' |'price' | 'rating' | 'title' | 'type' > & {
	setActive?: Dispatch<SetStateAction<null | string>>;
}

function PlaceCard({
	setActive,
	id,
	isFavorite,
	isPremium,
	previewImage,
	price,
	rating,
	title,
	type,
}:OfferCardProps) {

	const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
	const favoriteClass = classNames(
		'place-card__bookmark-button',
		{
			'place-card__bookmark-button--active': isFavorite,
		},
		'button'
	);

	const href = `/offer/${id}`;

	function handleMouseEnter() {
		setActive!(id);
	}

	function onMouseLeave() {
		setActive!(null);
	}
	return (
		<article
			className="cities__card place-card"
			onMouseEnter={setActive && handleMouseEnter}
			onMouseLeave={setActive && onMouseLeave}
		>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}

			<div className="cities__image-wrapper place-card__image-wrapper">
				<AppLink href={href}>
					<img
						className="place-card__image"
						src={previewImage}
						width={260}
						height={200}
						alt="Place image"
					/>
				</AppLink>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<button className={favoriteClass} type="button">
						<svg className="place-card__bookmark-icon" width={18} height={19}>
							<use xlinkHref="#icon-bookmark" />
						</svg>
						<span className="visually-hidden">{favoriteLabel}</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${rating * 20}% `}} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<AppLink href={href}>{title}</AppLink>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
}
export { PlaceCard };


