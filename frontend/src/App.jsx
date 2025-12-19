import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const API_URL = "http://localhost:5000/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    let url = API_URL;
    if (filter === "completed") url += "?status=completed";
    if (filter === "pending") url += "?status=pending";

    const res = await fetch(url);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <div className="app-container">
      <h1>Student Task Manager</h1>

      <AddTaskForm refresh={fetchTasks} />
      <FilterBar setFilter={setFilter} />
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  );
}
