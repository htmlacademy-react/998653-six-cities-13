import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/const';

type PrivateRouteProps = {
	autorizationStatus: AuthorizationStatus;
	children: JSX.Element;
};

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
	const { autorizationStatus, children } = props;

	return (
		autorizationStatus === AuthorizationStatus.Auth
			? children
			: <Navigate to={AppRoute.Login} />
	);
}

