import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/api";


const Register = () => {

  // useState (setting input value)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // function for changing input value

  const changeFirstName = (e) => { // e is event that is typed by the user
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => // e is event that is typed by the user
    setLastName(e.target.value)


  const changeEmail = (e) => { // e is event that is typed by the user
    setEmail(e.target.value)
  }

  const changePassword = (e) => { // e is event that is typed by the user
    setPassword(e.target.value)
  }


  // function for button 
  const handleSubmit = (e) => {
    // check if input value is available
    e.preventDefault(); // prevents browser to reload
    console.log(firstName, lastName, email, password);

    // making json data object
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    // making API call
    createUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }

    }).catch((err) => {
      toast.error("Server Error")
      console.log(err.message)
    })


  }

  return (
    <>
      <div class="container" style={{ marginTop: "9rem" }}>
        <div class="form login">
          <header>Signup</header>
          <form>
            <div class="inputBox">
              <i class="fas fa-user"></i>
              <input type="text" required />
              <label>Enter Your Fullname</label>
            </div>
            <div class="inputBox">
              <i class="fas fa-envelope"></i>
              <input type="text" maxlength="26" required />
              <label>Enter Your Email</label>
            </div>
            <div class="inputBox">
              <i class="fas fa-phone"></i>
              <input type="text" maxlength="10" required />
              <label>Enter Your Contact No.</label>
            </div>            <div class="inputBox">
              <i class="fas fa-map"></i>
              <input type="text" maxlength="26" required />
              <label>Enter Your Current Address</label>
            </div>
            <div class="inputBox">
              <input type="password" maxlength="26" required />
              <label>Enter Your Password</label>
            </div>
            <div class="inputBox">
              <input type="password" maxlength="26" required />
              <label>Confirm your Password</label>
            </div>

            <button>Signup</button>
            <div class="link">
              <p>Already have an account? <a href="#">Login</a></p>
            </div>
            {/* <div class="line"></div> */}
            {/* <div class="social-login">
              <a href="#" class="apple"><i class="fab fa-apple"></i> <span>Login with apple</span></a>
              <a href="#" class="facebook"><i class="fab fa-facebook"></i> <span>Login with facebook</span></a>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
