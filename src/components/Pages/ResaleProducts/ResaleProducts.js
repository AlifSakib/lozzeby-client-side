import React from "react";
import { useLoaderData } from "react-router-dom";
import ResaleProduct from "./ResaleProduct";

const ResaleProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

            <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
              Chose What You Want
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {products.map((product) => (
              <ResaleProduct
                key={product._id}
                product={product}
              ></ResaleProduct>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResaleProducts;
