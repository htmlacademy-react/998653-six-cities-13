/* eslint-disable no-unused-expressions */
import { ReactNode } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { AuthorizationStatus } from '../const/const';
import { AppRoute } from '../const/const';

interface AccessRouteProps {
	status: AuthorizationStatus;
}
// eslint-disable-next-line react/display-name
const createAccessRoute = (accessStatus: AuthorizationStatus, navigateRoute: string) => ({status}:AccessRouteProps) => {
	if(status === accessStatus) {
		return <Outlet />;
	}
	return <Navigate to={navigateRoute} />;
};

export const PrivateRoute = createAccessRoute(AuthorizationStatus.Auth, AppRoute.Login);
export const PublicRoute = createAccessRoute(AuthorizationStatus.NoAuth, AppRoute.Main);
