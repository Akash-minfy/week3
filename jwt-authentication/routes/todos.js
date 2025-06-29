const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const todos = require('../data/todos');

const router = express.Router();

// Protect all routes
router.use(authenticateToken);

// GET /api/todos - get user's todos
router.get('/', (req, res) => {
  const userTodos = todos.filter(todo => todo.userId === req.user.id);
  res.json(userTodos);
});

// POST /api/todos - create new todo
router.post('/', (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: todos.length + 1,
    task,
    userId: req.user.id
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE /api/todos/:id - delete only if owned
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === todoId && todo.userId === req.user.id);

  if (index === -1) return res.status(403).json({ message: 'Unauthorized to delete this to-do.' });

  todos.splice(index, 1);
  res.status(204).send("task has been deleted successfully");
});

module.exports = router;


