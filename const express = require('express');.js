const express = require('express');
const router = express.Router();
let todos = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });
  const todo = { id: nextId++, task, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

module.exports = router;
