import React from "react";
import "../style/Errorpage.css";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div class="noise"></div>
      <div class="overlay"></div>
      <div class="terminal">
        <h1>
          Oops !!!  <span class="errorcode">404</span>
        </h1>
        <p class="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p class="output">
          Please try to <a href="#1">go back</a> or{" "}
          <a href="#2">return to the homepage</a>.
        </p>
        <p class="output">Good luck.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
