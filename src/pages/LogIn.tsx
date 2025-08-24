function login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <div className="border border-white rounded-full w-32 h-32 mb-10">
                <img src="/src/assets/Login/pic.jpg"
                     className="border border-white rounded-full w-32 h-32 mb-10"
                     alt="Profile picture">
                </img>
            </div>

            <button className="border border-white rounded-full p-2 w-56 mb-5 text-2xl">
                Log in Spotify
            </button>

            <button className="border border-white rounded-full p-2 w-40">
                Continue without
            </button>
        </div>
    );
}

export default login;