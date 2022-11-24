import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading</div>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/users-login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
