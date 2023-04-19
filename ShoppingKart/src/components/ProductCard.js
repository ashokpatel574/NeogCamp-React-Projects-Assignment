import React from "react";

const ProductCard = ({ productInfo }) => {
  const { name, description, price, quantity, category, brand } = productInfo;

  return (
    <li className="productDetails_container">
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
    </li>
  );
};

export default ProductCard;
