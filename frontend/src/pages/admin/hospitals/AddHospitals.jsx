import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createHospitalApi,
  deletehospitalApi,
  getallhospitalsApi,
} from "../../../apis/api";

export default function AddHospitals() {
  // useEffect for fetching all the products and showing in table
  const [hospitals, sethospitals] = useState([]);
  useEffect(() => {
    getallhospitalsApi().then((res) => {
      console.log(res.data);
      sethospitals(res.data.hospital);
    });
  }, []);

  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalContactNumber, setHospitalContactNumber] = useState("");
  const [hospitalType, setHospitalType] = useState("");
  const [hospitalServices, setHospitalServices] = useState("");

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
    const confirmDialog = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (!confirmDialog) {
    } else {
      // make Api call
      deletehospitalApi(id).then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      });
    }
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
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Hospitals
            </p>
            <div>
              <button
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-[#0D98BA] hover:bg-cyan-400 text-white focus:outline-none rounded"
                onClick={openModal}
              >
                Add Hospital
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">
                  Hospital Image (Yet to be added)
                </th>
                <th className="font-normal text-left pl-4">Hospital Name</th>
                <th className="font-normal text-left pl-12">Location</th>
                <th className="font-normal text-left pl-12">Contact</th>
                <th className="font-normal text-left pl-20">
                  BLoodGroups Available
                </th>
                <th className="font-normal text-left pl-20">Description</th>
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
                          src="/../assets/images/2.png"
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
                    <p className="font-medium">{item.hospitalServices}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{item.hospitalType}</p>
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
                      onClick={() => handleDelete(item._id)}
                      className="focus:outline-none ml-2 "
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 hover:text-red-700 cursor-pointer "
                      />
                    </button>
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
                src="/../assets/images/2.png"
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
                    <label
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      className="block text-sm font-medium text-gray-900"
                    >
                      Address
                    </label>
                    <input
                      onChange={changeHospitalAddress}
                      type="number"
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      className="block text-sm font-medium text-gray-900"
                    >
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
                  <label
                    className="block text-sm font-medium  text-gray-900"
                  >
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
                        src={imagePreview}
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
