import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isSellerLoading) {
    return "Loading";
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/users-login"></Navigate>;
};

export default SellerRoutes;
