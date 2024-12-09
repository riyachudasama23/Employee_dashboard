import React, { useState } from "react";
import "../styles/Attendance.css";

function Attendance() {
  const [status, setStatus] = useState("Not Checked In");

  const handleCheckIn = () => setStatus("Checked In");
  const handleCheckOut = () => setStatus("Checked Out");

  return (
    <div className="attendance-page">
      <h1 className="title">Attendance</h1>
      <p>Status: {status}</p>
      <button onClick={handleCheckIn}>Check In</button>
      <button onClick={handleCheckOut}>Check Out</button>
    </div>
  );
}

export default Attendance;
