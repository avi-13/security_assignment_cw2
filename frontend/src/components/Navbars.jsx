import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../style/navbar.css';
const Navbars = () => {
  const [activeItem, setActiveItem] = useState(null);
  const users = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
    window.location.reload();

  }
  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/':
        setActiveItem(0);
        break;
      case '/be-a-donor':
        setActiveItem(1);
        break;
      case '/blood_requests':
        setActiveItem(2);
        break;
      case '/contact-us':
        setActiveItem(3);
        break;
      case '/our-services':
        setActiveItem(4);
        break;
      case '/about-us':
        setActiveItem(5);
        break;

      default:
        setActiveItem(0);
        break;
    }
  }, [location]);

  if (activeItem === null) {
    return null;
  }

  const loginPage = (e) => {
    navigate('/login')
    window.location.reload();
  }

  const registerPage = (e) => {
    navigate('/register')
    window.location.reload();

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
          <li><Link to={'/'} className={activeItem === 0 ? "active" : ""}>Home</Link></li>
          <li><Link to={'/be-a-donor'} className={activeItem === 1 ? "active" : ""}  >Be A Donor</Link></li>
          <li><Link to={'/blood_requests'} className={activeItem === 2 ? "active" : ""}>View Blood Requests</Link></li>
          <li><Link to={''} className={activeItem === 3 ? "active" : ""} >Our Services</Link></li>
          <li><Link to={''} className={activeItem === 4 ? "active" : ""}>About Us</Link></li>
          <li><Link to={''} className={activeItem === 5 ? "active" : ""}>Contact Us</Link></li>
          <li id="btn1">
            {
              users ? <>
                <div class="dropdown bg-white">
                  <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fab fa-user"></i>
                    Welcome{"" + users.fullName}
                  </a>
                  <ul class="dropdown-menu">
                    <Link class="dropdown-item" to="/profile">Profile</Link>
                    <Link class="dropdown-item" to="/change">Change Password</Link>
                    <Link class="dropdown-item" onClick={handleLogout} to="/logout">Logout</Link>
                  </ul>
                </div>
              </>
                : <>
                  <button onClick={registerPage} className='btn btn-dark rounded m-2'>Register</button>
                  <button onClick={loginPage} className='btn btn-dark rounded m-2'>Login</button>
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
