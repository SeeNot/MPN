import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/AuthContext";
import { getCurrentUserProfile } from "../services/spotify.api";

export const useCurrentUser = () => {
	const { token } = useAuth();
	return useQuery({
		queryKey: ["currentUser", token],
		// biome-ignore lint/style/noNonNullAssertion: Token is guaranteed by enabled flag
		queryFn: () => getCurrentUserProfile(token!),
		enabled: !!token,
	});
};
