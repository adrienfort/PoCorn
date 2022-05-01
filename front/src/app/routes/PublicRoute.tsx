import PublicLayout from 'app/layouts/PublicLayout';

type PublicRouteProps = { children: JSX.Element };

const PublicRoute = ({ children }: PublicRouteProps): JSX.Element => <PublicLayout>{children}</PublicLayout>;

export default PublicRoute;
