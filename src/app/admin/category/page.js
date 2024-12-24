"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCategoryStore from "@/store/categotyStore";

const CategoryTable = ({}) => {
  const { categories, deleteCategory, setCategory } = useCategoryStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState("");
  const router = useRouter();

  const handleDelete = (id) => {
    setCategoryToDelete(id);
    setShowConfirmation(true);
  };

  const handleEditClick = (category) => {
    // Set the selected category in the global state
    setCategory(category);

    // Navigate to the edit page with the category ID
    router.push(`/admin/category/edit?id=${category.id}`);
  };

  const filteredCategories = categories.filter((category) =>
    (category.namecategory || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const confirmDelete = () => {
    deleteCategory(categoryToDelete);
    setDeleteMessage("Category successfully deleted.");
    setShowConfirmation(false);

    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  return (
    <div className="w-[1100px] bg-white mt-32 rounded-xl">
      {deleteMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {deleteMessage}
        </div>
      )}
      <div className="flex justify-between items-center gap-7 p-4">
        <div className="flex items-center gap-5">
          <p>All Categories</p>
          <div className="rounded-3xl flex bg-[#F0F0F0] items-center">
            <ion-icon
              className="mx-2 text-gray-500 cursor-pointer"
              name="search"
              aria-label="Search Icon"
            ></ion-icon>
            <input
              className="bg-transparent rounded text-sm border-none focus:outline-none w-full px-2"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search input"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/admin/category/create-category"
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-10 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <tr
                  key={`${category.id}-${index}`}
                  className="bg-white border-b dark:border-gray-700 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-10 py-4">{category.namecategory}</td>
                  <td
                    className={`px-6 py-4 ${
                      category.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {category.status}
                  </td>
                  <td className="flex items-center gap-1 px-2 py-4">
                    <button
                      onClick={() => handleEditClick(category)} // Set the selected location globally
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

                    <button
                      onClick={() => handleDelete(category.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3"
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
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl">
            <p>Are you sure you want to delete this category?</p>
            <button
              onClick={confirmDelete}
              className="mt-4 text-red-600 hover:underline"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-4 ml-4 text-blue-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryTable;
