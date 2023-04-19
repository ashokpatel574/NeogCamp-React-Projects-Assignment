import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const TodoDone = () => {
  const { todoData, errorList, isLoading } = useContext(TodoContext);

  const doneTodoData = todoData?.filter(({ isCompleted }) => isCompleted);

  return (
    <article>
      <ul>
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
                  <Link to={`/product/${id}`}>Expand Todo</Link>
                </p>
                <div className="todo_btn-container">
                  <button
                    onClick={() => todoBtnHandler(productItem)}
                    className="btn btn_todo"
                  >
                    Mark as Done
                  </button>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </article>
  );
};

export default TodoDone;
