import React from "react";
import "../styles/Header.css";
import profilePic from "../assets/image.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Employee Dashboard</h1>
      <div className="header-search">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="notification-icon">
        <i className="fas fa-bell"></i>
      </div>
      <div className="header-profile">
        <img src={profilePic} alt="Profile" className="profile-img-mini" />
      </div>
    </header>
  );
}

export default Header;
