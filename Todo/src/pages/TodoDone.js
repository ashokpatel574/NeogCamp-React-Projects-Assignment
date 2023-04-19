import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "../context/TodoContextProvider";

const TodoDone = () => {
  const { userTodoList, errorList, isLoading } = useContext(TodoContext);

  const doneTodoData = userTodoList?.filter(({ isCompleted }) => isCompleted);

  return (
    <article>
      <h2 className="total_todos-count">
        Total Done todos: {doneTodoData?.length > 0 ? doneTodoData.length : 0}
      </h2>
      <ul className="todo_list-container">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          doneTodoData?.length > 0 &&
          doneTodoData?.map((productItem) => {
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

export default TodoDone;
