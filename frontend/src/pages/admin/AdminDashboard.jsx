import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/adminDashboard.css';
import AddDonors from '../donors/AddDonors';
import AddBloodBanks from './bloodbanks/AddBloodbanks';
import AddHospitals from './hospitals/AddHospitals';
import AddNews from './news/AddNews';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <p>This is the Dashboard page content.</p>
    </div>
  );
}

function AdminDashboard() {
  const users = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  }
  const [currentPage, setCurrentPage] = React.useState('Dashboard');

  let content;
  switch (currentPage) {
    case 'Dashboard':
      content = <Dashboard />;
      break;
    case 'Donors':
      content = <AddDonors />;
      break;
    case 'AddBloodBanks':
      content = <AddBloodBanks />;
      break;
    case 'AddHospitals':
      content = <AddHospitals />;
      break;
    case 'AddNews':
      content = <AddNews />;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <>
      <div className='adminMainContainer'>
        <header className='adminHeader'>
          <h1>Blood Bank Admin Panel</h1>
          {
            users ? <>
              <div class="dropdown bg-white" style={{
                display: "flex", height: "50px", alignItems: "center", width: " 370px"
              }}>
                <a class="dropdown-toggle" style={{ width: "inherit", fontSize: "25px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fab fa-user"></i>
                  Welcome {users.fullName}
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
        </header>
        <div className='adminWrapper'>
          <nav className='adminNavbar'>
            <ul className='adminUl'>
              <li className='adminLi'>
                <button onClick={() => setCurrentPage('Dashboard')} tabIndex="1">Dashboard</button>
              </li>
              <li className='adminLi' >
                <button onClick={() => setCurrentPage('Donors')} tabIndex="2">Donors</button>
              </li>
              <li className='adminLi'>
                <button onClick={() => setCurrentPage('AddBloodBanks')} tabIndex="3">AddBloodBanks</button>
              </li>
              <li className='adminLi' >
                <button onClick={() => setCurrentPage('AddHospitals')} tabIndex="4">AddHospitals</button>
              </li>
              <li className='adminLi'>
                <button onClick={() => setCurrentPage('AddNews')} tabIndex="5">AddNews</button>
              </li>
            </ul>
          </nav>
          <main >
            {content}
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;