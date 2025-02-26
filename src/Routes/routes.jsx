import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign_in",
        element: <SignIn />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
