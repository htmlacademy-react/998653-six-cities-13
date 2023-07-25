
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Body = styled.body``;

const H1 = styled.h1`
	background-color: #faa6a5;
	front-size: 10px;
	text-align: center;
`;
const Container = styled.div`
	display: flex;
	width: 450px;
	height: 250px;
	margin: 0 auto;
	background-image: url('src/project/pages/not-found-screen/404.gif');
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
`;

const LinkContainer = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function NotFoundScreen() {
	return (
		<Body>
			<H1>
				404.
				<br />
				<small>Not Found</small>
			</H1>
			<Container />
			<LinkContainer>
				<Link to="/">Go to Main Page</Link>
			</LinkContainer>
		</Body>
	);
}
