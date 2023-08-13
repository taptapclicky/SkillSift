import { React, useState, useEffect } from "react";
import ContactForm from "../Components/ContactForm";

const ContactUsPage = () => {
  const [username, setUsername] = useState("");

  let useremail = localStorage.getItem("loggedInUser");

  // console.log(imageUrl)
  const allStoredUsers = JSON.parse(localStorage.getItem("UsersLogin"));

  useEffect(() => {
    console.log(allStoredUsers);
    for (let i = 0; i < allStoredUsers.length; i++) {
      if (allStoredUsers[i].email === useremail) {
        let user = allStoredUsers[i].firstName;
        // let useremail = allStoredUsers[i].email;

        setUsername(user);
      }
    }
  }, [allStoredUsers]);
  return (
    <>
      <div style={{ color: "blue" }}>
        {username && <p>Welcome, You are logged in as {username}</p>}
        <br />
      </div>
      <h2>Fill the form below to contact us</h2>
      <ContactForm />
    </>
  );
};

export default ContactUsPage;
