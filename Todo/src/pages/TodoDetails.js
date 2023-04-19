import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TodoContext } from "../context/TodoContextProvider";

const TodoDetails = () => {
  const [todoDetail, setTodoDetails] = useState();
  const { todoId } = useParams();
  const { todoData } = useContext(TodoContext);

  const getTodoDetails = function () {
    const todoDetails = todoData?.find((item) => item.id === Number(todoId));
    setTodoDetails(todoDetails);
  };

  useEffect(() => {
    getTodoDetails();
  }, []);

  if (todoDetail) {
    const { title, description, isCompleted } = todoDetail;

    return (
      <div className="todo_details-container">
        <h3> {title}</h3>
        <p> {description}</p>
        <p>status: {isCompleted ? "Done" : "Not Done"}</p>
      </div>
    );
  }
};

export default TodoDetails;
