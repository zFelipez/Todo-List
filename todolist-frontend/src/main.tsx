import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TodoListProvider } from "./context/TodoList";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoListProvider>


         <App />
      </TodoListProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
