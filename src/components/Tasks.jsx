import React, { useState } from "react";
import "../styles/Tasks.css";

function Tasks() {
  const [tasks] = useState([
    {
      name: "Fix UI bugs",
      assignedTime: "2024-12-05 10:00 AM",
      deadline: "2024-12-10 5:00 PM",
      status: "In Progress",
      description: "Fix the UI bugs related to the homepage.",
      priority: "High",
      progress: 60, // Progress in percentage
    },
    {
      name: "Develop new feature",
      assignedTime: "2024-12-01 9:00 AM",
      deadline: "2024-12-15 11:00 PM",
      status: "Not Started",
      description: "Implement the search functionality in the app.",
      priority: "Medium",
      progress: 10,
    },
    {
      name: "Write documentation",
      assignedTime: "2024-12-03 2:00 PM",
      deadline: "2024-12-12 3:00 PM",
      status: "Completed",
      description: "Write the documentation for the new API.",
      priority: "Low",
      progress: 100,
    },
  ]);

  return (
    <div className="tasks-page">
      <h2 className="tasks-heading">Assigned Tasks</h2>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned Time</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr className="task-row" key={index}>
              <td>{task.name}</td>
              <td>
                <div className="time-info">
                  <p>{task.assignedTime.split(" ")[0]}</p>
                  <p>{task.assignedTime.split(" ")[1]}</p>
                </div>
              </td>
              <td>
                <div className="time-info">
                  <p>{task.deadline.split(" ")[0]}</p>
                  <p>{task.deadline.split(" ")[1]}</p>
                </div>
              </td>
              <td>
                <mark
                  className={`task-status ${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.status}
                </mark>
              </td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
              <td>
                <div className="task-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                  <span>{task.progress}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
