import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getAccessToken } from './LogIn/auth.service.ts';
import { useAuth } from "../features/auth/AuthContext.tsx";

// This component wraps EVERY page in your app
function RootLayout(){
    const { token, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            return
        }

        const params = new URLSearchParams(window.location.search);
        const code : string|null = params.get("code");

        if (code) {
            console.log("Authorization Code found! Exchanging...");

            getAccessToken(code)
                .then((access_token) => {
                    // 2. Save token
                    login(access_token)

                    window.history.replaceState({}, document.title, "/");

                    navigate('/dashboard');
                })
                .catch((err) => {
                    console.error("Login Failed:", err);
                    navigate('/login');
                });
        }
    }, [navigate]);

    return <Outlet/>;
}

export default RootLayout