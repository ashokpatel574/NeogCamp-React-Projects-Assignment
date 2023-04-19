import React, { createContext, useEffect, useState } from "react";

import useFetch from "../utils/Helper";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const { dataList, errorList, isLoading } = useFetch(
    "https://example.com/api/todos"
  );

  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    setTodoData(dataList?.data?.todos);
  }, [dataList]);

  return (
    <TodoContext.Provider value={{ todoData, errorList, isLoading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
