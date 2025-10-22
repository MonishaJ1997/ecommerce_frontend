import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "http://localhost:8000/api/", // fallback for local dev
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
