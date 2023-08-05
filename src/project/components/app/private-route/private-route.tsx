import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../../const/const';

type PrivateRouteProps = {
	autorizationStatus: AutorizationStatus;
	children: JSX.Element;
};

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
	const { autorizationStatus, children } = props;

	return (
		autorizationStatus === AutorizationStatus.Auth
			? children
			: <Navigate to={AppRoute.Login} />
	);
}

