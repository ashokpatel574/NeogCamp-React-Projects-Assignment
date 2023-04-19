import React, { createContext, useEffect, useState } from "react";

import useFetch from "../utils/Helper";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const { dataList, errorList, isLoading } = useFetch(
    "https://example.com/api/todos"
  );

  const [todoData, setTodoData] = useState([]);
  const [userTodoList, setUserTodoList] = useState([]);

  useEffect(() => {
    setTodoData(dataList?.data?.todos);
    setUserTodoList(dataList?.data?.todos);
  }, [dataList]);

  function todoBtnHandler(todoList) {
    const updatedUserTodoList = [...userTodoList].map((data) => {
      return data.title === todoList.title
        ? { ...data, isCompleted: !todoList.isCompleted }
        : data;
    });
    setUserTodoList(updatedUserTodoList);
  }

  return (
    <TodoContext.Provider
      value={{ todoData, userTodoList, todoBtnHandler, errorList, isLoading }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
