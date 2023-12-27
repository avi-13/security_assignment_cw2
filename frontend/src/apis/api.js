import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    // "Content-Type": "multipart/form-data", 
    "Content-Type": "application/json",
  },
});

export const createUserApi = (data) => Api.post("/api/user/register", data);

export const loginUserApi = (data) => Api.post("/api/user/login", data);
