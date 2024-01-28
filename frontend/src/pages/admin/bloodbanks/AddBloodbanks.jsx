import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createBloodBankApi,
  deleteBloodBankApi,
  getallBloodBankApi,
} from "../../../apis/api";

export default function AddBloodBanks() {
  // useEffect for fetching all the products and showing in table
  const [bloodBank, setBloodBank] = useState([]);
  useEffect(() => {
    getallBloodBankApi().then((res) => {
      console.log(res.data);
      setBloodBank(res.data.bloodbanks);
    });
  }, []);

  const [bbName, setbbName] = useState("");
  const [bbAddress, setbbAddress] = useState("");
  const [bbContact, setbbContact] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [availableBloodGroups, setAvailableBloodGroups] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState("");

  const changebbName = (e) => {
    setbbName(e.target.value);
  };

  const changebbAddress = (e) => {
    setbbAddress(e.target.value);
  };

  const changebbContact = (e) => {
    setbbContact(e.target.value);
  };

  const changeOperatingHours = (e) => {
    setOperatingHours(e.target.value);
  };
  const changeAvailableBloodGroups = (e) => {
    setAvailableBloodGroups(e.target.value);
  };
  const changeSocialMediaLinks = (e) => {
    setSocialMediaLinks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("bName", bbName);
    formData.append("bAddress", bbAddress);
    formData.append("bContact", bbContact);
    formData.append("oHours", operatingHours);
    formData.append("bgavailable", availableBloodGroups);
    formData.append("socialLinks", socialMediaLinks);

    createBloodBankApi(formData)
      .then((res) => {
        console.log(res.data);

        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((e) => {
        toast.error(e.message);
        console.log(e);
      });
  };

  // delete
  const handleDelete = (id) => {
    // make Api call
    deleteBloodBankApi(id).then((res) => {
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
  const [isdeleteModalOpen, setdeleteIsModalOpen] = useState(false);
  const opendeleteModal = () => setdeleteIsModalOpen(true);
  const closedeleteModal = () => setdeleteIsModalOpen(false);

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
              BloodBanks
            </p>
            <div>
              <button
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-[#0D98BA] hover:bg-cyan-400 text-white focus:outline-none rounded"
                onClick={openModal}
              >
                Add BloodBanks
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">
                  BloodBank Image Yet to be added
                </th>
                <th className="font-normal text-left pl-4">BloodBank Name</th>
                <th className="font-normal text-left pl-12">
                  BloodBank Address
                </th>
                <th className="font-normal text-left pl-12">
                  BloodBank Contact
                </th>
                <th className="font-normal text-left pl-20">
                  BLoodGroups Available
                </th>
                <th className="font-normal text-left pl-20">Operating Hours</th>
                <th className="font-normal text-left pl-20">
                  SocialMedia Links
                </th>
                <th className="font-normal text-left pl-16">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {bloodBank.map((item) => (
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
                    <p className="font-medium">{item.bbName}</p>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {item.bbAddress}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{item.bbContact}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{item.operatingHours}</p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{item.availableBloodGroups}</p>
                  </td>

                  <td className="pl-20">
                    <p className="font-medium">{item.socialMediaLinks}</p>
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
                      className="focus:outline-none ml-2"
                      onClick={opendeleteModal}
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
                  Add New BloodBank
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      BloodBank Name
                    </label>
                    <input
                      onChange={changebbName}
                      type="text"
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      BloodBank Address
                    </label>
                    <input
                      onChange={changebbAddress}
                      type="text"
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      BLood Bank Contact
                    </label>
                    <input
                      onChange={changebbContact}
                      type="number"
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Blood Groups
                    </label>
                    <select
                      onChange={changeAvailableBloodGroups}
                      type="text"
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    >
                      <option value="A+">A+</option>
                      <option value="A+">B+</option>
                      <option value="A+">AB+</option>
                      <option value="A+">O+</option>
                      <option value="A+">A-</option>
                      <option value="A+">AB-</option>
                      <option value="A+">B-</option>
                      <option value="A+">O-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      BloodBank Operating Hours
                    </label>
                    <textarea
                      onChange={changeOperatingHours}
                      className="mt-1 block w-full border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      SocialMedia Links
                    </label>
                    <input
                      onChange={changeSocialMediaLinks}
                      type="number"
                      className="mt-1 block w-full  border border-solid border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="bloodbankImage"
                    className="block text-sm font-medium  text-gray-900"
                  >
                    BloodBank Image
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
                      <img src={imagePreview} className="w-full rounded-md" />
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-cyan-700 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add BloodBank
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
