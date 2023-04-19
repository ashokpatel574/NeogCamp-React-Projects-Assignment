import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "../context/TodoContextProvider";

const TodoOpen = () => {
  const { userTodoList, errorList, isLoading } = useContext(TodoContext);

  const openTodoData = userTodoList?.filter(({ isCompleted }) => !isCompleted);

  return (
    <article>
      <h2 className="total_todos-count">
        Total Open todos: {openTodoData?.length > 0 ? openTodoData.length : 0}
      </h2>
      <ul className="todo_list-container">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          openTodoData?.length > 0 &&
          openTodoData?.map((productItem) => {
            const { id, title, description, isCompleted } = productItem;
            return (
              <li key={id.toString()}>
                <h3> {title}</h3>
                <p> {description}</p>
                <p>status: {isCompleted ? "Done" : "Not Done"}</p>
                <p>
                  <Link to={`/todo/${id}`}>Expand Todo</Link>
                </p>
              </li>
            );
          })
        )}
      </ul>
    </article>
  );
};

export default TodoOpen;
