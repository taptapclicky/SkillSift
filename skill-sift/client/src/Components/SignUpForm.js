import "../styles/signup.css";
import React, { useState } from "react";

export default function SignUpForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
    service: "",
    price: "",
    isProfessional: false, // default to "user"
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.role
    ) {
      setValid(true);
    }
    setSubmitted(true);
    var date = new Date();
    window.localStorage.setItem("date", date.toDateString());
    let storedUsers = localStorage.UsersLogin
      ? JSON.parse(localStorage.UsersLogin)
      : [];
    if (!storedUsers.some((user) => user.email === values.email)) {
      storedUsers.push(values);
      localStorage.setItem("UsersLogin", JSON.stringify(storedUsers));

      // window.location.href = "./sign-in";
      console.log(localStorage.getItem("UsersLogin"));
    } else {
      alert("User Already Registered");
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              Welcome {values.firstName} {values.lastName}
            </h3>
            <div>Your registration as a {values.role} was successful!</div>
          </div>
        )}

        {values.role == "user" ? (
          <div className="register-form">
            {!valid && (
              <select
                className="form-field"
                name="role"
                value={values.role}
                onChange={handleInputChange}
              >
                <option value="user">User</option>
                <option value="professional">Professional</option>
              </select>
            )}
            {submitted && !values.role && (
              <span id="role-error">Please select a role</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter a first name</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.lastName && (
              <span id="last-name-error">Please enter a last name</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.password && (
              <span id="password-error">Please enter a password</span>
            )}

            {!valid && (
              <button className="submitBtn" type="submit">
                Register
              </button>
            )}
          </div>
        ) : (
          <div className="register-form">
            {!valid && (
              <select
                className="form-field"
                name="role"
                value={values.role}
                onChange={handleInputChange}
              >
                <option value="user">User</option>
                <option value="professional">Professional</option>
              </select>
            )}
            {submitted && !values.role && (
              <span id="role-error">Please select a role</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter a first name</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.lastName && (
              <span id="last-name-error">Please enter a last name</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.password && (
              <span id="password-error">Please enter a password</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Your profession"
                name="service"
                value={values.service}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.service && (
              <span id="service-error">Please enter your profession</span>
            )}

            {!valid && (
              <input
                className="form-field"
                type="text"
                placeholder="Price per hour"
                name="price"
                value={values.price}
                onChange={handleInputChange}
              />
            )}
            {submitted && !values.service && (
              <span id="price-error">Please enter your pricee</span>
            )}

            {!valid && (
              <button className="submitBtn" type="submit">
                Register
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
