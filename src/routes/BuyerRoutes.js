import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";
import useBuyer from "../Hooks/useBuyer";

const BuyerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (loading || isBuyerLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }

  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/users-login"></Navigate>;
};

export default BuyerRoutes;
