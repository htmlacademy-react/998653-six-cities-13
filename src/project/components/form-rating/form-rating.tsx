import type { ChangeEvent, HTMLAttributes } from 'react'; //?

import classNames from 'classnames';
import { useId } from 'react';

type FormRatingProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
	setRating?: (value: number) => void;
}

interface OptionProps {
	label: string;
	value: number;
}

function Option({ label, value }): OptionProps {
	const id = useId();

	return (
		<>
			<input
				className="form__rating-input visually-hidden"
				defaultValue = {value} //?
				id = {id}
				name="rating"
				value="4"
				type="radio"
			/>
			<label
				htmlFor="4-stars"
				className="reviews__rating-label form__rating-label"
				title="good"
			>
				<svg
					aria-labelledby={`${id}-title`} //это типа связывания?
					className="form__star-image"
					width="37"
					height="33"
				>
					<title id={`${id}-title`}>{label}</title>
					<use xlinkHref="#icon-star" />
				</svg>
			</label>
		</>
	);
}

export function FormRating({ className, setRating }: FormRatingProps) {
	function handleChange(event: ChangeEvent<HTMLInputElement>) { //?
		if(setRating) {
			setRating(Number(event.target.value));
		}
	}

	return(
		<div className={classNames('form-rating', className)} onChange={handleChange}>
			<Option label="perfect" value={5} />
			<Option label="good" value={4} />
			<Option label="not bad" value={3} />
			<Option label="badly" value={2} />
			<Option label="terribly" value={1} />

		</div>

	);
}
