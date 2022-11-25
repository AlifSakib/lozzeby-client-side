import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/Dashboard/AddProducts";
import AllBuyers from "../components/Dashboard/Admin/AllBuyers";
import AllSellers from "../components/Dashboard/Admin/AllSellers";
import ReportedItems from "../components/Dashboard/Admin/ReportedItems";
import DashboardHome from "../components/Dashboard/DashboardHome";
import MyOrders from "../components/Dashboard/MyOrders";
import MyProducts from "../components/Dashboard/MyProducts";
import Home from "../components/Home/Home";
import SellerRegister from "../components/Pages/Accounts/SellerRegister";
import UserRegister from "../components/Pages/Accounts/UserRegister";
import UsersLogin from "../components/Pages/Accounts/UsersLogin";
import Blogs from "../components/Pages/Blog/Blogs";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import ResaleProducts from "../components/Pages/ResaleProducts/ResaleProducts";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AdminRoute from "./AdminRoute";
import BuyerRoutes from "./BuyerRoutes";
import PrivateRoute from "./PrivateRoute";
import SellerRoutes from "./SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-order",
        element: (
          <BuyerRoutes>
            <MyOrders></MyOrders>
          </BuyerRoutes>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoutes>
            <AddProducts></AddProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/my-product",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported-items",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
