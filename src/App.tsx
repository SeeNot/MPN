import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Test from "./pages/test.tsx"

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Test/>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
