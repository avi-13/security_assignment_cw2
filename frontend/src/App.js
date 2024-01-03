import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { default as Navbars } from "./components/Navbars";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoutes from "./protected/AdminRoutes";
import UserRoutes from "./protected/UserRoutes";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      {user.isAdmin ? null : <Navbars />}
      <ToastContainer />
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<h1>profile</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
