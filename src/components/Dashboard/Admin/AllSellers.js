import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: allsellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-sellers");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = (id) => {
    fetch(`http://localhost:5000/users/sellers/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Seller Account Deleted");
          refetch();
        }
      });
  };

  const handleVerify = (id) => {
    fetch(`http://localhost:5000/seller/verify/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="px-8 py-16 mx-auto ">
      <div className="mb-8">
        <span className="relative px-1">
          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
          <span className="relative inline-block text-deep-purple-accent-400 text-5xl font-bold">
            All Sellers
          </span>
        </span>
      </div>

      <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  Email
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>

              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  Role
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  Sellet Status
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {allsellers.map((allseller) => (
              <tr key={allseller._id} allseller={allseller}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {allseller.name}
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {allseller.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 capitalize">
                  {allseller.role}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button onClick={() => handleVerify(allseller._id)}>
                    {allseller.verifyed ? (
                      <strong className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
                        Verifyed
                      </strong>
                    ) : (
                      <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                        Not Verifyed
                      </strong>
                    )}
                  </button>
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <button onClick={() => handleDeleteSeller(allseller._id)}>
                    <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                      Delete
                    </strong>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
