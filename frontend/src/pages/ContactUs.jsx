import React from "react";
import "../style/contact-us.css";

const ContactUs = () => {
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
                <i class="fas fa-mobile-alt"></i>
                <h4 class="d-inline-block">
                  PHONE :
                  <br />
                  <span>9588840000, 9095505011</span>
                </h4>
              </div>

              <div class="info">
                <i class="far fa-envelope"></i>
                <h4 class="d-inline-block">
                  EMAIL :
                  <br />
                  <span>bloodbank@gmail.com</span>
                </h4>
              </div>

              <div class="info">
                <i class="fas fa-map-marker-alt"></i>
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
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-sm-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="btn btn-block">
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
