import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const { product_price, name, email, _id } = order;
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [product_price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setPaymentProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const paymentDetails = {
        product_price,
        transactionId: paymentIntent.id,
        email,
        order_id: _id,
      };

      fetch("http://localhost:5000/user/order/payment-details", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSuccess("Payment Complete 🎉");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setPaymentProcessing(false);
  };

  return (
    <div>
      <div>
        <p className="inline-block mt-3 px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-sky-800 uppercase rounded-md bg-sky-200">
          You will be charged{" "}
          <span className="text-purple-600">{product_price}$</span> for you
          Product.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border-2 py-4 px-4 border-green-500 rounded-md"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div>
          {cardError && (
            <p className="inline-block mt-3 px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-md bg-red-400">
              {cardError}
            </p>
          )}
        </div>
        {/* <button type="submit" disabled={!stripe}>
          Pay
        </button> */}
        <button
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
          className="mt-5 w-64 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Pay
        </button>
        {success && (
          <>
            <p className="inline-block mt-3 px-3 py-2 mb-2 text-xs font-semibold tracking-wider text-teal-800 uppercase rounded-md bg-green-200">
              {success}
            </p>
            <p className="inline-block mt-1 px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-teal-800 uppercase rounded-md bg-green-200">
              TransactionID : {transactionId}
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
