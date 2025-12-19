import TaskItem from "./TaskItems";

export default function TaskList({ tasks, refresh }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Click “Add” to create one.</p>;
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} refresh={refresh} />
      ))}
    </>
  );
}
