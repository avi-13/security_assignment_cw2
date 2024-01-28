import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { default as Navbars } from "./components/Navbars";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import AdminPanel from "./pages/admin/AdminPanel";
import AddBloodRequests from "./pages/users/blood_request/AddBloodRequests";
import SingleBloodRequest from "./pages/users/blood_request/SingleBloodRequest";
import ViewBloodRequest from "./pages/users/blood_request/ViewBloodRequest";
import BeADonor from "./pages/users/donor/BeADonor";
import Profile from "./pages/users/profile/Profile";
import AdminRoutes from "./protected/AdminRoutes";
import UserRoutes from "./protected/UserRoutes";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <ToastContainer />
      {!user || (user && !user.isAdmin) ? <Navbars /> : null}
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminPanel />} />
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

        <Route element={<UserRoutes />}>
          <Route path="/be-a-donor/:id" element={<BeADonor />} />
          <Route path="/add_blood_requests" element={<AddBloodRequests />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
