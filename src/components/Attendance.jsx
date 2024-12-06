import React, { useState } from "react";

function Attendance() {
  const [status, setStatus] = useState("Not Checked In");

  const handleCheckIn = () => setStatus("Checked In");
  const handleCheckOut = () => setStatus("Checked Out");

  return (
    <div>
      <h2>Attendance</h2>
      <p>Status: {status}</p>
      <button onClick={handleCheckIn}>Check In</button>
      <button onClick={handleCheckOut}>Check Out</button>
    </div>
  );
}

export default Attendance;
