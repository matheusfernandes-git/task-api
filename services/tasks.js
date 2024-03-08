const fs = require("fs");

const getAllTasks = () => {
  return JSON.parse(fs.readFileSync("tasks.json"));
};

const getTaskByid = (id) => {
  const tasks = JSON.parse(fs.readFileSync("tasks.json"));
  const filteredTasks = tasks.filter((task) => task.id === Number(id))[0];
  return filteredTasks;
};

const insertTask = (newTask) => {
  const tasks = JSON.parse(fs.readFileSync("tasks.json"));
  const newTasksList = [...tasks, newTask];
  fs.writeFileSync("tasks.json", JSON.stringify(newTasksList));
};

const editTasks = (modifications, id) => {
  let currentTasks = JSON.parse(fs.readFileSync("tasks.json"));
  const modifiedIndex = currentTasks.findIndex(
    (task) => task.id === Number(id)
  );
  const changedContent = { ...currentTasks[modifiedIndex], ...modifications };

  currentTasks[modifiedIndex] = changedContent;
  fs.writeFileSync("tasks.json", JSON.stringify(currentTasks));
};

const deleteTask = (id) => {
  let currentTasks = JSON.parse(fs.readFileSync("tasks.json"));
  const filteredTask = currentTasks.filter((task) => task.id !== Number(id));
  currentTasks = filteredTask;
  fs.writeFileSync("tasks.json", JSON.stringify(currentTasks));
};

module.exports = {
  getAllTasks,
  getTaskByid,
  insertTask,
  editTasks,
  deleteTask,
};
