import Link from "next/link";
import Image from "next/image";
import p1 from "@/app/image/image.png";


const Dashboard = () => {
  return (
    <div className="bg-black">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col gap-4 pt-10 h-full overflow-y-auto bg-gray-50 items-center">
          <Link href="/">
            <div className="w-[182px]">
              <Image
                className="w-full"
                src={p1}
                alt="Logo"
                width={182}
            
              />
            </div>
          </Link>

          <div className="group w-[240px] h-[50px] flex justify-center items-center relative overflow-hidden">
            <div className="bg-blue-500 absolute h-full w-2 rounded-md -left-1 group-hover:bg-blue-600 transition duration-200"></div>
            <Link href="/admin/boxtour">
              <button className="w-[192px] h-[50px] bg-blue-500 text-white font-semibold rounded-md group-hover:bg-blue-600 transition duration-200">
                <div className="flex justify-center items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5" // Corrected from stroke-width
                    stroke="currentColor"
                    className="size-6" // Corrected from class to className
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <h1>Dashboard</h1>
                </div>
              </button>
            </Link>
          </div>

          <div className="group w-[240px] h-[50px] flex justify-center items-center relative overflow-hidden">
            <div className="absolute h-full w-2 rounded-md -left-1 transition duration-200 group-hover:bg-blue-500"></div>
            <Link href="/admin/location">
              <button className="w-[192px] h-[50px] font-semibold rounded-md transition duration-200 group-hover:bg-blue-500 group-hover:text-white">
                <div className="flex justify-center items-center gap-4">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <h1>location</h1>
                </div>
              </button>
            </Link>
          </div>

          <div className="group w-[240px] h-[50px] flex justify-center items-center relative overflow-hidden">
            <div className="absolute h-full w-2 rounded-md -left-1 transition duration-200 group-hover:bg-blue-500"></div>
            <Link href="/admin/category">
              <button className="w-[192px] h-[50px] flex justify-center items-center gap-4 ml-5 font-semibold rounded-md transition duration-200 group-hover:bg-blue-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <h1>Category</h1>
              </button>
            </Link>
          </div>

          <div className="group w-[240px] h-[50px] flex justify-start items-center relative overflow-hidden px-4">
            <div className="absolute h-full w-2 rounded-md -left-1 transition duration-200 group-hover:bg-blue-500"></div>
            <a href="/admin/user">
              <button className="w-[192px] h-[50px] flex justify-center items-center gap-4 font-semibold rounded-md transition duration-200 group-hover:bg-blue-500 group-hover:text-white">
                <div className="flex gap-5 items-center">
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
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                  <h1>User</h1>
                </div>
              </button>
            </a>
          </div>

          <div className="group w-[240px] h-[50px] flex justify-center items-center relative overflow-hidden">
            <div className="absolute h-full w-2 rounded-md -left-1 transition duration-200 group-hover:bg-blue-500"></div>
            <a href="/admin/feedback">
              <button className="w-[192px] h-[50px] font-semibold rounded-md transition duration-200 group-hover:bg-blue-500 group-hover:text-white">
                <div className="flex justify-center items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>

                  <h1>Feedback</h1>
                </div>
              </button>
            </a>
          </div>

          <div className="group w-[240px] h-[50px] flex justify-center items-center relative overflow-hidden">
            <div className="absolute h-full w-2 rounded-md -left-1 transition duration-200 group-hover:bg-blue-500"></div>
            <button className="w-[192px] h-[50px] font-semibold rounded-md transition duration-200 group-hover:bg-blue-500 group-hover:text-white">
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>

                <h1>Logout</h1>
              </div>
            </button>
          </div>
        </div>
      </aside>
      <div className="w-full sm:ml-60">
        <div className="bg-white shadow-sm flex px-4 py-5 justify-between fixed top-0 z-10 min-w-[81%]">
          <div className="flex items-center gap-5">
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div className="rounded-3xl flex bg-[#F0F0F0] items-center outline-none border-none ring-gray-300 overflow-hidden">
              <ion-icon
                className="mx-4 text-gray-500 cursor-pointer"
                name="search"
                aria-label="Search"
              ></ion-icon>
              <input
                className="bg-[#F0F0F0] rounded text-sm border-none outline-none"
                placeholder="Search"
                type="text"
                name="search"
                id="search"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ion-icon name="notifications" className="text-xl"></ion-icon>
            <ion-icon name="happy-outline" className="text-4xl"></ion-icon>
            <div>
              <h1 className="text-sm font-medium">Sok Both</h1>
              <h1 className="text-xs">admin</h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
