import {
  faEnvelope,
  faHome,
  faMailBulk,
  faMailForward,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendMessageApi } from "../apis/api";
import CustomFaIcons from "../components/CustomFaIcons";
import "../style/contact-us.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    sendMessageApi(formData)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log(err);
      });
  };

  return (
    <section class="contact" id="contact">
      <div class="container">
        <div class="heading text-center">
          <h2>Get in Touch</h2>
          <p>
            Thank you for your interest in contacting us. Whether you have a
            question about our products, need assistance with an order, or
            simply want to provide feedback, we're here to help.
            <br />
            Feel free to reach out to us using the information below:
          </p>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="title">
              <h3>Contact detail</h3>
              <p>
                If you have any questions or concerns related to your order, our
                customer support team is ready to assist you. Please include
                your order number in your email for a faster response.
              </p>
            </div>
            <div class="content">
              <div class="info">
                <CustomFaIcons icon={faMobile} />
                <h4 class="d-inline-block">
                  PHONE :
                  <br />
                  <span>9588840000, 9095505011</span>
                </h4>
              </div>

              <div class="info">
                <CustomFaIcons size={"lg"} icon={faEnvelope} />
                <h4 class="d-inline-block">
                  EMAIL :
                  <br />
                  <span>bloodbank@gmail.com</span>
                </h4>
              </div>

              <div class="info">
                <CustomFaIcons size={"lg"} icon={faHome} />
                <h4 class="d-inline-block">
                  ADDRESS :<br />
                  <span>DilliBazar, Kathmandu</span>
                </h4>
              </div>
            </div>
          </div>

          <div class="col-md-7">
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
                <div class="col-sm-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="btn btn-block" onClick={handleSubmit}>
                Send Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
