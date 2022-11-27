import React from "react";
import image from "../../assets/images/banner-image.avif";
import image2 from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      {/* <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
              Easiest way to Buy & Sell Used Products
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Create Account</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easiest Way To Buy Or Sell Product</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy Payment</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={banner_image}
            alt=""
          />
        </div>
      </div> */}

      <div className="relative mb-4">
        <img
          src={image2}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-slate-900">
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Get the best of Shopping with LozzeBy.{" "}
                  <br className="hidden md:block" />
                  Enjoy low prices and great deals ...
                </h2>
                <p className="max-w-xl mb-4 text-base text-white font-poppins md:text-lg">
                  LozzyBy a resale product based platfrom where you will find
                  thousends of reused products in a reasonable price . The great
                  thing is you can also become a member by creating and account
                  today and its easy .
                </p>
              </div>
              <div className="w-full max-w-2xl xl:px-8 ">
                <div className="flex items-center justify-center w-full h-96 ">
                  <img
                    className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
