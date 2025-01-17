import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Todo } from "./components/Todo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
