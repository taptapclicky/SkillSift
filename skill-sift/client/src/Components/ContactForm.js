import React, { useState } from "react";
import "../styles/contact.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
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
    setValid(!valid);
    setEmail("");
    setName("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div>
      {valid && (
        <div className="success-message">
          <h3>Thank you {name}</h3>
          <div>
            Your message has been received, we will contact you via {email}
          </div>
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            class="form-field"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
            class="form-field"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <input
            type="tel"
            class="form-field"
            placeholder="Your Mobile"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />

          <textarea
            class="form-field"
            value={message}
            placeholder="Your message"
            onChange={handleMessageChange}
            required
          />

          <button class="submitBtn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
