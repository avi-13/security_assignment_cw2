import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar.css';
const Navbars = () => {

  const users = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  }
  return (
    <>
      <nav style={{ position: "fixed", zIndex: "99", top: "0", left: "0" }}>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label for="" className="logo text-danger">BloodBank</label>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Donate Blood</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Be a Donor</a></li>
          <li id="btn1">
            {
              users ? <>
                <div class="dropdown bg-white">
                  <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fab fa-user"></i>
                    Welcome{"" +users.fullName}
                  </a>
                  <ul class="dropdown-menu">
                    <Link class="dropdown-item" to="/profile">Profile</Link>
                    <Link class="dropdown-item" to="/change">Change Password</Link>
                    <Link class="dropdown-item" onClick={handleLogout} to="/logout">Logout</Link>
                  </ul>
                </div>
              </>
                : <>
                  <button className='btn btn-dark rounded m-2'>Register</button>
                  <button className='btn btn-dark rounded m-2'>Login</button>
                </>
            }
          </li>
        </ul>

        <div>

        </div>
      </nav>

    </>
  );
};

export default Navbars;
