import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://lozzeby-server-side.vercel.app/users/seller/products/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

            <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
              Your Products
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {products?.map((product) => (
              <MyProduct
                key={product._id}
                product={product}
                refetch={refetch}
              ></MyProduct>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
