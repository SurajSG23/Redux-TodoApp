import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
