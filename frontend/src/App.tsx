import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
        path: "/home",
        element: <Home />,
      },
      {
        index: true, // Matches the default path "/"
        element: <Navigate to="/home" replace />,
      },
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
