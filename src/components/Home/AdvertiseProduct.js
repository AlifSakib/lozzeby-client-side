import React from "react";

const AdvertiseProduct = ({ product }) => {
  const { product_image, product_name } = product;
  return (
    <div>
      <div>
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={product_image}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {product_name}
        </p>
        <p className="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
    </div>
  );
};

export default AdvertiseProduct;
