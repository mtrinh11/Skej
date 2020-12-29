const Router = require("express").Router();
const controller = require("../controllers/TodosController")

Router.post('/create', controller.CreateTodo)

Router.get('/:todo_id', controller.GetSingleTodo)
Router.get('/all/todos', controller.GetTodosByAccount)

Router.put('/edit/:todo_id', controller.EditTodo)

Router.delete('/delete/:todo_id', controller.DeleteTodo)

module.exports = Router