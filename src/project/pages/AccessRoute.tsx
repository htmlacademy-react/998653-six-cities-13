import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { AutorizationStatus } from '../const/const';
import { AppRoute } from '../const/const';

interface AccessRouteProps {
	children: ReactNode;
	status: AutorizationStatus;
}

const createAccessRoute = (accessStatus: AutorizationStatus, navigateRoute: string) => {
	// eslint-disable-next-line no-unused-expressions
	({children, status}:AccessRouteProps) => {
		if(status === accessStatus) {
			return children;
		}
		return <Navigate to={navigateRoute} />;
	};
};

export const PrivateRoute = createAccessRoute(AutorizationStatus.Auth, AppRoute.Login);
export const PublicRoute = createAccessRoute(AutorizationStatus.NoAuth, AppRoute.Main);
