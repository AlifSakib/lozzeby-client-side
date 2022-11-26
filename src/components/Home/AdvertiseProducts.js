import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseProduct from "./AdvertiseProduct";

const AdvertiseProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise-products");
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="mb-8">
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
            <span className="relative inline-block text-deep-purple-accent-400 text-5xl font-bold">
              Product Advertise
            </span>
          </span>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {products.map((product) => (
            <AdvertiseProduct
              key={product._id}
              product={product}
            ></AdvertiseProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseProducts;
