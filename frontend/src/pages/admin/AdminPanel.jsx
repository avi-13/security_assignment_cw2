import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/AdminPanel.css';
import AdminDashboard from './admin_dashboard/AdminDashboard';
import AddBloodBanks from './bloodbanks/AddBloodbanks';
import AddHospitals from './hospitals/AddHospitals';
import AddNews from './news/AddNews';
import ViewDonors from './donors/Donors';
function AdminPanel() {
  const users = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }
  const [currentPage, setCurrentPage] = React.useState('Dashboard');

  let content;
  switch (currentPage) {
    case 'AdminDashboard':
      content = <AdminDashboard />;
      break;
    case 'Donors':
      content = <ViewDonors />;
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
      content = <AdminDashboard />;
  }
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  return (
    <>
      <div className='adminMainContainer'>
        <header className='adminHeader'>
          <h1>Blood Bank Admin Panel</h1>
          {
            users ? <>
              <div className="dropdown bg-white" style={{
                display: "flex", height: "50px", alignItems: "center", width: " 370px"
              }}>
                <a className="dropdown-toggle" style={{ width: "inherit", fontSize: "25px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fab fa-user"></i>
                  Welcome {users.fullName}
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <Link className="dropdown-item" to="/change">Change Password</Link>
                  <Link className="dropdown-item" onClick={handleLogout} to="/logout">Logout</Link>
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
          <ul className='adminUl'>
            <li className={`adminLi ${currentPage === 'Dashboard' ? 'active' : ''}`}>
              <button onClick={() => setCurrentPage('Dashboard')} tabIndex="1">Dashboard</button>
            </li>
            <li className={`adminLi ${currentPage === 'Donors' ? 'active' : ''}`} >
              <button onClick={() => setCurrentPage('Donors')} tabIndex="2">Donors</button>
            </li>
            <li className={`adminLi ${currentPage === 'AddBloodBanks' ? 'active' : ''}`}>
              <button onClick={() => setCurrentPage('AddBloodBanks')} tabIndex="3">AddBloodBanks</button>
            </li>
            <li className={`adminLi ${currentPage === 'AddHospitals' ? 'active' : ''}`} >
              <button onClick={() => setCurrentPage('AddHospitals')} tabIndex="4">AddHospitals</button>
            </li>
            <li className={`adminLi ${currentPage === 'AddNews' ? 'active' : ''}`}>
              <button onClick={() => setCurrentPage('AddNews')} tabIndex="5">AddNews</button>
            </li>
          </ul>
          <main >
            {content}
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;