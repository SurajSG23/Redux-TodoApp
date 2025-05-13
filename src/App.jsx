import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
