import React from "react";
import "../styles/Tasks.css";
import "../data/TaskData";
import TaskData from "../data/TaskData";

function Tasks() {
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
          {TaskData.map((task, index) => (
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
