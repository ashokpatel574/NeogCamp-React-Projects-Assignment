import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { EmailContext } from "../App";

const SentTab = () => {
  const { mailData, errorLists, isLoading } = useContext(EmailContext);

  return (
    <article className="mailBox_container">
      {isLoading ? (
        <h2>Loading Mails....</h2>
      ) : errorLists ? (
        <h3>
          {errorLists?.status} {errorLists?.message}
        </h3>
      ) : (
        <div className="sentEmails_container">
          <h2>Sent Mails</h2>
          <ul>
            {mailData?.sentEmails?.map((sentMails) => (
              <li key={sentMails.id}>
                <p>
                  <span>To: {sentMails.to}</span>
                  <span>
                    <Link to={`/sent/${sentMails.id}`}>
                      {sentMails.subject}
                    </Link>
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default SentTab;
