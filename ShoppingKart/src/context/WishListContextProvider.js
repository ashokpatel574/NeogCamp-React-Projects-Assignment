import React, { createContext, useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  function wishListBtnHandler(productItem) {
    setWishList((wishList) => [...wishList, productItem]);
  }

  return (
    <WishListContext.Provider value={{ wishList, wishListBtnHandler }}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
