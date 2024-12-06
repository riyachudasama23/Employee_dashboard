import React, { useState } from "react";

function LeaveManagement() {
  const [leaves, setLeaves] = useState([]);
  const [newLeave, setNewLeave] = useState("");

  const handleApplyLeave = () => {
    setLeaves([...leaves, newLeave]);
    setNewLeave("");
  };

  return (
    <div>
      <h2>Leave Management</h2>
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
