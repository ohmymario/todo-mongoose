const Todo = require("../models/Todo");

// Previous Step - Router / todos.js
// Next Step - Either View or DB

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({ completed: false });
      res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      const todo = req.body.todoItem;
      await Todo.create({ todo, completed: false });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    const { ID } = req.body;
    try {
      await Todo.findOneAndUpdate({ _id: ID }, { completed: true });
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    const { ID } = req.body;
    try {
      await Todo.findOneAndUpdate({ _id: ID }, { completed: false });
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    const { ID } = req.body;
    try {
      await Todo.findOneAndDelete({ _id: ID });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
