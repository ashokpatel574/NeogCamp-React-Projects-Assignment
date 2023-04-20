import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { EmailContext } from "../App";

const InboxTab = () => {
  const {
    mailData,
    emailStatsData,
    markReadBtnHandler,
    errorLists,
    isLoading,
  } = useContext(EmailContext);

  return (
    <article className="mailBox_container">
      {isLoading ? (
        <h2>Loading Mails....</h2>
      ) : errorLists ? (
        <h3>
          {errorLists?.status} {errorLists?.message}
        </h3>
      ) : (
        <div className="inbox_container">
          <h2>Inbox Mails</h2>
          <p className="unreadMailCount">
            <strong> Unread Mails:</strong> {emailStatsData?.unReadCount}
          </p>
          <p className="readMailCount">
            <strong> Read Mails:</strong> {emailStatsData?.readCount}
          </p>

          <ul>
            {mailData?.emails?.map((inboxList) => (
              <li key={inboxList.id}>
                <p>
                  <Link to={`/inbox/${inboxList.id}`}>{inboxList.subject}</Link>
                  {!inboxList.read && (
                    <button
                      className="btn btn-markRead"
                      onClick={() => markReadBtnHandler(inboxList)}
                    >
                      Mark As Read
                    </button>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default InboxTab;
