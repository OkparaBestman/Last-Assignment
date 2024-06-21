import React, { useState, useContext } from "react";
import { AuthContext } from "../../Auth/context/authContext";
import ApplicationLayout from "../layout";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const { currentUserLoggedIn, user } = useContext(AuthContext);
  console.log(currentUserLoggedIn);
  console.log(user);
  return (
    <>
      <ApplicationLayout>
        <div className="parents_container">
            <div className="child_one">

            <p>{user?.email}</p>
            </div>
        </div>
      </ApplicationLayout>
    </>
  );
}

export default Dashboard;
