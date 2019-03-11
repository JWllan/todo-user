const express = require('express');

const routes = express.Router();

const LoginController = require('./controllers/LoginController');
routes.post('/login', LoginController.login);

const UserController = require('./controllers/UserController');
routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.get);
routes.post('/users', UserController.post);
routes.put('/users/:id', UserController.put);
routes.delete('/users/:id', UserController.delete);

const TodoController = require('./controllers/TodoController');
routes.get('/todos', TodoController.list);
routes.get('/todos/:id', TodoController.get);
routes.post('/todos', TodoController.post);
routes.put('/todos/:id', TodoController.put);
routes.delete('/todos/:id', TodoController.delete);

module.exports = routes;