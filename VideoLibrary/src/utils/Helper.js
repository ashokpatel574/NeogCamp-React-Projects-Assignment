import { useEffect, useState } from "react";
import { fakeFetch } from "../contants";

export const useFetch = (url) => {
  const [dataLists, setDataLists] = useState(null);
  const [errorLists, setErrorLists] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getBookData() {
    try {
      const data = await fakeFetch(url);
      setIsLoading(true);

      if (data?.status === 200) {
        setDataLists(data);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorLists(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return { dataLists, errorLists, isLoading };
};
