import { useState, useEffect } from "react";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import "./Login.css";
import { auth } from "./firebase-config";

import Navbar from "../navbar/Navbar";

import { readUserData } from "./firebase-config";

function Login() {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [user, setUser] = useState({});
	const [weight, setWeight] = useState(0);

	const getUserData = async () => {
		if (user) {
			const data = await readUserData(user.uid);
			setWeight(data.weight);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		getUserData();
		console.log(weight);
	}, [user, weight, getUserData]);

	const login = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
			window.location.href = "/";
		} catch (error) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
		// return user to main page
		window.location.href = "/";
	};

	return (
		<>
			<Navbar />
			{
				user ? (<>
					<button className="logoutButton" onClick={logout}>Logout</button>
					<p> Welcome {user.email} </p>
					<p> You are {weight} kg </p>
				</>
				) :
					(
						<>

							<div className="container">

								<div className="myStyle">
									<div className="whiteBox">
										<div className="loginFont">Login</div>

										<form onSubmit={login}>
											<div className="usernameDiv">
												<input
													className="usernameTextBox"
													onChange={(e) => setLoginEmail(e.target.value)}
													id="Username"
													name="Username"
													placeholder="Type Your Username"
													size="35" />
											</div>

											<div className="passwordDiv">
												<input
													className="passwordTextBox"
													onChange={(e) => setLoginPassword(e.target.value)}
													type="Password"
													id="Password"
													name="Password"
													placeholder="Type Your Password"
													size="35" />
											</div>

											<div className="forgotPasswordDiv">
												<a className="forgotYourPassword" target="_blank" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgradschool.oregonstate.edu%2Fhelp%2Ffaq%2F784&psig=AOvVaw0_meRYtqe7goATeSKYJ0yc&ust=1674461107626000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjdr-_b2vwCFQAAAAAdAAAAABAJ">Forgot Your Password?</a>
											</div>

											<div className="loginButtonDiv">
												<a href="https://en.datosjam.net.pe/wp-content/uploads/2022/11/portada_overflow-4.jpg" target="_blank">
													<button className="loginButton">LOGIN</button>
												</a>
											</div>
										</form>
									</div>

								</div>
							</div >
						</>
					)
			}

		</>
	)
}

export default Login;