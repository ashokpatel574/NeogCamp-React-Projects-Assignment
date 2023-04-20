import React, { useEffect, useState } from "react";
import { fakeFetch } from "../contants";

export const getMailStats = (mails) => {
  return mails?.reduce(
    (acc, curr) =>
      curr.read
        ? { ...acc, readCount: acc["readCount"] + 1 }
        : { ...acc, unReadCount: acc["unReadCount"] + 1 },
    {
      readCount: 0,
      unReadCount: 0,
    }
  );
};

const useFetch = (url) => {
  const [dataLists, setDataLists] = useState(null);
  const [errorLists, setErrorLists] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getDataDetails() {
    try {
      setIsLoading(true);
      const dataDetails = await fakeFetch(url);
      setDataLists(dataDetails);
      setIsLoading(false);
    } catch (error) {
      setErrorLists(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDataDetails();
  }, []);

  return { dataLists, errorLists, isLoading };
};

export default useFetch;
