import axios from "axios";
import { useEffect, useState } from "react";
import { SeoTool } from "../elements";

export const Testing = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/todos"
      // );
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        setTodos(res.data);
      });
    };
    fetchApi();
  }, []);

  const handleDelete = (id) => {
    // const id = e.target.value;

    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <SeoTool
        title="Testing"
        keywords="Vinoth App React Redux Dashboard"
        description="Vinoth App React Redux Dashboard"
      />
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
          {todos.map((todo) => (
            <div>
              <h1>{todo.title}</h1>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
