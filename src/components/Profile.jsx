import React from "react";
import "../styles/Profile.css";
import { FaJs, FaNodeJs, FaReact, FaBootstrap, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiKubernetes,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

function Profile() {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
  ];

  return (
    <div className="profile-page">
      <h2 className="profile-heading">Employee Profile</h2>
      <div className="profile-details">
        {/* Section 1: Personal Info */}
        <div className="profile-section">
          <h3>Personal Information</h3>
          <p>
            <strong>Name :</strong> John Doe
          </p>
          <p>
            <strong>Email :</strong> john.doe@example.com
          </p>
          <p>
            <strong>Phone :</strong> +123 456 7890
          </p>
          <p>
            <strong>Address :</strong> 123 Main Street, Springfield
          </p>
        </div>

        {/* Section 2: Work Details */}
        <div className="profile-section">
          <h3>Work Details</h3>
          <p>
            <strong>Position :</strong> Software Engineer
          </p>
          <p>
            <strong>Joining Date :</strong> January 15, 2022
          </p>
          <p>
            <strong>Department :</strong> IT
          </p>
          <p>
            <strong>Manager :</strong> Jane Smith
          </p>
        </div>

        {/* Section 3: Additional Information */}
        <div className="profile-section">
          <h3>Additional Information</h3>
          <p>
            <strong>Employee ID :</strong> EMP123456
          </p>
          <p>
            <strong>Blood Group :</strong> O+
          </p>
          <p>
            <strong>Emergency Contact :</strong> +123 987 6543
          </p>
          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/johndoe
          </p>
        </div>
      </div>

      {/* Section 4: Skills */}
      <div className="profile-section">
        <h3>Skills</h3>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="fa-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
