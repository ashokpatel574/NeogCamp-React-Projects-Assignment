import React, { createContext, useEffect, useState } from "react";
import useFetch, { getMailStats } from "../utils/Helper";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [mailData, setMailData] = useState(null);

  const { dataLists, errorLists, isLoading } = useFetch(
    "https://example.com/api/allemails"
  );

  const emailStatsData = getMailStats(mailData?.emails);

  useEffect(() => {
    setMailData(dataLists?.data);
  }, [dataLists]);

  function markReadBtnHandler(inboxListData) {
    const updatedEmailData = mailData?.emails?.map((dataItem) =>
      dataItem.id === inboxListData.id
        ? { ...dataItem, read: !dataItem.read }
        : dataItem
    );

    const updatedMailData = {
      emails: [...updatedEmailData],
      sentEmails: [mailData?.sentEmails],
    };

    setMailData(updatedMailData);
  }

  return (
    <EmailContext.Provider
      value={{
        mailData,
        emailStatsData,
        markReadBtnHandler,
        errorLists,
        isLoading,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
