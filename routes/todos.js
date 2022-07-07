const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");

// Previous Step - server.js
// Next Step - controller folder / todos.js

router.get("/", todosController.getTodos);

router.post("/createTodo", todosController.createTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
