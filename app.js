const express = require("express");
const moviesRouter = require("./routes/tasks.js");

const app = express();
app.use(express.json());

app.use("/tasks", moviesRouter);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
