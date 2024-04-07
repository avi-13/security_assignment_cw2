import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const BloodBankUserRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return user != null && user.isBloodBank ? <Outlet /> : navigate("/login");
};

export default BloodBankUserRoutes;
