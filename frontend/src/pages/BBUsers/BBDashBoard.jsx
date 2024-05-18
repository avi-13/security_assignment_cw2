import React from "react";

const BBDashBoard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <section className="bg-white dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
              Blood Bank Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-8 h-8 text-red-500"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    45,678
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Units of Blood Collected
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-8 h-8 text-red-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    12,345
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Registered Donors
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-8 h-8 text-red-500"
                  >
                    <path d="m12 14 4-4"></path>
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    85%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Current Blood Inventory
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-8 h-8 text-red-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    24
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upcoming Blood Drives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
              Upcoming Blood Drives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    Downtown Blood Drive
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    May 15, 2023 | 10am - 4pm
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Main St, Anytown USA
                  </p>
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-300 mt-4"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    Community Center Blood Drive
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    June 5, 2023 | 9am - 3pm
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    456 Oak St, Anytown USA
                  </p>
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-300 mt-4"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    Hospital Blood Drive
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    July 1, 2023 | 11am - 5pm
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    789 Elm St, Anytown USA
                  </p>
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-300 mt-4"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BBDashBoard;
