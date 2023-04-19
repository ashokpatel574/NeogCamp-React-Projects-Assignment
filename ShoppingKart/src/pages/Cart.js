import React, { useContext } from "react";
import { CartContext } from "../App";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <main>
      {!cart.length ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          <h2>Cart Items : {cart.length > 0 && cart.length}</h2>
          <ul>
            {cart?.map((cartItem) => (
              <CartCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Cart;
