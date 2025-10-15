import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/header";
import Subheading from "../../component/subHeading.jsx";

const Contact = () => {
  return (<>


    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#e8f5e9",
        minHeight: "100vh",
      }}
    >
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">Contact Us</h1>
        <p className="text-muted">
          We’d love to hear from you! Feel free to reach out for any inquiries,
          feedback, or support.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Left Side: Contact Details */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="text-success mb-3">Get in Touch</h4>
            <p>
              <strong>📍 Address:</strong> Paradise Nursery, Garden Road, Karachi
            </p>
            <p>
              <strong>📞 Phone:</strong> +92 300 1234567
            </p>
            <p>
              <strong>✉️ Email:</strong> info@paradisenursery.com
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="text-success mb-3">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Contact;
