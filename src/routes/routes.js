import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import UserRegister from "../components/Pages/Accounts/UserRegister";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: "Error",
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/user-register",
        element: <UserRegister></UserRegister>,
      },
    ],
  },
]);
