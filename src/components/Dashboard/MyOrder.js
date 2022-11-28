import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyOrder = ({ order }) => {
  const { product_name, product_image, product_price, product_id } = order;

  const [currentProduct, setCurrentProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://lozzeby-server-side.vercel.app/buyer-order/product-detail/${order?.product_id}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentProduct(data.result));
  }, [order?.product_id]);

  return (
    <div>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {product_name}
          </h1>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src={product_image}
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">${product_price}</h1>

          {order.payment_status ? (
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-green-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Paid
            </button>
          ) : (
            <Link
              to={`/dashboard/payment/${order._id}`}
              // className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
            >
              {currentProduct?.product_sold ? (
                <button
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                  disabled
                >
                  Sold
                </button>
              ) : (
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Pay Now
                </button>
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
