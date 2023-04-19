import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../utils/Helper";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const { dataList, errorList, isLoading } = useFetch(
    "https://example.com/api/products"
  );

  return (
    <ProductsContext.Provider
      value={{
        dataList,
        errorList,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
