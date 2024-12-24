"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCategoryStore from "../../../../store/categotyStore"; // Corrected import path

const CreateCategory = () => {
  const { addCategory, generateIncrementalId } = useCategoryStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const [category, setCategory] = useState({
    id: "",
    namecategory: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    if (!category.namecategory || !category.status) {
      alert("Please fill out all fields.");
      return;
    }

    // Generate a new ID
    const newId = generateIncrementalId();
    const newCategory = { id: newId, ...category };

    // Add the new category
    addCategory(newCategory);

    // Clear the form
    setCategory({ id: "", namecategory: "", status: "" });
     setIsSuccess(true);

     setTimeout(() => {
      setIsSuccess(false);
      router.push("/admin/category"); // Navigate to location list
    }, 2000); 

    // Optionally redirect to the edit page
    // router.push(`/admin/category/edit?id=${newId}`);
  };

  const handleCancel = () => {
    setCategory({ namecategory: "", status: "" });
  };

  return (
    <section className="w-full mt-28 flex flex-col gap-12">
      <div className="bg-white rounded-2xl">
        <section className="flex justify-between p-4">
          <div className="border-b-4 border-indigo-500">
            <p>Create category</p>
          </div>
          <div>
            <Link href="/admin/category">Back</Link>
          </div>
        </section>
      </div>
      {/* Success Message */}
      {isSuccess && (
        <div className=" bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Location successfully {category.id ? "updated" : "created"}!
          Redirecting...
        </div>
      )}

      <div>
        <div className="bg-white flex items-center h-[144px] rounded-2xl p-3">
          <div className="flex items-center gap-x-32">
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="create-category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="create-category"
                  name="namecategory"
                  value={category.namecategory}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] ps-10 p-2.5"
                  placeholder="Enter category name"
                />
              </div>
            </form>

            <form className="mx-auto">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={category.status}
                onChange={handleInputChange}
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Blocked">Blocked</option>
              </select>
            </form>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="button"
            onClick={handleCreate}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateCategory;
