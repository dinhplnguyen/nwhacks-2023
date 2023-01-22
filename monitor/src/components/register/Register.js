import "./Register.css";
import image from "../login/img/bg0.jpg"


function Register() {

  const myStyle = {
    position: 'relative',
    backgroundImage: `url(${image})`,
    height: '100vh',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (


    <div className="container">

      <div className="myStyle">
        <div className="whiteBox">
          <div className="loginFont">Sign Up</div>

          <div className="usernameDiv">
            <input className="usernameTextBox" id="Username" name="Username" placeholder="Type Your E-mail Address" size="35" />
          </div>

          <div className="passwordDiv">
            <input className="passwordTextBox" type="Password" id="Password" name="Password" placeholder="Type Your Password" size="35" />
          </div>

          {/* <div className="forgotPasswordDiv">
            <a className="forgotYourPassword" target="_blank" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgradschool.oregonstate.edu%2Fhelp%2Ffaq%2F784&psig=AOvVaw0_meRYtqe7goATeSKYJ0yc&ust=1674461107626000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjdr-_b2vwCFQAAAAAdAAAAABAJ">Forgot Your Password?</a>
          </div> */}

          <div className="loginButtonDiv">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              <button className="loginButton">Sign Up</button>
            </a>
          </div>

        </div>

      </div>
    </div >



  )
}

export default Register;