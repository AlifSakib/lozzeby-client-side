import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/Dashboard/AddProducts";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Home from "../components/Home/Home";
import SellerRegister from "../components/Pages/Accounts/SellerRegister";
import UserRegister from "../components/Pages/Accounts/UserRegister";
import UsersLogin from "../components/Pages/Accounts/UsersLogin";
import ResaleProducts from "../components/Pages/ResaleProducts/ResaleProducts";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/users-login",
        element: <UsersLogin></UsersLogin>,
      },
      {
        path: "/seller-register",
        element: <SellerRegister></SellerRegister>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <ResaleProducts></ResaleProducts>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);
