import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const API_URL = "http://localhost:5000/api/tasks";

export default function TaskItem({ task, refresh }) {
  const [edit, setEdit] = useState(false);

  const toggleComplete = async () => {
    await fetch(`${API_URL}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });
    refresh();
  };

  const deleteTask = async () => {
    await fetch(`${API_URL}/${task._id}`, { method: "DELETE" });
    refresh();
  };

  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span style={{ marginLeft: "8px" }}>{task.title}</span>

      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={deleteTask}>Delete</button>

      {edit && (
        <EditTaskModal task={task} close={() => setEdit(false)} refresh={refresh} />
      )}
    </div>
  );
}
