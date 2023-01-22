import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuIjeRPZh42mldGZlyzDlkeXuDen-IYDs",
  authDomain: "nwhack2023-4356a.firebaseapp.com",
  projectId: "nwhack2023-4356a",
  storageBucket: "nwhack2023-4356a.appspot.com",
  messagingSenderId: "849644658403",
  appId: "1:849644658403:web:ed45881b8ffa21cf1a2fd6",
  measurementId: "G-H13WKJP9VN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
