import "../styles/Attendance.css";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Attendance = () => {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2024");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const graphData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Attendance (%)",
        data: [90, 85, 88, 92],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#8796c0",
        },
        grid: {
          color: "#34495e",
        },
      },
      x: {
        ticks: {
          color: "#8796c0",
        },
        grid: {
          color: "#34495e",
        },
      },
    },
  };

  return (
    <div className="attendance-page">
      <h1 className="title">Attendance Dashboard</h1>
      <div className="attendance-container">
        {/* Graph Section */}
        <div className="graph-section">
          <div className="graph-header">
            <p className="office-timing">Office Timings: 9:00 AM - 6:00 PM</p>
            <div className="dropdown-container">
              <select
                className="month-dropdown"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
              </select>
              <select
                className="year-dropdown"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>
          <Line data={graphData} options={graphOptions} />
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          {/* Total Days and Attendance Percentage side by side */}
          <div className="cards-row">
            <div className="card small-card">
              <h3>Total Days</h3>
              <p>31</p>
            </div>
            <div className="card small-card">
              <h3>Attendance Percentage</h3>
              <p>90%</p>
            </div>
          </div>

          {/* Present and Absent side by side */}
          <div className="cards-row">
            <div className="card small-card">
              <h3>Present</h3>
              <p>28</p>
            </div>
            <div className="card small-card">
              <h3>Absent</h3>
              <p>3</p>
            </div>
          </div>

          {/* Attendance Calendar and Notifications side by side */}
          <div className="cards-row">
            <div className="card calendar">
              <h3>Attendance Calendar</h3>
              <div className="calendar-grid">
                <div className="calendar-day attended">1</div>
                <div className="calendar-day attended">2</div>
                <div className="calendar-day attended">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day attended">5</div>

                {/* Add more days as needed */}
              </div>
            </div>
            <div className="card notifications">
              <h3>Notifications</h3>
              <ul>
                <li>March 3, 2024: Attendance Summary</li>
                <li>March 4, 2024: Attendance update</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
