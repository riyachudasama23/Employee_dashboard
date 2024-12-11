import React, { useState } from "react";
import "../styles/Leave.css";

// Mock data for leave history
const leaveHistoryData = [
  { date: "2024-11-01", type: "Sick Leave", status: "Approved" },
  { date: "2024-10-15", type: "Casual Leave", status: "Pending" },
  { date: "2024-09-20", type: "Earned Leave", status: "Rejected" },
];

const LeaveManagement = () => {
  const [newLeave, setNewLeave] = useState("");
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState({
    sickLeave: 10,
    casualLeave: 5,
    earnedLeave: 8,
  });

  const handleApplyLeave = () => {
    const newRequest = {
      date: new Date().toLocaleDateString(),
      reason: newLeave,
      status: "Pending",
    };
    setLeaveRequests([...leaveRequests, newRequest]);
    setNewLeave("");
  };

  return (
    <div className="leave-page">
      <h1 className="title">Leave Management</h1>

      <div className="leave-container">
        {/* Leave Balance Overview */}
        <div className="leave-balance">
          <h3>Leave Balance Overview</h3>
          <div className="leave-card">
            <p className="card-title">Sick Leave</p>
            <p>{leaveBalance.sickLeave} days</p>
          </div>
          <div className="leave-card">
            <p className="card-title">Casual Leave</p>
            <p>{leaveBalance.casualLeave} days</p>
          </div>
          <div className="leave-card">
            <p className="card-title">Earned Leave</p>
            <p>{leaveBalance.earnedLeave} days</p>
          </div>
        </div>

        {/* Leave Requests */}
        <div className="leave-requests">
          <h3>Leave Requests</h3>
          <input
            type="text"
            placeholder="Enter leave reason"
            value={newLeave}
            onChange={(e) => setNewLeave(e.target.value)}
          />
          <button onClick={handleApplyLeave} className="apply-btn">
            Apply Leave
          </button>

          <div className="requests-list">
            {leaveRequests.map((request, index) => (
              <div key={index} className="leave-request">
                <p>
                  {request.date} - {request.reason}
                </p>
                <p>Status: {request.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leave History */}
        <div className="leave-history">
          <h3>Leave History</h3>
          <div className="history-list">
            {leaveHistoryData.map((leave, index) => (
              <div key={index} className="leave-history-item">
                <p>
                  {leave.date} - {leave.type}
                </p>
                <p>Status: {leave.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leave Approval Status */}
        <div className="leave-approval-status">
          <h3>Leave Approval Status</h3>
          <p>
            {leaveRequests.length > 0
              ? "Pending Approval"
              : "No Pending Leaves"}
          </p>
        </div>

        {/* Office Leave Calendar */}
        <div className="leave-calendar">
          <h3>Office Leave Calendar</h3>
          {/* This is a placeholder, you can integrate a calendar component like 'react-calendar' */}
          <div className="calendar-placeholder">
            <p>Coming soon: Calendar integration with leave dates!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
