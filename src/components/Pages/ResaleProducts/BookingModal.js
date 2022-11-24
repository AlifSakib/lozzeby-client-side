import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
  selectedProduct,
}) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = selectedProduct;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingDetails = {
      name: form.name.value,
      email: form.email.value,
      product_name: form.productname.value,
      product_price: form.productprice.value,
      phone_number: form.phonenumber.value,
      location: form.location.value,
    };
    toast.success("Product Booked");
  };

  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Fill out the form for confirm booking.
                    </Dialog.Title>
                    <div className="my-2">
                      <p className="text-sm text-gray-500">
                        Please fillup the require information to confirm
                        booking.
                      </p>
                    </div>
                    <form onSubmit={handleBooking} className="space-y-2">
                      <div>
                        <label
                          htmlFor="UserEmail"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Name
                        </label>

                        <input
                          defaultValue={user?.displayName}
                          disabled
                          type="text"
                          id="name"
                          placeholder="Your name"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          name="name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="UserEmail"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="UserEmail"
                          placeholder="john@rhcp.com"
                          defaultValue={user?.email}
                          disabled
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          name="email"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="UserEmail"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Product Name
                        </label>

                        <input
                          type="text"
                          id="Product-Name"
                          placeholder="Product Name"
                          defaultValue={name}
                          disabled
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          name="productname"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="UserEmail"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Price
                        </label>

                        <input
                          type="text"
                          id="Product-Price"
                          defaultValue={`${resale_price}$`}
                          disabled
                          placeholder="john@rhcp.com"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          name="productprice"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="UserEmail"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Phone Number
                        </label>

                        <input
                          type="text"
                          id="Phone Number"
                          placeholder="Your phone number"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          required
                          name="phonenumber"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="UserLocation"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Location
                        </label>

                        <input
                          type="text"
                          id="location"
                          required
                          placeholder="Your Location"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          name="location"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Confirm Booking!
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default BookingModal;
