import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (id) => {
    const newTodoText = prompt("Enter the new todo text:");
    if (newTodoText) {
      dispatch(updateTodo({ id, text: newTodoText }));
    }
  };


  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            > ❌
            </button>
            <button
              onClick={() => handleUpdateTodo(todo.id)}
              className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            > ✏️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
