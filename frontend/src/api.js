import axios from "axios";
<<<<<<< HEAD

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔥 AUTO ADD TOKEN TO EVERY REQUEST
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
=======
import { auth } from "./firebase/firebase.js";

const API = axios.create({
  baseURL: "http://localhost:5000",
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
>>>>>>> 567fc3e (final-commit)

export default API;