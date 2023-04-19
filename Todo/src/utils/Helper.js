import { useState, useEffect } from "react";
import { fakeFetch } from "../contants";

function useFetch(url) {
  const [dataList, setDataList] = useState([]);
  const [errorList, setErrorList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);
      const dataList = await fakeFetch(url);
      setDataList(dataList);
      setIsLoading(false);
    } catch (error) {
      setErrorList(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { dataList, errorList, isLoading };
}

export default useFetch;
