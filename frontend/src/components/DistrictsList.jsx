import React from "react";

const DistrictList = ({ onChange }) => {
  const getDistricts = () => {
    // List of districts
    const districts = [
      "Achham",
      "Arghakhanchi",
      "Baglung",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Banke",
      "Bara",
      "Bardiya",
      "Bhaktapur",
      "Bhojpur",
      "Chitwan",
      "Dadeldhura",
      "Dailekh",
      "Dang",
      "Darchula",
      "Dhading",
      "Dhankuta",
      "Dhanusa",
      "Dholkha",
      "Dolpa",
      "Doti",
      "Gorkha",
      "Gulmi",
      "Humla",
      "Ilam",
      "Jajarkot",
      "Jhapa",
      "Jumla",
      "Kailali",
      "Kalikot",
      "Kanchanpur",
      "Kapilvastu",
      "Kaski",
      "Kathmandu",
      "Kavrepalanchok",
      "Khotang",
      "Lalitpur",
      "Lamjung",
      "Mahottari",
      "Makwanpur",
      "Manang",
      "Morang",
      "Mugu",
      "Mustang",
      "Myagdi",
      "Nawalparasi",
      "Nuwakot",
      "Okhaldhunga",
      "Palpa",
      "Panchthar",
      "Parbat",
      "Parsa",
      "Pyuthan",
      "Ramechhap",
      "Rasuwa",
      "Rautahat",
      "Rolpa",
      "Rukum",
      "Rupandehi",
      "Salyan",
      "Sankhuwasabha",
      "Saptari",
      "Sarlahi",
      "Sindhuli",
      "Sindhupalchok",
      "Siraha",
      "Solukhumbu",
      "Sunsari",
      "Surkhet",
      "Syangja",
      "Tanahu",
      "Taplejung",
      "Terhathum",
      "Udayapur",
    ];

    return districts;
  };
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        Select District:
      </label>
      <div className="relative">
        <select
          onChange={onChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="all">All</option>
          {getDistricts().map((district, index) => (
            <option key={index} value={district}>
              {district}
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

export default DistrictList;
