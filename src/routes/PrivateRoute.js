import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return (
    <Navigate to="/users-login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
