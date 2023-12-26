import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    // "Content-Type": "application/json", before
    "Content-Type": "multipart/form-data", // for uploading images
  },
});

// creating user api
export const createUserApi = (data) => Api.post("/api/user/register", data); // sends data

export const loginUserApi = (data) => Api.post("/api/user/login", data);
