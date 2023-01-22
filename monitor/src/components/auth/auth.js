import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuIjeRPZh42mldGZlyzDlkeXuDen-IYDs",
  authDomain: "nwhack2023-4356a.firebaseapp.com",
  projectId: "nwhack2023-4356a",
  storageBucket: "nwhack2023-4356a.appspot.com",
  messagingSenderId: "849644658403",
  appId: "1:849644658403:web:ed45881b8ffa21cf1a2fd6",
  measurementId: "G-H13WKJP9VN"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    return true
  } catch (error) {
    return { error: error.message }
  }
};

export { signUp }