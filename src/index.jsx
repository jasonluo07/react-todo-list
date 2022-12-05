import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", isCompleted: true },
  { id: "todo-1", name: "Sleep", isCompleted: false },
  { id: "todo-2", name: "Repeat", isCompleted: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
