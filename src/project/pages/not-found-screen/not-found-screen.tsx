import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function NotFoundScreen() {
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<Fragment>
			<body>
				<h1>
					404.
					<br />
					<small>Not Found</small>
				</h1><Link to='/'>Go to Main Page</Link>
			</body>
		</Fragment>
	);
}
