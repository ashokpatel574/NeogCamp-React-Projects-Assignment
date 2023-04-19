import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../App";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { productId } = useParams();
  const { dataList } = useContext(ProductsContext);

  function getproductInfo(dataList, productId) {
    return dataList.find((data) => data.id === Number(productId));
  }
  const productInfo = getproductInfo(dataList, productId);

  if (productInfo) {
    return (
      <article>
        <ProductCard productInfo={productInfo} />
      </article>
    );
  }
};

export default ProductDetails;
