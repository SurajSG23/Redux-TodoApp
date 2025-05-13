import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        {todos.length === 0 ? "" : "Todos: "}   
      </h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-4 py-2 mb-2 rounded hover:bg-gray-100"
          >
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
