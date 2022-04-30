import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import HomePage from 'pages/HomePage';
import DashboardPage from 'pages/DashboardPage';

const Routes = (): JSX.Element => (
	<BrowserRouter>
		<RouterRoutes>
			<Route path="/" element={<PublicRoute children={<HomePage />} />} />
			<Route path="/dashboard" element={<PublicRoute children={<DashboardPage />} />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</RouterRoutes>
	</BrowserRouter>
);

export default Routes;
