import React from "react";
import GitLogo from "../assets/GitLogo.svg";
import Search from "./Search";




function Header() {
  return (
    <header>
      <div className="header_content">
        <a href="/" className="header_logo">
            <img src={GitLogo} alt="GitHub Logo" className="header_logo" />
        </a>
        <div className="search">
          <Search />
        </div>
      </div>
    </header>

  );
}

export default Header;