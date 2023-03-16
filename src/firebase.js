
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDClbVv483naMbNs2UMTkusLjnsOFlS-30",
  authDomain: "loginauth-eaf12.firebaseapp.com",
  projectId: "loginauth-eaf12",
  storageBucket: "loginauth-eaf12.appspot.com",
  messagingSenderId: "840297912802",
  appId: "1:840297912802:web:1b023958ccfc459f8601bb",
  measurementId: "G-9H51H2FRC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;