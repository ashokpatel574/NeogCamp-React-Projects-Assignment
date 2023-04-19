import React, { useContext } from "react";
import { CartContext, WishListContext } from "../App";

const CartCard = ({ cartItem }) => {
  const { wishListBtnHandler } = useContext(WishListContext);
  const { removeFromCartBtnHandler } = useContext(CartContext);

  const { id, name, description, price, quantity, category, brand } = cartItem;

  return (
    <li key={id} className="cartDetails_container">
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <div className="cartDeatils_btn-container">
        <button
          className="btn btn_wishList"
          onClick={() => wishListBtnHandler(cartItem)}
        >
          Save for Later
        </button>
        <button
          className="btn btn_removeItem"
          onClick={() => removeFromCartBtnHandler(cartItem)}
        >
          Remove Item
        </button>
      </div>
    </li>
  );
};

export default CartCard;
