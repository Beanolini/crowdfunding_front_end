import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="header-box">
      <h1>Contact Us</h1>
      <p>
        Have any questions or need support? We're here to help! Please fill out
        the form below, and we'll get back to you as soon as possible.
      </p>
      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
