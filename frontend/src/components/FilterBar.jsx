export default function FilterBar({ setFilter, setSort }) {
  return (
    <>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <select onChange={e => setSort(e.target.value)}>
        <option value="">No Sort</option>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
      </select>
    </>
  );
}