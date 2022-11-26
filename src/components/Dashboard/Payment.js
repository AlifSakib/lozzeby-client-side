import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M60o6JYKMdyVPnVMbujl8r9aitqa7xnxmCF3FDH2xbe3BSDJ0ZSzGGyz2fWmzUtMm1CrhPp5WTBr2QKLU5NaaFJ00PRcHsXXp"
);
const Payment = () => {
  const order = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none text-blue-600">
                Payment for {order.product_name}
              </h2>
            </div>
            <div className="w-96">
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
