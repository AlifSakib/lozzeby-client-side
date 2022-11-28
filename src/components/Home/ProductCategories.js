import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BeatLoader } from "react-spinners";
import Category from "./Category";

const ProductCategories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["product-categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product-categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-16 lg:px-8 lg:py-10">
      <div className="mb-8">
        <span className="relative px-1">
          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-green-200" />
          <span className="relative inline-block text-deep-purple-accent-400 text-5xl font-bold">
            Products Categories
          </span>
        </span>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-20">
          <BeatLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {categories.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
