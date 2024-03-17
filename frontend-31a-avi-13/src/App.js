import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import { default as Navbars } from "./components/Navbars";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import UsersLists from "./pages/UsersLists";
import AdminPanel from "./pages/admin/AdminPanel";
import EditBloodBank from "./pages/admin/bloodbanks/EditBloodBank";
import EditHospital from "./pages/admin/hospitals/EditHospital";
import BloodBanks from "./pages/users/BloodBanks/BloodBanks";
import SingleBloodbank from "./pages/users/BloodBanks/SingleBloodBanks";
import AddBloodRequests from "./pages/users/blood_request/AddBloodRequests";
import SingleBloodRequest from "./pages/users/blood_request/SingleBloodRequest";
import ViewBloodRequest from "./pages/users/blood_request/ViewBloodRequest";
import BeADonor from "./pages/users/donor/BeADonor";
import Users from "./pages/users/donor/Users";
import Hospitals from "./pages/users/hospitals/Hospitals";
import SingleHospital from "./pages/users/hospitals/SingleHospital";
import ForgetPassword from "./pages/users/profile/ForgetPassword";
import History from "./pages/users/profile/History";
import Profile from "./pages/users/profile/Profile";
import AdminRoutes from "./protected/AdminRoutes";
import UserRoutes from "./protected/UserRoutes";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [fullName, setFullName] = useState(user ? user.fullName : "");
  const updateFullName = (newFullName) => {
    setFullName(newFullName);
  };
  return (
    <Router>
      <ToastContainer />
      {!user || (user && !user.isAdmin) ? <Navbars /> : null}
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="/edit-hospital/:id" element={<EditHospital />} />
          <Route path="/edit-bloodbank/:id" element={<EditBloodBank />} />
          {/* <Route path="/admin/dashboard" element={<AdminPanel />} /> */}
        </Route>

        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/view_request/:id" element={<SingleBloodRequest />} />
        <Route path="/blood_requests" element={<ViewBloodRequest />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/single-hospital/:id" element={<SingleHospital />} />
        <Route path="/bloodbanks" element={<BloodBanks />} />
        <Route path="/single-bloodbank/:id" element={<SingleBloodbank />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/users-list" element={<UsersLists />} />
        <Route path="/*" element={<ErrorPage />} />

        <Route element={<UserRoutes />}>
          <Route path="/view_all_donors" element={<Users />} />
          <Route path="/be-a-donor/:id" element={<BeADonor />} />
          <Route path="/add_blood_requests" element={<AddBloodRequests />} />
          <Route
            path="/profile/:id"
            element={<Profile updateFullName={updateFullName} />}
          />
          <Route path="/get_my_request/:id" element={<History />} />
        </Route>
      </Routes>
      {!user || (user && !user.isAdmin) ? <Footer /> : null}
    </Router>
  );
}

export default App;
