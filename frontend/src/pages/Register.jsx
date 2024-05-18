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
import { createUserApi, sendOtpApi } from "../apis/api";
import CustomFaIcons from "../components/CustomFaIcons";

import { Label, Modal, TextInput } from "flowbite-react";

const Register = () => {
  const navigate = useNavigate();
  // useState (setting input value)
  const [fullName, setFullName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    // console.log("Sending OTP to:", email);
    const data = { email: email };
    sendOtpApi(data)
      .then((res) => {
        // console.log(data);
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          setOpenModal(true);
          toast.success(res.data.message);
          setOtp(res?.data?.otp);

          // console.log("OTP:", res.data.otp);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  const validatein = (e) => {
    e.preventDefault();
    const isValid = Validate();
    if (!isValid) {
      return;
    } else {
      sendOtp(email);
    }
  };

  function onCloseModal() {
    setOpenModal(false);
  }

  const [email, setEmail] = useState("");
  const [number, setContact] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userVerificationCode, setUserVerificationCode] = useState("");

  const [userImage, setUserImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [userImageUrl, setUserImageUrl] = useState(null);

  // functio for image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; //files not file
    setUserImage(file);
    setPreviewImage(URL?.createObjectURL(file));
  };

  //usestate(setting error message)
  const [fnameerror, setFullnameError] = useState("");
  const [lnameerror, setCurrentAddressError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [numbererror, setNumberError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [cpassworderror, setCpasswordError] = useState("");

  // validate input value

  const Validate = () => {
    let isValid = true;

    // reset error message
    setFullnameError("");
    setCurrentAddressError("");
    setNumberError("");
    setEmailError("");
    setPasswordError("");
    setCpasswordError("");

    if (fullName.trim() === "") {
      setFullnameError("Name is Required");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is Required");
      isValid = false;
    }
    if (email.trim() !== "" && !email.includes("@")) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (number.trim() === "" || number.length !== 10) {
      setNumberError("Number is Invalid (Must be 10 word) ");
      isValid = false;
    }

    if (currentAddress.trim() === "") {
      setCurrentAddressError("Address is Required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is Required");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setCpasswordError("Password doesnot match");
      isValid = false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setCpasswordError("Password doesnot match");
      isValid = false;
    }
    return isValid;
  };

  // function for changing input value

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeCode = (e) => {
    setUserVerificationCode(e.target.value);
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

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      email: email,
      number: number,
      currentAddress: currentAddress,
      password: password,
      userImage: userImage,
      userVerificationCode: userVerificationCode,
      otp: otp,
    };

    // making API call
    createUserApi(data)
      .then((res) => {
        // console.log(data);
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
              <input
                style={{ boxSshadow: "none" }}
                onChange={changeFullName}
                type="text"
                required
              />
              <label>Enter Your Fullname</label>
            </div>
            {fnameerror && <p className="text-danger">{fnameerror}</p>}
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faEnvelope} className={"m-0"} />
              </i>
              <input
                style={{ boxSshadow: "none" }}
                onChange={changeEmail}
                type="text"
                maxLength="26"
                required
              />
              <label>Enter Your Email</label>
            </div>
            {emailerror && <p className="text-danger">{emailerror}</p>}
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faPhone} className={"m-0"} />
              </i>
              <input
                style={{ boxSshadow: "none" }}
                onChange={changeContact}
                type="number"
                maxLength="10"
                required
              />
              <label>Enter Your Contact No.</label>
            </div>
            {numbererror && <p className="text-danger">{numbererror}</p>}
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLocation} className={"m-0"} />
              </i>
              <input
                onChange={changeCurrentAddress}
                type="text"
                maxLength="26"
                required
              />
              <label>Enter Your Current Address</label>
            </div>
            {lnameerror && <p className="text-danger">{lnameerror}</p>}
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLock} className={"m-0"} />
              </i>
              <input
                style={{ boxSshadow: "none" }}
                onChange={changePassword}
                type="password"
                maxLength="26"
                required
              />
              <label>Enter Your Password</label>
            </div>
            {passworderror && <p className="text-danger">{passworderror}</p>}
            <div className="registerInputBox">
              <i>
                <CustomFaIcons icon={faLock} className={"m-0"} />
              </i>
              <input
                style={{ boxSshadow: "none" }}
                onChange={changeConfirmPassword}
                type="password"
                maxLength="26"
                required
              />
              <label>Confirm your Password</label>
            </div>
            {cpassworderror && <p className="text-danger">{cpassworderror}</p>}
            <button
              className="btn btn-dark text-white border-0 btn-outline-danger"
              onClick={(e) => validatein(e)}
            >
              Sign Up
            </button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Enter Your Verification code here ....
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="code" value="Your Verification Code" />
                    </div>
                    <TextInput
                      id="code"
                      type="text"
                      onChange={changeCode}
                      required
                    />
                  </div>
                  <div className="w-full d-flex flex-row justify-center">
                    <button
                      className="btn btn-dark text-white border-0 btn-outline-danger"
                      onClick={handleSubmit}
                    >
                      Create your account
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
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
