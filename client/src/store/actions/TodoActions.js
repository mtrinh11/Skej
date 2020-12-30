import {
  CREATE_TODO,
  GET_TODO,
  GET_TODO_BY_ACCOUNT,
  EDIT_TODO,
  DELETE_TODO,
} from "../types";
import {
  __CreateTodo,
  __GetSingleTodo,
  __GetTodosByAccount,
  __EditTodo,
  __DeleteTodo,
} from "../../services/TodoServices";

export const createTodo = (data) => async (dispatch) => {
  try {
    let res = await __CreateTodo(data);
    dispatch({
      type: CREATE_TODO,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const getTodo = (todoId) => async (dispatch) => {
  try {
    let res = await __GetSingleTodo(todoId);
    dispatch({
      type: GET_TODO,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const getTodoByAcc = (userId) => async (dispatch) => {
  try {
    let res = await __GetTodosByAccount(userId);
    dispatch({
      type: GET_TODO_BY_ACCOUNT,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const editTodo = (todoId) => async (dispatch) => {
  try {
    let res = await __EditTodo(todoId);
    dispatch({
      type: EDIT_TODO,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    let res = await __DeleteTodo(todoId);
    dispatch({
      type: DELETE_TODO,
      payload: res,
    });
  } catch (error) {
    throw error;
  }
};
