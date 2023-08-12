import React, { useState } from "react";
import "../styles/signup.css";
import { useMutation, gql } from '@apollo/client';

const SUBMIT_CONTACT_FORM = gql`
    mutation SubmitContactForm($name: String!, $email: String!, $phoneNumber: String!, $message: String!) {
        submitContactForm(name: $name, email: $email, phoneNumber: $phoneNumber, message: $message) {
            success
            message
        }
    }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [submitContactForm, { loading, error }] = useMutation(SUBMIT_CONTACT_FORM, {
    onCompleted: (data) => {
      console.log(data);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    submitContactForm({
      variables: {
        name,
        email,
        phoneNumber,
        message
      }
    });
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-field">
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-field">
          <label>Phone Number: </label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-field">
          <label>Message: </label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button className="form-field" type="submit">
          Send
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default ContactForm;
