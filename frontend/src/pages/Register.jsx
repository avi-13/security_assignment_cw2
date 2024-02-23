import {
  faEnvelope,
  faLocation,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../src/style/navbar.css";
import "../../src/style/register.css";
import { createUserApi } from "../apis/api";
import CustomFaIcons from "../components/CustomFaIcons";

const Register = () => {
  const navigate = useNavigate();
  // useState (setting input value)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setContact] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [password, setPassword] = useState("");

  // function for changing input value

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeContact = (e) => {
    setContact(e.target.value);
  };
  const changeCurrentAddress = (e) => {
    setCurrentAddress(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password, currentAddress, number, password);

    const data = {
      fullName: fullName,
      email: email,
      number: number,
      currentAddress: currentAddress,
      password: password,
    };

    // making API call
    createUserApi(data)
      .then((res) => {
        console.log(data);
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          navigate("/login");
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="registerSecondBody">
        <div className="registerContainer">
          <header>Signup</header>
          <form className="form-control">
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faUser} className={"m-0"} />
              </i>
              <input onChange={changeFullName} type="text" required />
              <label>Enter Your Fullname</label>
            </div>
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faEnvelope} className={"m-0"} />
              </i>
              <input
                onChange={changeEmail}
                type="text"
                maxlength="26"
                required
              />
              <label>Enter Your Email</label>
            </div>
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faPhone} className={"m-0"} />
              </i>
              <input
                onChange={changeContact}
                type="number"
                maxlength="10"
                required
              />
              <label>Enter Your Contact No.</label>
            </div>
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLocation} className={"m-0"} />
              </i>
              <input
                onChange={changeCurrentAddress}
                type="text"
                maxlength="26"
                required
              />
              <label>Enter Your Current Address</label>
            </div>
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLock} className={"m-0"} />
              </i>
              <input
                onChange={changePassword}
                type="password"
                maxlength="26"
                required
              />
              <label>Enter Your Password</label>
            </div>
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLock} className={"m-0"} />
              </i>
              <input type="password" maxlength="26" required />
              <label>Confirm your Password</label>
            </div>
            <button
              className="btn btn-dark text-white border-0 btn-outline-danger"
              onClick={handleSubmit}
            >
              Signup
            </button>
            <div className="link">
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
