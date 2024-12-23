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
          <div className="rounded-3xl flex bg-[#F0F0F0] items-center">
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
          <Link href="/admin/location/createlocation">
            <span className="text-sm font-medium">Add Location</span>
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
                <tr key={loc.id} className="border-b">
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
                        Edit
                      </button>
                    </Link>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(loc.id)} // Call handleDelete on click
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1"
                    >
                      Delete
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
