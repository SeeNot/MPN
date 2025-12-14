import { createContext, type ReactNode, useContext, useState } from "react";

// Define the shape of your context
interface AuthContextType {
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [token, setToken] = useState<string | null>(() => {
		return localStorage.getItem("spotify_access_token");
	});

	const login = (newToken: string) => {
		localStorage.setItem("spotify_access_token", newToken);
		setToken(newToken);
	};

	const logout = () => {
		localStorage.removeItem("spotify_access_token");
		setToken(null);
	};

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
