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
            <Link to="/tasks">
              <i className="fas fa-tasks"></i>Tasks
            </Link>
          </li>
          <li>
            <Link to="/attendance">
              <i className="fas fa-calendar-alt"></i>Attendance
            </Link>
          </li>
          <li>
            <Link to="/leave-management">
              <i className="fas fa-plane"></i>Leave Management
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
