"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useLocationStore from "../../../../store/countStore";

const EditLocation = () => {
  const { locations, updateLocation } = useLocationStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [location, setLocation] = useState({
    id: "",
    nameLocation: "",
    status: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Populate form fields when the component mounts
  //  useEffect(() => {
  //     if (categoryId && categories.length > 0) {
  //       const existingCategory = categories.find(
  //         (cate) => cate.id === parseInt(categoryId)
  //       );
  //       if (existingCategory) {
  //         setCategory(existingCategory);
  //       }
  //     }
  //   }, [categoryId, categories]);
  
  useEffect(() => {
    if (id && locations.length > 0) {
      const existingLocation = locations.find((loc) => loc.id === parseInt(id));
      if (existingLocation) {
        setLocation(existingLocation);
      }
    }
  }, [id, locations]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.nameLocation.trim() && location.status) {
      updateLocation(location);
      setIsSuccess(true); // Set success state to true
      setTimeout(() => {
        router.push("/admin/location"); // Redirect to location list after delay
      }, 2000);
    } else {
      alert("All fields are required. Please fill them before submitting.");
    }
  };

  // Reset the form fields
  const resetForm = () => {
    setLocation({ id: "", nameLocation: "", status: "" });
  };

  return (
    <section className="w-full mt-28 flex flex-col gap-12">
      <div className="bg-white rounded-2xl">
        <section className="flex justify-between p-4">
          <h2 className="border-b-4 border-indigo-500 text-lg font-semibold">
            Edit Category
          </h2>
          <p>Back</p>
        </section>
      </div>
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Category updated successfully! Redirecting...
        </div>
      )}
      <div>
        <div className="bg-white flex items-center h-[144px] rounded-2xl p-3">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            {/* Category Name Field */}
            <label
              htmlFor="name-category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category Name
            </label>
            <input
              value={location.nameLocation}
              onChange={handleInputChange}
              name="nameLocation"
              type="text"
              id="name-location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter location name"
              required
            />

            {/* Status Dropdown */}
            <label
              htmlFor="status-select"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900"
            >
              Status
            </label>
            <select
              name="status"
              value={location.status}
              onChange={handleInputChange}
              id="status-select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
            </select>

            {/* Buttons */}
            <div className="mt-5">
              <button
                type="submit"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Update Category
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditLocation;



// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import useLocationStore from "../../../../store/countStore";

// const EditLocation = () => {
//   const { locations, updateLocation } = useLocationStore();
//   const [currentlocations, setCurrentlocations] = useState(null);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");

//   // Set up the local state to handle form input

//   const [isSuccess, setIsSuccess] = useState(false);

//   // Populate form fields when the component mounts
//   useEffect(() => {
//     if (id && locations.length > 0) {
//       const existingLocation = locations.find((loc) => loc.id === parseInt(id));
//       if (existingLocation) {
//         setCurrentlocations(locations);
//       }
//     }
//   }, [id, locations]);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentlocations((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       currentlocations &&
//       currentlocations.nameLocation.trim() &&
//       currentlocations.status
//     ) {
//       updateLocation(currentlocations); // Update location in the global state
//       setIsSuccess(true); // Set success state to true
//       setTimeout(() => {
//         router.push("/admin/location"); // Redirect to location list after delay
//       }, 2000);
//     } else {
//       alert("All fields are required. Please fill them before submitting.");
//     }
//   };

//   // Reset the form fields
//   const resetForm = () => {
//     setCurrentlocations(null);
//   };

//   return (
//     <section className="w-full mt-28 flex flex-col gap-12">
//       <div className="bg-white rounded-2xl">
//         <section className="flex justify-between p-4">
//           <h2 className="border-b-4 border-indigo-500 text-lg font-semibold">
//             Edit Location
//           </h2>
//         </section>
//       </div>
//       <div>
//         {isSuccess && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//             Location updated successfully! Redirecting...
//           </div>
//         )}
//         <div className="bg-white flex items-center h-[144px] rounded-2xl p-3">
//           <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//             {/* Location Name Field */}
//             <label
//               htmlFor="name-location"
//               className="block mb-2 text-sm font-medium text-gray-900"
//             >
//               Location Name
//             </label>
//             <input
//               value={currentLocation ? currentLocation.nameLocation : ""} // Always a string
//               onChange={handleInputChange}
//               name="nameLocation"
//               type="text"
//               id="name-location"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Enter location name"
//               required
//             />

//             {/* Status Dropdown */}
//             <label
//               htmlFor="status-select"
//               className="block mt-4 mb-2 text-sm font-medium text-gray-900"
//             >
//               Status
//             </label>
//             <select
//               name="status"
//               value={currentlocations ? currentlocations.status : ""}
//               onChange={handleInputChange}
//               id="status-select"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             >
//               <option value="">Select Status</option>
//               <option value="Active">Active</option>
//               <option value="Blocked">Blocked</option>
//             </select>

//             {/* Buttons */}
//             <div className="mt-5">
//               <button
//                 type="submit"
//                 className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
//               >
//                 Update Location
//               </button>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EditLocation;

