import { useState } from "react";

export default function AddTaskForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
  });

  const submit = async () => {
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    refresh();
  };

  return (
    <>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <select onChange={e => setForm({ ...form, priority: e.target.value })}>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>
      <input type="date" onChange={e => setForm({ ...form, dueDate: e.target.value })} />
      <button onClick={submit}>Add Task</button>
    </>
  );
}