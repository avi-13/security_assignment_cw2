import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../src/style/login.css";
import "../../src/style/navbar.css";
import { loginUserApi } from "../apis/api";
import CustomFaIcons from "../components/CustomFaIcons";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.userData);
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);
          const userAdmin = res.data.userData;
          if (userAdmin.isAdmin == false) {
            navigate("/home");
            window.location.reload();
            return;
          }
          navigate("/admin/dashboard");
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="loginSecondBody">
        <div class="loginContainer">
          <div class="loginForm">
            <header>Login</header>
            <form>
              <div class="loginInputBox">
                <i>
                  <CustomFaIcons icon={faEnvelope} size={"sm"} />
                </i>
                <input onChange={changeEmail} type="text" required />
                <label>Email</label>
              </div>
              <div class="loginInputBox">
                <i>
                  <CustomFaIcons icon={faLock} size={"sm"} />
                </i>
                <input
                  onChange={changePassword}
                  type="password"
                  maxlength="26"
                  required
                />
                <label>Password</label>
              </div>
              <div class="link">
                <a href="#">Forgot Password</a>
              </div>
              <button
                className="btn btn-dark text-white border-0 btn-outline-danger"
                onClick={handleSubmit}
              >
                Login
              </button>
              <div class="link">
                <p>
                  Don't have an account? <Link to={"/register"}>Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
