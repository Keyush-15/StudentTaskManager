const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE task
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// READ all tasks
router.get("/", async (req, res) => {
  const { status, sort } = req.query;

  let filter = {};
  if (status === "completed") filter.completed = true;
  if (status === "pending") filter.completed = false;

  let sortOption = {};
  if (sort === "priority") sortOption.priority = 1;
  if (sort === "dueDate") sortOption.dueDate = 1;

  const tasks = await Task.find(filter).sort(sortOption);
  res.json(tasks);
});

// UPDATE task
router.put("/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;