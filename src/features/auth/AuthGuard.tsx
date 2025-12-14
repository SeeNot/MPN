import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./AuthContext";

const PUBLIC_ROUTES: string[] = ["/login"];

export const AuthGuard = () => {
	const { token } = useAuth();
	const location = useLocation();

	const isPublic = PUBLIC_ROUTES.includes(location.pathname);
	const hasToken = token && token !== "undefined";

	if (!hasToken && !isPublic) {
		// Redirect them to login, but remember where they were trying to go
		return <Navigate to="/login" replace state={{ from: location }} />;
	}

	// Prevent logged-in users from going to login page
	if (hasToken && isPublic) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
};
