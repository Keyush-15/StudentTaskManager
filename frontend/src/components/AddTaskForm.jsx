import { useState } from "react";

const API_URL = "http://localhost:5000/api/tasks";

export default function AddTaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const submitTask = async () => {
    if (!title.trim()) {
      alert("Task title required");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, priority })
    });

    setTitle("");
    refresh();
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        placeholder="Enter task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <select onChange={e => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={submitTask}>Add</button>
    </div>
  );
}
