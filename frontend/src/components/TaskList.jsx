import TaskCard from "./TaskCard";

export default function TaskList({ tasks, refresh }) {
  return tasks.map(task => (
    <TaskCard key={task._id} task={task} refresh={refresh} />
  ));
}