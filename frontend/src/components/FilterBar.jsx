export default function FilterBar({ setFilter }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}
