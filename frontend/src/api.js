import axios from "axios";
import { auth } from "./firebase/firebase.js";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach Firebase token safely
API.interceptors.request.use(
  async (config) => {
    try {
      const user = auth?.currentUser;

      if (user) {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.log("Auth error:", err.message);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;