import {createHashRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/LogIn.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {

    const router = createHashRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/login",
            element: <Login/>,
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
