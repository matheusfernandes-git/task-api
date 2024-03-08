const {
  getAllTasks,
  getTaskByid,
  insertTask,
  editTasks,
  deleteTask,
} = require("../services/tasks");

const getTasks = (req, res) => {
  try {
    const tasks = getAllTasks();
    res.send(tasks);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

const getTask = (req, res) => {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const task = getTaskByid(id);
      res.send(task);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

const createTask = (req, res) => {
  try {
    const newTask = req.body;
    if (newTask.task && newTask.category) {
      insertTask(newTask);
      res.status(201);
      res.send("Livro inserido com sucesso");
    } else {
      res.status(422);
      res.send(
        "Todos os campos: task, done, priority e category são obrigatórios"
      );
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

const putTasks = (req, res) => {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;
      editTasks(body, id);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

const deleteTasks = (req, res) => {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deleteTask(id);
      res.send("Task deletada com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  putTasks,
  deleteTasks,
};
