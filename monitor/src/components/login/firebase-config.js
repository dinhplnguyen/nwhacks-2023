import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore";


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
const auth = getAuth(app);

function writeUserData(userId, email, weight) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    email: email,
    weight: weight
  });
}

// read data from firebase database: user's weight
function readUserData(userId) {
  const db = getDatabase();
  get(ref(db, 'users/' + userId)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
      return 0;
    }
  }
  ).catch((error) => {
    console.error(error);
  }
  );
}

// get database from firebase firestore
export const db = getDatabase(app);
export { auth, doc, setDoc, collection };
export { writeUserData, readUserData }