import React, { useState } from "react";
import "../styles/Leave.css";

function LeaveManagement() {
  const [leaves, setLeaves] = useState([]);
  const [newLeave, setNewLeave] = useState("");

  const handleApplyLeave = () => {
    setLeaves([...leaves, newLeave]);
    setNewLeave("");
  };

  return (
    <div className="leave-page">
      <h1 className="title">Leave Management</h1>
      <input
        type="text"
        placeholder="Enter leave reason"
        value={newLeave}
        onChange={(e) => setNewLeave(e.target.value)}
      />
      <button onClick={handleApplyLeave}>Apply Leave</button>
      <ul>
        {leaves.map((leave, index) => (
          <li key={index}>{leave}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveManagement;
