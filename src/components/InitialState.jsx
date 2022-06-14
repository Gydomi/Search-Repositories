import React from "react";
import startLoop from "../assets/startLoop.svg"

function InitialState() {
    return (
        <div className="found">
          <img src={startLoop}/>
          <p>Start with searching<br></br>
        a GitHub user</p>
        </div>
      );
}

export default InitialState;