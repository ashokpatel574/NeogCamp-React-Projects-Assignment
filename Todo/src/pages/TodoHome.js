import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "../context/TodoContextProvider";

const TodoHome = () => {
  const { userTodoList, todoBtnHandler, errorList, isLoading } =
    useContext(TodoContext);

  return (
    <article>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        <ul className="todo_list-container">
          <h2 className="total_todos-count">
            Total todos: {userTodoList?.length > 0 ? userTodoList.length : 0}
          </h2>

          {userTodoList?.length > 0 &&
            userTodoList?.map((todoList) => {
              const { id, title, description, isCompleted } = todoList;
              return (
                <li key={id.toString()}>
                  <h3 style={{ textDecoration: isCompleted && "line-through" }}>
                    {title}
                  </h3>
                  <p style={{ textDecoration: isCompleted && "line-through" }}>
                    {description}
                  </p>

                  <p>
                    <Link to={`/todo/${id}`}>Expand Todo</Link>
                  </p>
                  <div className="todo_btn-container">
                    <button
                      value={title}
                      onClick={() => todoBtnHandler(todoList)}
                      className="btn btn_todo"
                    >
                      {isCompleted ? "Mark as Undone" : "Mark as Done"}
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </article>
  );
};

export default TodoHome;
