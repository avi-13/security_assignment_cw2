import React from "react";
import DashboardCard from "../../components/BBComponent/DashboardCard";

const BBDashBoard = () => {
  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              OUR CAMPAIGNS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Encourage new donors to join and continue to give blood.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We have total sixty thousands donor centers and visit thousands of
              other venues on various occasions.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/assets/images/aii.png"
                    alt="Blood Donation"
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Opening Donation Day
                    </h3>
                    <p className="mt-2 text-gray-600">14 January, 2018</p>
                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet turadipi scing elit lobort
                      issim consecte dign pharetra mauris.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/assets/images/ai.png"
                    alt="Group Checking"
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Free Group Checking
                    </h3>
                    <p className="mt-2 text-gray-600">14 January, 2018</p>
                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet turadipi scing elit lobort
                      issim consecte dign pharetra mauris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              LOAD ALL CAMPAIGNS
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard icon="❤️" count={2578} label="Success Smile" />
          <DashboardCard icon="⚕️" count={3235} label="Happy Donors" />
          <DashboardCard icon="👥" count={3568} label="Happy Recipient" />
          <DashboardCard icon="🏆" count={1364} label="Total Awards" />
        </div>
      </div>
    </>
  );
};

export default BBDashBoard;
