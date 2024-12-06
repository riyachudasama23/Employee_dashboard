import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import profilePic from "../assets/image.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <h3>John Doe</h3>
        <p>Software Engineer</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/profile">
              <i className="fas fa-user"></i>Profile
            </Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/leave-management">Leave Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
