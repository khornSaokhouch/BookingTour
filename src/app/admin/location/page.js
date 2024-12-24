"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useLocationStore from "../../../store/countStore"; // Ensure you use the correct path to your store

export default function LocationTable() {
  const { locations, setLocation, deleteLocation } = useLocationStore();
  const [searchTerm, setSearchTerm] = useState(""); // Declare searchTerm state
  const [deleteMessage, setDeleteMessage] = useState(""); // State to manage delete message
  const [showConfirmation, setShowConfirmation] = useState(false); // State for the confirmation modal
  const [locationToDelete, setLocationToDelete] = useState(null); // Store location id to delete
  const router = useRouter();

  // Handle delete action with confirmation
  const handleDelete = (id) => {
    setLocationToDelete(id);
    setShowConfirmation(true);
  };

  // Filter locations based on search term
  const filteredLocations = locations.filter((loc) =>
    loc.nameLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Confirm delete action
  const confirmDelete = () => {
    deleteLocation(locationToDelete);
    setDeleteMessage("Location successfully deleted.");
    setShowConfirmation(false); // Close the modal

    // Clear the message after 3 seconds
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  // Cancel delete action
  const cancelDelete = () => {
    setShowConfirmation(false); // Close the modal without deleting
    setLocationToDelete(null);
  };

  return (
    <div className="w-[1100px] bg-white mt-32 rounded-xl">
      {/* Delete Message */}
      {deleteMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {deleteMessage}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              Are you sure you want to delete this location?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelDelete}
                className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="flex justify-between items-center gap-7 p-4">
        <div className="flex items-center gap-5">
          <p>All</p>
          <div className="rounded-3xl flex bg-[#F0F0F0] items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              className="bg-transparent rounded text-sm border-none focus:outline-none w-full px-2"
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              aria-label="Search input"
              value={searchTerm} // Bind search term to input
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/admin/location/createlocation"
            className="flex items-center text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm font-medium">Add Category</span>
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          {/* Table Head */}
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-10 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, index) => (
                <tr key={`${loc.id}-${index}`} className="border-b">
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">{loc.nameLocation}</td>
                  <td className="px-6 py-3">{loc.status}</td>
                  <td className="px-6 py-3 flex gap-2">
                    {/* Edit Button */}
                    <Link
                      href={{
                        pathname: "/admin/location/edit",
                        query: { id: loc.id }, // Pass the location ID
                      }}
                    >
                      <button
                        onClick={() => setLocation(loc)} // Set the selected location globally
                        className="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </Link>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(loc.id)} // Call handleDelete on click
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No locations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
