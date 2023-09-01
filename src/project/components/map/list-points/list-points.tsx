import React from 'react';

function ListPoints({points}) {
	return (
		<ul>
			{points.map((point, index) => {
				const keyValue = `${index}`;

				return (
					<li
						key={keyValue}
						className="list-item"
					>
					</li>
				);
			})}
		</ul>
	);
}

export { ListPoints };
