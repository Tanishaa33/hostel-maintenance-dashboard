// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT7BBgvLeu-d_JJPhPkklODLQilruuVWg",
  authDomain: "hostel-management-5a884.firebaseapp.com",
  projectId: "hostel-management-5a884",
  storageBucket: "hostel-management-5a884.firebasestorage.app",
  messagingSenderId: "536950384455",
  appId: "1:536950384455:web:cac4f5310402b606ac4e62",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);