import React from "react";
import notrepo from "../assets/notrepo.svg"

function RepoNotFound() {
  return (
    <div className="notrepo">
        <img src={notrepo}/>
        <p>Repository list is empty</p>
    </div>
  );
}

export default RepoNotFound;