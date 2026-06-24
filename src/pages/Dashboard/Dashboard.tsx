import { useAuth } from "../../features/auth/AuthContext.tsx";
import { useCurrentUser } from "../../hooks/useSpotify";

function Dashboard() {
  const { logout } = useAuth();
  const { data: user, isLoading, error } = useCurrentUser();

  if (isLoading)
    return (
      <>
        <div className="text-white">Loading profile...</div>
        <button type="submit" onClick={logout}>
          Logout
        </button>
      </>
    );
  if (error) return <div className="text-red-500">Error loading data</div>;

  return (
    <>
      <h1>works</h1>
      <button type="submit" onClick={logout}>
        Logout
      </button>
      <div className="mt-4">
        <p>Followers: {user?.followers.total}</p>
      </div>
    </>
  );
}

export default Dashboard;
