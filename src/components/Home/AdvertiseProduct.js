import React from "react";

const AdvertiseProduct = ({ product }) => {
  console.log(product);
  const { product_image, product_name, product_sold, resale_price, location } =
    product;
  return (
    <div>
      {/* {!product_sold && (
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={product_image}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            {product_name}
          </p>
          <p className="text-gray-700">Price : {resale_price}$</p>
        </div>
      )} */}
      {!product_sold && (
        <div className="relative block border border-gray-100">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-pink-400 hover:bg-pink-500 p-2 text-white"
          >
            <span className="sr-only">Wishlist</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-4 top-14 rounded-full bg-red-500 hover:bg-red-600 p-2 text-white"
          >
            <span className="sr-only">Report Item</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </button>
          <div className="absolute left-2 top-2">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {product.product_sold ? "Sold" : "Available"}
            </p>
          </div>
          <div className="absolute left-2 top-8">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {resale_price}$
            </p>
          </div>
          <div className="absolute left-2 top-14">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {product_name}
            </p>
          </div>
          <div className="absolute left-2 top-20">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {location}
            </p>
          </div>

          <img
            alt="Toy"
            src={product_image}
            className="h-64 w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default AdvertiseProduct;
