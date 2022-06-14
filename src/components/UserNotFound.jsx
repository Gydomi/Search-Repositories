import React from "react";
import usernotfound from "../assets/usernotfound.svg"

function UserNotFound() {
  return (
    <div className="found">
      <img src={usernotfound}/>
      <p>User not found</p>
    </div>
  );
}

export default UserNotFound;