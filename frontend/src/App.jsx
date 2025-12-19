import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  const fetchTasks = async () => {
    const res = await fetch(
      `http://localhost:5000/api/tasks?status=${filter}&sort=${sort}`
    );
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter, sort]);

  return (
    <>
      <h1>Student Task Manager</h1>
      <AddTaskForm refresh={fetchTasks} />
      <FilterBar setFilter={setFilter} setSort={setSort} />
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </>
  );
}

export default App;