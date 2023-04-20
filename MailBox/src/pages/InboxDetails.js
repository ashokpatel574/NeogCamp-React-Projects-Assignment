import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { EmailContext } from "../App";

const InboxDetails = () => {
  const [userInboxMail, setUserInboxMail] = useState(null);
  const { mailData, errorLists, isLoading } = useContext(EmailContext);
  const { inboxId } = useParams();

  const getUserInboxMail = function () {
    const mailDetails = mailData?.emails?.find(
      (mail) => mail.id === Number(inboxId)
    );

    setUserInboxMail(mailDetails);
  };

  useEffect(() => {
    getUserInboxMail();
  }, []);

  return (
    <article className="inboxDetails_container">
      {isLoading ? (
        <h2>Loading Mail....</h2>
      ) : errorLists ? (
        <h3>
          {errorLists?.status} {errorLists?.message}
        </h3>
      ) : (
        <div className="inbox_container">
          <h2>Inbox Mails</h2>
          <div>
            <p>From: {userInboxMail?.sender}</p>
            <p>Subject: {userInboxMail?.subject}</p>
            <p>Message: {userInboxMail?.message}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default InboxDetails;
