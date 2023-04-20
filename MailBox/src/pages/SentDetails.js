import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { EmailContext } from "../App";

const SentDetails = () => {
  const [userSentMail, setUserSentMail] = useState(null);
  const { mailData, errorLists, isLoading } = useContext(EmailContext);
  const { sentId } = useParams();

  const getUserSentMail = function () {
    const mailDetails = mailData?.sentEmails?.find(
      (mail) => mail.id === Number(sentId)
    );

    setUserSentMail(mailDetails);
  };

  useEffect(() => {
    getUserSentMail();
  }, []);

  return (
    <article className="sentMail_Details-container">
      {isLoading ? (
        <h2>Loading Mail....</h2>
      ) : errorLists ? (
        <h3>
          {errorLists?.status} {errorLists?.message}
        </h3>
      ) : (
        <div className="sentMail_container">
          <h2>Sent Mails</h2>
          <div>
            <p>To: {userSentMail?.to}</p>
            <p>Subject: {userSentMail?.subject}</p>
            <p>Message: {userSentMail?.message}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default SentDetails;
