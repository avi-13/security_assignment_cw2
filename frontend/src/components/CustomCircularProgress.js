import { CircularProgress } from "@mui/material";
import React from "react";

const CustomCircularProgress = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p className="align-items-center">
        <CircularProgress color="error" size={100} thickness={4} />
      </p>
    </div>
  );
};

export default CustomCircularProgress;
