const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const fetchTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const filterTask = async (req, res) => {
    const status = req.query.status;
    try {
      let tasks;
  
      if (status) {
        if (status === 'incomplete') {
          tasks = await Task.find({ completed: false });
        } else if (status === 'in-progress') {
          tasks = await Task.find({ completed: false, dueDate: { $gte: new Date() } });
        } else if (status === 'completed') {
          tasks = await Task.find({ completed: true });
        } else {
          return res.status(400).json({ error: 'Invalid status value' });
        }
      } else {
        tasks = await Task.find();
      }
  
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createTask, fetchTask, updateTask, deleteTask, filterTask };
