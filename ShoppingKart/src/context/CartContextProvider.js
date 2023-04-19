import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function cartBtnHandler(productItem) {
    setCart((cart) => [...cart, productItem]);
  }

  return (
    <CartContext.Provider value={{ cart, cartBtnHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
