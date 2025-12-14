import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/LogIn/LogIn.tsx";
import HomePage from "./pages/HomePage.tsx";
import RootLayout from "./pages/RootLayout.tsx"
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {
    const router = createHashRouter([
        {
            element:<RootLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
                },
                {
                    path: "/login",
                    element: <Login/>,
                },
                {
                    path: "/dashboard",
                    element: <Dashboard/>,
                }
            ]
        }

    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;