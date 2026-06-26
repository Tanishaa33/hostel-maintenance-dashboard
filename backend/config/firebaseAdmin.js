import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

// Export Firebase Auth instance
export const auth = getAuth();