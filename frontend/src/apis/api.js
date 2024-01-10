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

export const fetchAllUsersApi = (data) =>
  Api.get("/api/user/getAllUsers", data);


  export const getSingleUserApi = (userId) =>
  Api.get(`/api/user/single_user/${userId}`);

// ======================================> Hospitals api <===============================

export const createHospitalApi = (data) =>
  Api.post("/api/hospital/addHospital", data);

export const getallhospitalsApi = (data) =>
  Api.get("/api/hospital/getallhospitals", data);

export const deletehospitalApi = (id) =>
  Api.delete(`/api/hospital/deletehospital/${id}`);

export const updatehospitalApi = (id, formData) =>
  Api.put(`/api/hospital/updatehospital/${id}`, formData);

// ======================================> BloodBank api <===============================

export const createBloodBankApi = (data) =>
  Api.post("/api/bloodbank/addbloodbank", data);

export const getallBloodBankApi = (data) =>
  Api.get("/api/bloodbank/getallbloodbank", data);

export const deleteBloodBankApi = (id) =>
  Api.delete(`/api/bloodbank/deletebloodbank/${id}`);

export const updateBloodBankApi = (id, formData) =>
  Api.put(`/api/bloodbank/updatebloodbank/${id}`, formData);


// ======================================> BloodBank api <===============================

export const beADonorApi = (userId, formData) =>
  Api.put(`/api/user/beadonor/${userId}`, formData);

