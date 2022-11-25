import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin);

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }
  return <Navigate to="/users-login"></Navigate>;
};

export default AdminRoute;
