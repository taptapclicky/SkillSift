import React, { useState } from "react";

const SigninForm = () => {
  const [role, setRole] = useState("user"); // Default to "user"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloggedIn, setIsloggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem("UsersLogin")) {
      const allStoredUsers = JSON.parse(localStorage.getItem("UsersLogin"));
      const matchedUser = allStoredUsers.filter((user) => {
        return email === user.email && password === user.password;
      });
      if (matchedUser.length) {
        console.log("Login successful");
        setIsloggedIn(!isloggedIn);
        localStorage.setItem("LoggedInState", isloggedIn);
        localStorage.setItem("loggedInUser", email);
        window.location.href = "./contact";
      } else {
        console.log("Wrong credentials");
        alert("wrong credentials");
      }
    } else {
      console.log("Wrong credentials"); // Don't say "Not a registered user"
    }
  };

  return (
    <div classname="form-container">
      <h1>Sign In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Role:
          <select
            style={{ width: "70%" }}
            value={role}
            className="form-field"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="professional">Professional</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            style={{ width: "64%" }}
            type="email"
            className="form-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            style={{ width: "64%" }}
            type="password"
            val
            className="form-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button class="submitBtn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
