const { Todo } = require("../models");

const CreateTodo = async (request, response) => {
  try {
    const body = request.body;
    const todo = await Todo.create({
      user_id: body.userId,
      title: body.title,
      description: body.description,
    });
    response.send(todo);
  } catch (error) {
    response.status(401).send({ message: "Sorry but there was a problem" });
    console.log("Todo Controller CreateTodo fail ");
    throw error;
  }
};

const GetSingleTodo = async (request, response) => {
  try {
    const oneTodo = await Todo.findByPk(request.params.todo_id);
    response.send(oneTodo);
  } catch (error) {
    console.log("Todo Controller GetSingleTodo fail");
    throw error;
  }
};

const GetTodosByAccount = async (request, response) => {
  try {
    const userTodos = await Todo.findAll({
      where: { user_id: request.params.user_id },
    });
    response.send(userTodos);
  } catch (error) {
    console.log("Todo Controller GetTodoByAccount fail");
    throw error;
  }
};

const EditTodo = async (request, response) => {
  try {
    let todoId = parseInt(request.params.todo_id);
    let todoDetails = request.body;
    let editedTodo = await Todo.update(todoDetails, {
      where: { id: todoId },
      returning: true,
    });
    response.send(editedTodo);
  } catch {
    console.log("Todo Cotroller Edit Todo fail");
  }
};

const DeleteTodo = async (request, response) => {
  try {
    let todoId = parseInt(request.params.todo_id);
    await Todo.destroy({ where: { id: todoId } });
    response.send({
      status: "OK",
      item: request.params.todo_id,
      message: `Deleted post with an id of ${todoId}`,
    });
  } catch (error) {
    console.log("Todo Cotroller DeleteTodo fail");
  }
};

module.exports = {
  CreateTodo,
  GetSingleTodo,
  GetTodosByAccount,
  EditTodo,
  DeleteTodo,
};
