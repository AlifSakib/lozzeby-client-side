import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isSellerLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/users-login"></Navigate>;
};

export default SellerRoutes;
