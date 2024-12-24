"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import useCategoryStore from "../../../../store/categotyStore";

const EditCategory = () => {
  const { categories, updateCategory } = useCategoryStore(); // Zustand store
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id"); // Retrieve the category ID from the query parameters

  const [category, setCategory] = useState({
    id: "",
    namecategory: "",
    status: "",
  });

  const [isSuccess, setIsSuccess] = useState(false); // Success state for form submission

  // Retrieve the current category based on the categoryId
  useEffect(() => {
    if (categoryId && categories.length > 0) {
      const existingCategory = categories.find(
        (cate) => cate.id === parseInt(categoryId)
      );
      if (existingCategory) {
        setCategory(existingCategory);
      }
    }
  }, [categoryId, categories]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.namecategory.trim() && category.status) {
      updateCategory(category);
      setIsSuccess(true); // Set success state to true
      setTimeout(() => {
        router.push("/admin/category"); // Redirect to category list after delay
      }, 2000);
    } else {
      alert("All fields are required. Please fill them before submitting.");
    }
  };

  // Reset the form
  const resetForm = () => {
    setCategory({
      id: "",
      namecategory: "",
      status: "",
    });
  };

  return (
    <section className="w-full mt-28 flex flex-col gap-12">
      <div className="bg-white rounded-2xl">
        <section className="flex justify-between p-4">
          <div className="border-b-4 border-indigo-500">
            <p>Edit category</p>
          </div>
          <div>
            <Link href="/admin/category">Back</Link>
          </div>
        </section>
      </div>
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Category updated successfully! Redirecting...
        </div>
      )}
      <div>
        <div className="bg-white flex items-center h-[144px] rounded-2xl p-3">
          <div className="flex items-center gap-x-32">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              {/* Category Name Field */}
              <label
                htmlFor="name-category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Name
              </label>
              <div className="relative">
                <input
                  value={category.namecategory} // Ensure controlled component
                  onChange={handleInputChange}
                  name="namecategory"
                  type="text"
                  id="name-category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] ps-10 p-2.5"
                  placeholder="Enter category name"
                  required
                />
              </div>

              {/* Status Dropdown */}
              <div className="mx-auto">
                <label
                  htmlFor="status-select"
                  className="block mt-4 mb-2 text-sm font-medium text-gray-900"
                >
                  Status
                </label>
                <select
                  name="status"
                  value={category.status} // Ensure controlled component
                  onChange={handleInputChange}
                  id="status-select"
                  className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="mt-5">
                <button
                  type="submit"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Update Category
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditCategory;
