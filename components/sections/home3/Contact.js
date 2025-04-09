"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error sending message." });
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="contact-style-two sec-pad">
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">Contact Us</span>
          <h2>
            Feel Free to Contact Us
            <br /> Today
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 info-column">
            <div className="info-inner">
              <div className="info-block-one">
                <h3>Quick Contact</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-2"></i>
                  </div>
                  <p>
                    Main Office: <br />
                    <Link href="tel:+971561826946">+971561826946</Link>
                  </p>
                </div>
              </div>
              <div className="info-block-one">
                <h3>Email Address</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-26"></i>
                  </div>
                  <p>
                    Mail: <br />
                    <Link href="mailto:thebizincorp@gmail.com">
                      thebizincorp@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="info-block-one">
                <h3>Mailing Address</h3>
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="/assets/images/icons/icon-2.png" alt="" />
                  </div>
                  <p>
                    Al Moosa Tower 2 - Office No:15, Level - 4, Sheikh Zayed Rd
                    - Trade Centre - Trade Centre 1 - Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 form-column">
            <div className="form-inner ml_35">
              <form onSubmit={handleSubmit} className="default-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button type="submit" className="theme-btn btn-one">
                      <span>Send Message</span>
                    </button>
                  </div>
                  {status && (
                    <div
                      className={`col-lg-12 form-group ${
                        status.type === "success"
                          ? "text-success"
                          : status.type === "error"
                          ? "text-danger"
                          : ""
                      }`}
                    >
                      {typeof status === "string" ? status : status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
