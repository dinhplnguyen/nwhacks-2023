import { useState, useEffect } from "react";

import "./Register.css";
import Navbar from "../navbar/Navbar";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, writeUserData } from "../login/firebase-config";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      writeUserData(user.user.uid, user.user.email, 0);

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">

        <div className="myStyle">
          <div className="whiteBox">
            <div className="loginFont">Sign Up</div>

            <form onSubmit={register}>
              <div className="usernameDiv">
                <input
                  className="usernameTextBox"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  id="Username" name="Username"
                  placeholder="Type Your E-mail Address"
                  size="35" />
              </div>

              <div className="passwordDiv">
                <input
                  className="passwordTextBox"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  type="Password" id="Password"
                  name="Password"
                  placeholder="Type Your Password"
                  size="35" />
              </div>

              <div className="loginButtonDiv">
                <button className="loginButton">Sign Up</button>
              </div>
            </form>

          </div>
        </div>
      </div >
    </>


  )
}

export default Register;