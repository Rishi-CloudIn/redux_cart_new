import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("name");
    console.log("rishi1");
    auth.logout();
    console.log("rishi2");
    navigate("/");
    console.log("rishi3");
  };
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Profile;
