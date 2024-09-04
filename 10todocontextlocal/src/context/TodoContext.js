import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});   

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
