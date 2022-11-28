import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

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
    product_sold,
    seller_email,
    product_condition,
  } = product;

  // const [isVerifyed, setIsVerifyed] = useState("");
  // useEffect(() => {
  //   fetch(`http://localhost:5000/check-seller-status/${seller_email}`)
  //     .then((res) => res.json())
  //     .then((data) => setIsVerifyed(data));
  // }, [seller_email]);

  const { data: isVerifyed, refetch } = useQuery({
    queryKey: ["seller-status", seller_email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/check-seller-status/${seller_email}`
      );
      const data = res.json();
      return data;
    },
  });

  refetch();

  const handleReport = (product) => {
    fetch("http://localhost:5000/reported-products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product Reported");
        }
      });
  };
  return (
    <div>
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
            onClick={() => handleReport(product)}
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
              {isVerifyed ? "Verifyed" : "Not Verifyed"}
            </p>
          </div>

          <img
            alt="Toy"
            src={product_image}
            className="h-64 w-full object-cover"
          />

          <div className="h-full">
            <div className="px-4 py-2 ">
              <h3 className="mt-1 text-xl font-bold">{product_name}</h3>
              <p className=" px-3 mt-2 py-px h-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400 flex items-center">
                Seller Name : {seller_name}
                <span className="ml-1">
                  {isVerifyed && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-sky-100 bg-blue-accent-400 rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </span>
              </p>

              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Resale Price : {resale_price}$
              </p>
              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Original Price : {original_price}$
              </p>

              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Location : {location}
              </p>
              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Used : {years_of_use} Year
              </p>
              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Condition : {product_condition}
              </p>

              <p className="block mt-1 px-3 py-1 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-md bg-teal-accent-400">
                Publish Time : {time}
              </p>
            </div>
            <button
              // onClick={openModal}
              onClick={() => handleCart(product)}
              type="button"
              className="mt-4 flex w-full items-center justify-center text-white rounded-sm bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 px-8 py-4"
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
      )}
    </div>
  );
};

export default ResaleProduct;
