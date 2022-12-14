import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthProvider";
import BookingModal from "./BookingModal";
import ResaleProduct from "./ResaleProduct";

const ResaleProducts = () => {
  const navigation = useNavigation();
  const { user, setLoading } = useContext(AuthContext);
  const products = useLoaderData();

  const [selectedProduct, setSelectedProduct] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleCart = (product) => {
    setSelectedProduct(product);
    openModal();
  };

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <MoonLoader color="rgba(105, 54, 214, 1)" speedMultiplier={0.7} />
      </div>
    );
  }
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

            <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
              Chose What You Want
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {products.map((product) => (
              <ResaleProduct
                key={product._id}
                product={product}
                isOpen={isOpen}
                closeModal={closeModal}
                openModal={openModal}
                setIsOpen={setIsOpen}
                handleCart={handleCart}
              ></ResaleProduct>
            ))}
          </div>
          <div>
            <BookingModal
              isOpen={isOpen}
              closeModal={closeModal}
              openModal={openModal}
              setIsOpen={setIsOpen}
              selectedProduct={selectedProduct}
            ></BookingModal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResaleProducts;
