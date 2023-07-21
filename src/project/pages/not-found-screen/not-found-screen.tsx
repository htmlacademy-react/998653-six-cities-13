import { Link } from 'react-router-dom';

export function NotFoundScreen() {
	return (
		<body>
			<h1 style={{textAlign:'center'}}>
					404.
				<br />
				<small style={{textAlign:'center'}}>Not Found</small>
			</h1><Link to='/'>Go to Main Page</Link>
		</body>
	);
}
