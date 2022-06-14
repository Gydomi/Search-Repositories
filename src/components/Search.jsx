import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import searchLoop from "../assets/searchLoop.svg"


function Search() {
  return (
    <form id="userAgent" autoComplete="off">
        <div className="form-group">
          <form>
              <img src={searchLoop}/>
              <input type="text" class="form-control" id="search" placeholder="Enter GitHub username" required/>
            </form>
        </div>
    </form>
  );
};


export default Search;

