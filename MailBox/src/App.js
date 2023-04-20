/*
Create an Email app in React with different routes:

Landing Page - It shows a heading and two routes - Inbox and Sent
Inbox Page - It should have the list of all received emails.
Individual Email Page - It should show content of that particular opened email.
Show two counters on the top of Inbox page for number for Read emails and Unread emails. Have a button for each email in the inbox email listing page for emails which have read as false. If you mark an email as read, the counter value for read and unread emails should change. Do this using context.
Sent Page - It should have the list of all sent emails similar to inbox page but without any buttons to mark as read. If you click on any of the sent emails, it should open that individual email in a unique route.
Fake fetch has been provided.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import SideBar from "./components/SideBar";

/* Context */
import EmailContextProvider, {
  EmailContext,
} from "./context/EmailContextProvider";

export { EmailContext };

/* Pages */
import EmailHome from "./pages/EmailHome";
import InboxTab from "./pages/InboxTab";
import SentTab from "./pages/SentTab";
import InboxDetails from "./pages/InboxDetails";
import SentDetails from "./pages/SentDetails";

const App = () => {
  return (
    <>
      <div className="header_container">
        <h1>Mail Box</h1>
      </div>
      <main className="emailBox_container">
        <BrowserRouter>
          <SideBar />
          <EmailContextProvider>
            <Routes>
              <Route path="/" element={<EmailHome />} />
              <Route path="/inbox" element={<InboxTab />} />
              <Route path="/inbox/:inboxId" element={<InboxDetails />} />
              <Route path="/sent" element={<SentTab />} />
              <Route path="/sent/:sentId" element={<SentDetails />} />
            </Routes>
          </EmailContextProvider>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
