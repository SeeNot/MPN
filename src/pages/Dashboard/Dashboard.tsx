import { useAuth } from "../../features/auth/AuthContext.tsx";

function Dashboard() {
	const { logout } = useAuth();
	return (
		<>
			<h1>works</h1>
			<button type="submit" onClick={logout}>
				Logout
			</button>
		</>
	);
}

export default Dashboard;
