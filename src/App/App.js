import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext/TodoContext";
import "./App.css";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Curso React", completed: false },
//   { text: "Hacer almuerzo", completed: false },
// ];


function App() {

  return (
   <TodoProvider>
      <AppUI />
   </TodoProvider>
  );
}

export default App;
