import React from "react";

const MyOrder = ({ order }) => {
  const { product_name, product_image, product_price } = order;
  return (
    <div>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            {product_name}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src={product_image}
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">${product_price}</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;