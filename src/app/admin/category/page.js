import React from "react";

const Category = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-50 mt-28">
      {/* Menu Filter */}
      <div className="flex justify-center items-center gap-3 bg-slate-50 p-2">
        <div>
          <p>All</p>
        </div>
        <div>
          <form>
            <select
              id="countries"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-none outline-none"
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </form>
        </div>
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
            name="search"
            id="search"
            aria-label="Search input"
          />
        </div>
        <div id="date-range-picker" className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              id="datepicker-range-start"
              name="start"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-2 text-gray-500">to</span>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              id="datepicker-range-end"
              name="end"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Select date end"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="#" className="flex items-center text-blue-400">
            <ion-icon
              className="text-[30px] mr-2"
              name="add-circle-outline"
              aria-label="Add Package Icon"
            ></ion-icon>
            <span className="text-sm font-medium">Add Package</span>
          </a>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-xl">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Package name</th>
              <th className="px-6 py-3">Where to</th>
              <th className="py-3">Total Booking</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th className="flex items-center justify-center gap-3 ml-1 px-1 py-3 font-medium text-gray-900 whitespace-nowrap">
                <a href="./package-detail.html">
                  <div className="w-[117px] h-[66px] overflow-hidden">
                    <img
                      className="w-full rounded-xl"
                      src="/src/image/Pic3.png"
                      alt="Profile Picture"
                    />
                  </div>
                </a>
                <div className="flex flex-col items-center justify-center">
                  <a href="./package-detail.html">
                    <p className="text-[#181818]">Trip Cambodia Tour</p>
                  </a>
                  <span className="text-[#7F7F7F]">#G8 456566</span>
                </div>
              </th>
              <td className="px-6 py-4">
                <p>Cambodia</p>
                <p>Thailand</p>
                <p>Japan</p>
              </td>
              <td className="px-6 py-4">150</td>
              <td className="px-6 py-4">34567</td>
              <td className="px-6 py-4">
                12 <span>Day</span>
              </td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <form>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black border-none outline-none"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                  </select>
                </form>
              </td>
              <td>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  <ion-icon name="pencil-outline"></ion-icon>
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ml-3"
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
