import { createBrowserRouter } from "react-router-dom";
import {
  AuthLayout,
  WrapperLayout,
  HomeLayout,
  ProtectedLayout,
} from "./layouts";
import {
  Home,
  Login,
  Properties,
  CreateProperty,
  SignUp,
  Details,
} from "./pages";

const router = createBrowserRouter([
  {
    element: <WrapperLayout />,
    children: [
      { element: <HomeLayout />, children: [{ path: "/", element: <Home /> }] },
      {
        element: <ProtectedLayout />,
        children: [
          { path: "dashboard", element: <Properties /> },
          { path: "create", element: <CreateProperty /> },
          { path: "details/:id", element: <Details /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "/register", element: <SignUp /> },
          { path: "/login", element: <Login /> },
        ],
      },
    ],
  },
]);

export default router;
