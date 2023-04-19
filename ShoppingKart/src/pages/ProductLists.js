import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext, ProductsContext, WishListContext } from "../App";

const ProductLists = () => {
  const { dataList, errorList, isLoading } = useContext(ProductsContext);
  const { cartBtnHandler } = useContext(CartContext);
  const { wishListBtnHandler } = useContext(WishListContext);

  return (
    <main className="productsList_container">
      <ul>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : errorList ? (
          <p>
            {errorList.status} {errorList.message}
          </p>
        ) : (
          dataList.length > 0 &&
          dataList?.map((productItem) => {
            const { id, name, description, price } = productItem;
            return (
              <li key={id.toString()}>
                <h3>Name: {name}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>
                  <Link to={`/product/${id}`}>Visit Item</Link>
                </p>
                <div className="productsList_btn-container">
                  <button
                    onClick={() => cartBtnHandler(productItem)}
                    className="btn btn_cart"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => wishListBtnHandler(productItem)}
                    className="btn btn_wishList"
                  >
                    Add To WishList
                  </button>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
};

export default ProductLists;
