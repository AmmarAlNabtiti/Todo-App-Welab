Todos API Endpoints
This document outlines the available endpoints for interacting with the Todos API using JSON-server. These endpoints allow clients to create, retrieve, update, and delete todo items.

Base URL
All URLs referenced in the documentation have the base path http://localhost:3000/todos.

Endpoints
List All Todos
Method: GET
Access: PUBLIC
URL: /
Description: Retrieves a list of all todo items.
Filter Todos by Completion Status
Method: GET (with filters)
Access: PUBLIC
URL: /?isCompleted=0 or /?isCompleted=1
Description: Retrieves a list of todos filtered by their completion status. Use isCompleted=0 to fetch todos that are not completed and isCompleted=1 for those that are completed.
Create a New Todo
Method: POST
Access: PUBLIC
URL: /
Description: Creates a new todo item. Clients should send a JSON payload in the request body with the todo item's details.
Update an Existing Todo
Method: PATCH
Access: PUBLIC
URL: /:todoID
Description: Updates an existing todo item identified by todoID. Clients should send a JSON payload in the request body with the updated details for the todo item.
Delete a Todo
Method: DELETE
Access: PUBLIC
URL: /:todoID
Description: Deletes an existing todo item identified by todoID.
Usage
Clients can interact with the API using any HTTP client by making requests to the defined endpoints according to the documented access levels and methods.

For creating, updating, or deleting todo items, ensure that the request body is formatted as JSON and the appropriate HTTP headers are set (e.g., Content-Type: application/json).

Examples
Fetching all todos:

bash
Copy code
GET http://localhost:3000/todos
Filtering todos by completion status (e.g., fetching incomplete todos):

bash
Copy code
GET http://localhost:3000/todos?isCompleted=0
Creating a new todo:

bash
Copy code
POST http://localhost:3000/todos
Body: {"task": "Buy groceries", "isCompleted": false}
Updating an existing todo (e.g., marking a todo as completed):

bash
Copy code
PATCH http://localhost:3000/todos/:todoID
Body: {"isCompleted": true}
Deleting a todo:

bash
Copy code
DELETE http://localhost:3000/todos/:todoID
