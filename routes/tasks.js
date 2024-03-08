const { Router } = require("express");
const {
  getTasks,
  getTask,
  createTask,
  putTasks,
  deleteTasks,
} = require("../controllers/tasks.js");

const router = Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.put("/:id", putTasks);

router.delete("/:id", deleteTasks);

module.exports = router;
