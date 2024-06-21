import React, { useContext } from "react";
import { AuthContext } from "../../../Auth/context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ApplicationHeader() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="header_container">
      <div className="header_logo">BEST FOOD</div>
      <div className="header_search">
        {user && <p>Welcome {user.firstname}</p>}

        <input type="text" placeholder="Search" />
      </div>
      <div className="header_icon">
        <FontAwesomeIcon icon="fa-solid fa-bowl-food" />
      </div>
    </div>
  );
}

export default ApplicationHeader;
