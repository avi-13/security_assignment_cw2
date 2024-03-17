import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="top">
          <img alt="" src="assets/images/logotrans.png" />
          <ul>
            <li>
              <h3>Resources</h3>
              <a href={"/home"}>Usage</a>
              <a href={"/home"}>Docs</a>
              <a href={"/home"}>Support</a>
              <a href={"/home"}>Hardware</a>
            </li>
            <li>
              <h3>Pricing</h3>
              <a href={"/home"}>Overview</a>
              <a href={"/home"}>Flexible Data</a>
              <a href={"/home"}>High Volume</a>
              <a href={"/home"}>Enterprise</a>
            </li>
            <li>
              <h3>Developers</h3>
              <a href={"/home"}>Forum</a>
              <a href={"/home"}>Projects</a>
              <a href={"/home"}>Open Source</a>
              <a href={"/home"}>GitHub</a>
            </li>
            <li>
              <h3>Company</h3>
              <a href={"/home"}>About Us</a>
              <a href={"/home"}>Blog</a>
              <a href={"/home"}>Partnerships</a>
              <a href={"/home"}>Careers</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
