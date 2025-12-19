import { useState } from "react";

const API_URL = "http://localhost:5000/api/tasks";

export default function EditTaskModal({ task, close, refresh }) {
  const [title, setTitle] = useState(task.title);

  const save = async () => {
    await fetch(`${API_URL}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    refresh();
    close();
  };

  return (
    <div style={{ background: "#eee", padding: "10px", marginTop: "10px" }}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={save}>Save</button>
      <button onClick={close}>Cancel</button>
    </div>
  );
}
