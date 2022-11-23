import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const ProductCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ["product-categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product-categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-8">
        <span className="relative px-1">
          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
          <span className="relative inline-block text-deep-purple-accent-400 text-5xl font-bold">
            Products Categories
          </span>
        </span>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
