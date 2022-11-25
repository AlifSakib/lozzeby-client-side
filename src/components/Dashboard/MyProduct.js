import React from "react";
import toast from "react-hot-toast";

const MyProduct = ({ product, refetch }) => {
  const { product_image } = product;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/seller/my-product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product Deleted");
          refetch();
        }
      });
  };

  const handleProductAvailable = (product) => {
    fetch(
      `http://localhost:5000/users/seller/my-product-available/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Sell Status set as Available");
          refetch();
        }
      });
  };

  const handleProductSold = (product) => {
    fetch(`http://localhost:5000/users/seller/my-product-sold/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Sell status set as Sold");
          refetch();
        }
      });
  };

  const handleProductAdvertise = (product) => {
    fetch("http://localhost:5000/users/seller/my-product-advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product Added For Advertise");
        }
      });
  };
  return (
    <div className="relative h-[500px]">
      {/* <a href="#" className="relative block border border-gray-100">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          alt="Toy"
          src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="h-56 w-full object-contain"
        />

        <div className="p-6">
          <p className="text-sm font-medium text-gray-600">$14.99</p>

          <h3 className="mt-1 text-lg font-bold">Robot Toy</h3>

          <button
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </a> */}
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 h-full">
        <img
          className="object-cover object-center w-full h-56"
          src={product_image}
          alt="avatar"
        />

        {product?.sell_status === "Available" && (
          <button
            onClick={() => handleProductAdvertise(product)}
            className="w-full"
          >
            <div className="flex items-center px-6 py-3 bg-red-600 hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <h1 className="mx-3 text-lg font-semibold text-white">
                Show For Advertise
              </h1>
            </div>
          </button>
        )}

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {product.product_name}
          </h1>

          <div className="absolute bottom-3">
            <div className="mt-2 space-x-4">
              <button onClick={() => handleProductAvailable(product)}>
                <div>
                  <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase  bg-green-600 hover:bg-green-800 rounded-md">
                    Available
                  </p>
                </div>
              </button>
              <button onClick={() => handleProductSold(product)}>
                <div>
                  <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase  bg-red-600 hover:bg-red-800 rounded-md">
                    Sold
                  </p>
                </div>
              </button>
            </div>
            <button
              onClick={() => handleDelete(product._id)}
              className="w-full"
            >
              <div className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-800 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h1 className="mx-3 text-lg font-semibold text-white">
                  Delete Product
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
