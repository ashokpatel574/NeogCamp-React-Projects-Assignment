import React, { useContext } from "react";
import { CartContext } from "../App";

const WishListCard = ({ wishListItem }) => {
  const { cartBtnHandler } = useContext(CartContext);
  const { removeFromCartBtnHandler } = useContext(CartContext);

  const { id, name, description, price, quantity, category, brand } =
    wishListItem;

  return (
    <li key={id} className="cartDetails_container">
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <div className="wishListDeatils_btn-container">
        <button
          className="btn btn_cart"
          onClick={() => cartBtnHandler(wishListItem)}
        >
          Add to Cart
        </button>
        <button
          className="btn btn_removeItem"
          onClick={() => removeFromCartBtnHandler(wishListItem)}
        >
          Remove Item
        </button>
      </div>
    </li>
  );
};

export default WishListCard;
