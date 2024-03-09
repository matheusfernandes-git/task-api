<h1>Tasks API NodeJs</h1>
<p>This project is a Node.js tasks API where users can perform CRUD operations on tasks.</p>

<h2>Tecnologies used:</h2>
<table>
  <tr>
    <td>NodeJs</td>
    <td>Express</td>
   </tr>
   </table>

## Banco de dados:
This project uses a JSON file as a database to store tasks. The file `tasks.json` contains the task data, including task id, task description, the completion status, the category and priority.

 ## Installation and Usage:

1. Clone the repository:
cd your-repository
npm install
git clone https://github.com/your-username/your-repository.git

3. Start the server:
npm start

4. Access the API at http://localhost:8000 in your preferred API testing tool.
   
## API Endpoints:

### GET /tasks
- Description: Get all tasks.
- Example: `GET http://localhost:8000/tasks`

### GET /tasks/:id
- Description: Get a specific task by ID.
- Example: `GET http://localhost:8000/tasks/1`

### POST /tasks
- Description: Create a new task.
- Example: 
  ```json
  POST http://localhost:8000/tasks
  Body: {
    "task": "Do something",
    "done": false,
    "category": "Work",
    "priority": "High"
  }

### PUT /tasks/:id
- Description: Edit a specific task by ID.

### DELETE /tasks/:id
- Description: Delete a task by ID.

  
So, if you're interested, check it out! 🙂
  

