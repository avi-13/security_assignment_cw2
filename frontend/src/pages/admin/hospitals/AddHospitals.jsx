import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createHospitalApi,
  deletehospitalApi,
  getallhospitalsApi,
} from "../../../apis/api";
import BloodGroupLists from "../../../components/BloodGroupsList";
import DistrictList from "../../../components/DistrictsList";

export default function AddHospitals() {
  const [hospitals, setHospitals] = useState([]);

  const [addressSearch, setAddressSearch] = useState("");
  const [bloodGroupsSearch, setBloodGroupsSearch] = useState("");
  const [hospitalSearch, sethospitalSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchHospitals = async () => {
    try {
      const response = await getallhospitalsApi(
        addressSearch,
        bloodGroupsSearch,
        hospitalSearch,
        sortBy,
        sortOrder
      );
      setHospitals(response.data.hospital);
    } catch (error) {
      console.error("Error Fetching BloodBanks", error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, [addressSearch, bloodGroupsSearch, hospitalSearch, sortBy, sortOrder]);

  const handleSort = (column) => {
    setSortBy(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalContactNumber, setHospitalContactNumber] = useState("");
  const [hospitalType, setHospitalType] = useState("");
  const [hospitalServices, setHospitalServices] = useState("");
  const [isdeleteModalOpen, setdeleteIsModalOpen] = useState(false);
  const opendeleteModal = () => setdeleteIsModalOpen(true);
  const closedeleteModal = () => setdeleteIsModalOpen(false);

  const changeHospitalName = (e) => {
    setHospitalName(e.target.value);
  };

  const changeHospitalAddress = (e) => {
    setHospitalAddress(e.target.value);
  };

  const changeHospitalContact = (e) => {
    setHospitalContactNumber(e.target.value);
  };

  const changeHospitalType = (e) => {
    setHospitalType(e.target.value);
  };
  const changeHospitalServices = (e) => {
    setHospitalServices(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // making logical form data
    const formData = new FormData();
    formData.append("hospitalName", hospitalName);
    formData.append("hospitalAddress", hospitalAddress);
    formData.append("hospitalContactNumber", hospitalContactNumber);
    formData.append("hospitalType", hospitalType);
    formData.append("hospitalServices", hospitalServices);

    // making Api call
    createHospitalApi(formData)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((e) => {
        toast.error("Server Error");
        console.log(e);
      });
  };

  // delete
  const handleDelete = (id) => {
    // make Api call
    deletehospitalApi(id).then((res) => {
      if (res.data.success == true) {
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isimageModalOpen, setimageIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openimageModal = () => setimageIsModalOpen(true);
  const closeimageModal = () => setimageIsModalOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-2 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex flex-row items-center justify-between">
            <p className="inline-flex sm:ml-3  sm:mt-0 items-start justify-start px-6 py-3  text-black focus:outline-none rounded">
              Hospitals
            </p>
            <div>
              <button
                className="inline-flex sm:ml-3 mt-1 sm:mt-0 items-start justify-start px-6 py-3 bg-[#111111] hover:bg-[#ff0000] text-white focus:outline-none rounded"
                onClick={openModal}
              >
                Add Hospitals
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between md:gap-4 mb-4 w-full">
            <div className="w-full md:w-1/3">
              <BloodGroupLists
                onChange={(e) => setBloodGroupsSearch(e.target.value)}
                value={bloodGroupsSearch}
              />
            </div>
            <div className="w-full md:w-1/3 md:mt-0">
              <DistrictList
                onChange={(e) => setAddressSearch(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3 md:mt-0">
              <label
                htmlFor="filterSelect"
                className="block text-sm font-medium my-1 text-gray-700"
              >
                Blood Bank Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Search Blood Banks..."
                onChange={(e) => sethospitalSearch(e.target.value)}
              />
            </div>
          </div>

          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">
                  Hospital Image (Yet to be added)
                </th>
                <th className="font-normal text-left pl-4">Hospital Name</th>
                <th className="font-normal text-left pl-12">Location</th>
                <th className="font-normal text-left pl-12">Contact</th>
                <th className="font-normal text-left pl-20">Hospital Type</th>
                <th className="font-normal text-left pl-20">
                  Hospital Service
                </th>
                <th className="font-normal text-left pl-12">
                  <button
                    onClick={() => handleSort("createdAt")}
                    className="focus:outline-none"
                  >
                    Created Date
                    {sortBy === "createdAt" && (
                      <span className="ml-1">
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </button>
                </th>
                <th className="font-normal text-left pl-16">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {hospitals.map((item) => (
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer" onClick={openimageModal}>
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <img
                          className="w-full h-full"
                          src="/../assets/images/logo.png"
                          alt="Thumbnail Image"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {item.hospitalName}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{item.hospitalAddress}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{item.hospitalContactNumber}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{item.hospitalType}</p>
                  </td>
                  <td className="pl-20 overflow-y max-w-[200px] truncate">
                    <p className="font-medium">{item.hospitalServices}</p>
                  </td>
                  <td className="pl-20 overflow-y max-w-[200px] truncate">
                    <p className="font-medium">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-7 2xl:px-0">
                    {/* Edit Button */}
                    <button className="focus:outline-none py-2 px-4">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={opendeleteModal}
                      className="focus:outline-none ml-2 "
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 hover:text-red-700 cursor-pointer "
                      />
                    </button>

                    {isdeleteModalOpen && (
                      <div
                        className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                        id="my-modal"
                      >
                        <div className="relative mx-auto p-5 border w-1/4 shadow-lg rounded-md bg-white space-y-8 justify-center items-center flex flex-col">
                          <i className="fa-solid fa-triangle-exclamation text-red-500 fa-5x"></i>
                          <h1 className="font-medium w-3/4 mx-auto text-center">
                            Are you sure you want to Delete?
                          </h1>

                          <div className="flex flex-wrap items-center justify-between mx-auto w-full">
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="w-1/3 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center py-2.5"
                            >
                              Delete
                            </button>
                            <button
                              type="submit"
                              className="w-1/3 text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5"
                              onClick={closedeleteModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isimageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black opacity-75"
              onClick={closeimageModal}
            ></div>
            <div className="relative z-50 bg-white p-8">
              <span
                className="absolute top-0 right-0 cursor-pointer p-4"
                onClick={closeimageModal}
              >
                &times;
              </span>
              <img
                className="w-full h-auto"
                src="../assets/images/3.png"
                alt="Modal Image"
              />
            </div>
          </div>
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          >
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
              {/* Close button */}
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={closeModal}
                  className="text-black bg-red-500 hover:bg-red-700 rounded-lg text-sm p-2"
                >
                  <i className="fa-solid fa-x text-white"></i>
                </button>
              </div>

              <form className="space-y-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 text-center font-semibold text-2xl">
                  Add New Hospital
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Hospital Name
                    </label>
                    <input
                      onChange={changeHospitalName}
                      type="text"
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Address
                    </label>
                    <input
                      onChange={changeHospitalAddress}
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Contact
                    </label>
                    <input
                      onChange={changeHospitalContact}
                      type="number"
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Hospital Type
                    </label>
                    <input
                      onChange={changeHospitalType}
                      type="text"
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Hospital Description
                    </label>
                    <textarea
                      onChange={changeHospitalServices}
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium  text-gray-900">
                    Hospital Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={handleImageChange}
                    required
                  />
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src="../assets/images/3.png"
                        className="w-full rounded-md"
                      />
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-cyan-700 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add Hospital
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
