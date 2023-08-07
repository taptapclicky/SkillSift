import React, { useState } from "react";
import "../styles/signup.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://need the server http for the file/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            class="form-field"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            class="form-field"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            class="form-field"
            placeholder="Your Mobile"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            class="form-field"
            value={message}
            placeholder="Your message"
            onChange={handleMessageChange}
            required
          />
        </label>
        <button class="form-field" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
