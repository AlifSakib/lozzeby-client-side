import React from "react";

const ResaleProduct = ({ product, openModal, handleCart }) => {
  const {
    product_name,
    product_image,
    location,
    resale_price,
    original_price,
    years_of_use,
    time,
    seller_name,
  } = product;
  return (
    <div>
      <div className="relative block border border-gray-100">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
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
        <div className="absolute left-2 top-2">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {product.sell_status}
          </p>
        </div>

        <img
          alt="Toy"
          src={product_image}
          className="h-full w-full object-contain"
        />

        <div className="p-6">
          <h3 className="mt-1 text-2xl font-bold">{product_name}</h3>
          <p className="text-sm font-medium text-gray-600">
            Resale Price : {resale_price}$
          </p>
          <p className="text-sm font-medium text-gray-600">
            Original Price : {original_price}$
          </p>
          <p className="text-sm font-medium text-gray-600">
            Location : {location}
          </p>
          <p className="text-sm font-medium text-gray-600">
            Used : {years_of_use} Year
          </p>
          <p className="text-sm font-medium text-gray-600">
            Seller Name : {seller_name}
          </p>
          <p className="text-sm font-medium text-gray-600">
            Publish Time : {time}
          </p>
          <button
            // onClick={openModal}
            onClick={() => handleCart(product)}
            type="button"
            className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
          >
            <span className="text-sm font-medium"> Add to Cart </span>

            <svg
              className="ml-1.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResaleProduct;
