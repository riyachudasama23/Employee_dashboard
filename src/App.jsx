import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import Attendance from "./components/Attendance";
import LeaveManagement from "./components/LeaveManagement";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div style={{ width: "100%" }}>
          {/* Header spans full width */}
          <Header />

          {/* Main content area below header */}
          <div style={{ marginTop: "60px", padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/leave-management" element={<LeaveManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
