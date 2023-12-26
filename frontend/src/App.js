import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbars";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDasboard from "./pages/admin/AdminDasboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin/Dashboard" element={<AdminDasboard />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
