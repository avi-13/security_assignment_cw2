import React from "react";

const BloodGroupLists = ({ onChange }) => {
  const getBloodGroups = () => {
    // List of blood groups
    const bloodGroups = ["AB+", "AB-", "B-", "B+", "O+", "O-", "A+", "A-"];

    return bloodGroups;
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        Select Blood Group:
      </label>
      <div className="relative">
        <select
          onChange={onChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="all">All</option>
          {getBloodGroups().map((bloodGroup, index) => (
            <option
              key={index}
              value={bloodGroup.toUpperCase().replace(/\s/g, "-")}
            >
              {bloodGroup}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BloodGroupLists;
