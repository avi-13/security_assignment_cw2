import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});

// ======================================> user api <===============================

export const createUserApi = (data) => Api.post("/api/user/register", data);

export const loginUserApi = (data) => Api.post("/api/user/login", data);

export const updateUser = (id, data) =>
  Api.put(`/api/user/updateUser/${id}`, data);

export const fetchAllUsersApi = (data) =>
  Api.get("/api/user/getAllUsers", data);

export const getSingleUserApi = (id) => Api.get(`/api/user/single_user/${id}`);

// ======================================> Hospitals api <===============================

export const createHospitalApi = (data) =>
  Api.post("/api/hospital/addHospital", data);

export const getallhospitalsApi = (
  addressSearch,
  bloodGroupsSearch,
  hospitalSearch,
  sortBy,
  sortOrder
) =>
  Api.get("/api/hospital/getallhospitals", {
    params: {
      addressSearch,
      bloodGroupsSearch,
      hospitalSearch,
      sortBy,
      sortOrder,
    },
  });

export const deletehospitalApi = (id) =>
  Api.delete(`/api/hospital/deletehospital/${id}`);

export const updatehospitalApi = (id, formData) =>
  Api.put(`/api/hospital/updatehospital/${id}`, formData);

// ======================================> BloodBank api <===============================

export const createBloodBankApi = (data) =>
  Api.post("/api/bloodbank/addbloodbank", data);

export const getallBloodBankApi = (
  bbAddressSearch,
  bloodGroupsSearch,
  bloodbankSearch,
  sortBy,
  sortOrder
) =>
  Api.get("/api/bloodbank/getallbloodbank", {
    params: {
      bbAddressSearch,
      bloodGroupsSearch,
      bloodbankSearch,
      sortBy,
      sortOrder,
    },
  });

export const deleteBloodBankApi = (id) =>
  Api.delete(`/api/bloodbank/deletebloodbank/${id}`);

export const updateBloodBankApi = (id, formData) =>
  Api.put(`/api/bloodbank/updatebloodbank/${id}`, formData);

// ======================================> BloodBank api <===============================

export const beADonorApi = (id, formData) =>
  Api.put(`/api/user/beadonor/${id}`, formData);

// ======================================> Request Blood API <===============================
export const addRequestAPI = (data) =>
  Api.post("/api/blood_request/add_request", data);

export const viewRequestApi = (data) =>
  Api.get("/api/blood_request/all_requests", data);

export const getSingleRequestApi = (id) =>
  Api.get(`/api/blood_request/request/${id}`);
