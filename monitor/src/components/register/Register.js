import "./Register.css";

import Navbar from "../navbar/Navbar";

import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, writeUserData, doc, setDoc, collection, db } from "../login/firebase-config";

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
      console.log(user.user.uid);
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

              {/* <div className="forgotPasswordDiv">
            <a className="forgotYourPassword" target="_blank" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgradschool.oregonstate.edu%2Fhelp%2Ffaq%2F784&psig=AOvVaw0_meRYtqe7goATeSKYJ0yc&ust=1674461107626000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjdr-_b2vwCFQAAAAAdAAAAABAJ">Forgot Your Password?</a>
          </div> */}

              <div className="loginButtonDiv">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                  <button className="loginButton">Sign Up</button>
                </a>
              </div>
            </form>

          </div>

        </div>
      </div >
    </>


  )
}

export default Register;