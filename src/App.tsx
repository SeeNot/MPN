import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AuthGuard } from "./features/auth/AuthGuard.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Login from "./pages/LogIn/LogIn.tsx";
import RootLayout from "./pages/RootLayout.tsx";

function App() {
	const router = createHashRouter([
		{
			element: <RootLayout />,
			children: [
				{
					element: <AuthGuard />,
					children: [
						{
							path: "/",
							element: <Dashboard />,
						},
						{
							path: "/login",
							element: <Login />,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
