import { redirectToAuthCodeFlow } from "./authCodeWithPkce.ts";

function Login() {
	const handleSpotifyLogin = () => {
		redirectToAuthCodeFlow();
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="border border-white rounded-full w-32 h-32 mb-10">
				<img
					src="/src/assets/Login/pic.jpg"
					className="border border-white rounded-full w-32 h-32 mb-10"
					alt="Profile picture"
				/>
			</div>

			<button
				onClick={handleSpotifyLogin}
				className="border border-white rounded-full p-2 w-56 mb-5 text-2xl cursor-pointer"
			>
				Log in Spotify
			</button>
		</div>
	);
}

export default Login;
