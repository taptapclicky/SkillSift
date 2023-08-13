import React, { useEffect, useState } from "react";
import "../styles/services.css";
const ProfessionalDetailsPage = () => {
  let email = localStorage.getItem("loggedInUser");
  let allStoredUsers = JSON.parse(localStorage.getItem("UsersLogin"));
  const [profDetails, SetProfDetails] = useState([]);

  useEffect(() => {
    //get all user posts
    let professionals = [];
    if (allStoredUsers) {
      // for (let i = 0; i < allStoredUsers.length; i++) {
      let users = allStoredUsers.filter((m) => m.role == "professional");
      console.log(users);
      SetProfDetails(users);
      console.log(profDetails);
      // }
    }
  }, []);

  return (
    <div className="profiles">git
      {profDetails.length &&
        profDetails.map((m) => {
          return (
            <div id="profile">
              <img
                height="200px"
                width="200px"
                src="https://th.bing.com/th/id/OIP.sv0AyRSdUVI72wlCMqYQ3gAAAA?pid=ImgDet&rs=1"
                alt="profile-img"
              />
              <h2>
                Name: {m.firstName.toUpperCase()} {m.lastName.toUpperCase()}
              </h2>
              <p>Service: {m.service}</p>
              <p>Price per hour: ${m.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProfessionalDetailsPage;
