const BASE_URL = "https://api.spotify.com/v1"; // Corrected URL for actual Spotify API

// 1. Helper now accepts token
async function spotifyFetch<T>(endpoint: string, token: string): Promise<T> {
	// We trust the caller to provide the token now
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		if (response.status === 401) {
			// Optional: You could throw a specific error type here
			throw new Error("TokenExpired");
		}
		throw new Error(`Spotify API Error: ${response.statusText}`);
	}

	return response.json();
}

export interface UserProfile {
	id: string;
	display_name: string;
	images: { url: string; height: number; width: number }[];
	followers: { total: number };
}

// 2. Exported functions now ask for token
export const getCurrentUserProfile = (token: string) => {
	return spotifyFetch<UserProfile>("/me", token);
};
