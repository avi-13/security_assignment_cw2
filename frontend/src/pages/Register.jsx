
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/api";

const Register = () => {
  // useState (setting input value)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setContact] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [password, setPassword] = useState('')


  // function for changing input value

  const changeFullName = (e) => { // e is event that is typed by the user
    setFullName(e.target.value)
  }

  const changeEmail = (e) => { // e is event that is typed by the user
    setEmail(e.target.value)
  }
  const changeContact = (e) => { // e is event that is typed by the user
    setContact(e.target.value)
  }
  const changeCurrentAddress = (e) => { // e is event that is typed by the user
    setCurrentAddress(e.target.value)
  }

  const changePassword = (e) => { // e is event that is typed by the user
    setPassword(e.target.value)
  }



  // function for button 
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser to reload
    console.log(fullName, email, password, currentAddress, number, password);

    // making json data object
    // const formData = new FormData();
    // formData.append('fullName', fullName)
    // formData.append('email', email)
    // formData.append('number', contact)
    // formData.append('currentAddress', currentAddress)
    // formData.append('password', password)

    const data = {
      fullName: fullName,
      email: email,
      number: number,
      currentAddress: currentAddress,
      password: password
    }

    // making API call
    createUserApi(data).then((res) => {
      console.log(data)
      if (res.data.success == false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }

    }).catch((err) => {
      toast.error("Server Error")
      console.log(err.message)
    });
  }

  return (
    <>
      <div className="secondBody">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div className="form login">
            <header>Signup</header>
            <form className="form-control">
              <div className="inputBox">
                <i className="fas fa-user"></i>
                <input onChange={changeFullName} type="text" required />
                <label>Enter Your Fullname</label>
              </div>
              <div className="inputBox">
                <i className="fas fa-envelope"></i>
                <input onChange={changeEmail} type="text" maxlength="26" required />
                <label>Enter Your Email</label>
              </div>
              <div className="inputBox">
                <i className="fas fa-phone"></i>
                <input onChange={changeContact} type="text" maxlength="10" required />
                <label>Enter Your Contact No.</label>
              </div>            <div className="inputBox">
                <i className="fas fa-map"></i>
                <input onChange={changeCurrentAddress} type="text" maxlength="26" required />
                <label>Enter Your Current Address</label>
              </div>
              <div className="inputBox">
                <input onChange={changePassword} type="password" maxlength="26" required />
                <label>Enter Your Password</label>
              </div>
              <div className="inputBox">
                <input type="password" maxlength="26" required />
                <label>Confirm your Password</label>
              </div>

              <button className="btn btn-dark b-0 text-white btn-outline-danger" onClick={handleSubmit}>Signup</button>
              <div className="link">
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register
