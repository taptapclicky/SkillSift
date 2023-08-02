import React from "react";
const ContactForm = () => {
  return (
    <>
      <form>
        <div className="username">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="input-group"
            required
          />
        </div>
        <div className="form_field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-group"
            required
          />
        </div>
        <div className="form_field">
          <textarea
            placeholder="Your message"
            name="message"
            className="input-group"
            required
          />
        </div>
        <div className="form_field">
          <button className="input-group" type="submit">
            Send a message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
