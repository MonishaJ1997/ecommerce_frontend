// src/api/axios.js
import axios from "axios";

// Use environment variable from .env
const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://localhost:8000/api/", // fallback for local dev
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Automatically attach token if you use auth later
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
