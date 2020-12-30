import {
  CREATE_TODO,
  GET_TODO,
  GET_TODO_BY_ACCOUNT,
  EDIT_TODO,
  DELETE_TODO,
} from "../types";

const initialState = {
  todos: [],
  newTodo: "",
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos], newTodo: "" };
    case GET_TODO:
      return { ...state, todos: action.payload };
    case GET_TODO_BY_ACCOUNT:
      return { ...state };
    case EDIT_TODO:
      return { ...state };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo, index) => index !== action.payload)],
      };
    default:
      return { ...state };
  }
};

export default TodoReducer;
