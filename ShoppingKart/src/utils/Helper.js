import { useState, useEffect } from "react";
import { fakeFetch } from "../contants";

function useFetch(url) {
  const [dataList, setDataList] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getProductsData() {
    try {
      setIsLoading(true);
      const productsData = await fakeFetch(url);
      setDataList(productsData.data?.products);
      setIsLoading(false);
    } catch (error) {
      setErrorList(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return { dataList, errorList, isLoading };
}

export default useFetch;
