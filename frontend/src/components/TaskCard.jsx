export default function TaskCard({ task, refresh }) {
  const toggle = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    });
    refresh();
  };

  const remove = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={toggle} />
      {task.title} ({task.priority})
      <button onClick={remove}>Delete</button>
    </div>
  );
}