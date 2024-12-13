import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import MasterLayout from "./layouts/MasterLayout";
import AuthLayout from "./layouts/AuthLayout";
import AuthPage from "./pages/AuthPage/AuthPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,

    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/:mode",
        element: <AuthPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
