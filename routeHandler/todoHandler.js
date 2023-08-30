const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// GET ALL THE TODOS
router.get("/", async (req, res) => {});

// GET A TODO by ID
router.get("/:id", async (req, res) => {});

// POST A TODO
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json({
      message: "Todo was inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// POST MULTIPLE TODO
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Todos were inserted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "An error occurred while inserting todos",
    });
  }
});

// PUT TODO
router.put("/:id", async (req, res) => {
     
});

// DELETE TODO
router.delete("/:id", async (req, res) => {});

module.exports = router;
