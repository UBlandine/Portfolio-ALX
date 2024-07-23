const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { authMiddleware } = require("../middlewares/AuthValidation");

const router = express.Router();

router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.get("/tasks/:taskId", authMiddleware, getTaskById);
router.put("/tasks/:taskId", authMiddleware, updateTask);
router.delete("/tasks/:taskId", authMiddleware, deleteTask);

module.exports = router;
