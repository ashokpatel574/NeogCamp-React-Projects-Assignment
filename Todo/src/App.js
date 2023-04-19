/*
Create a Todo App in React with different routes for:

Summary of Done and Open Todos page - fakeFetch has been provided. List all the Todos on this page.
Done Todos page
Open Todos page
Page for Individual Todos item to show details of each Todo.

*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import Header from "./components/Header";

/* Context */

import TodoContextProvider from "./context/TodoContextProvider";

/* Pages */

import TodoHome from "./pages/TodoHome";
import TodoOpen from "./pages/TodoOpen";
import TodoDone from "./pages/TodoDone";
import TodoDetails from "./pages/TodoDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TodoContextProvider>
          <Header />
          <main className="todo_container">
            <Routes>
              <Route path="/" element={<TodoHome />} />
              <Route path="/todo/:todoId" element={<TodoDetails />} />
              <Route path="/todoDone" element={<TodoDone />} />
              <Route path="/todoOpen" element={<TodoOpen />} />
            </Routes>
          </main>
        </TodoContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
