import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://lozzeby-server-side.vercel.app/users/my-orders/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(orders);
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

            <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
              Your Orders
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {orders.map((order) => (
              <MyOrder key={order._id} order={order}></MyOrder>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
