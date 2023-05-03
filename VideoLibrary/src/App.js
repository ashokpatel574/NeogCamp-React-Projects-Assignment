/*
Create a video listing app in React, with the following routes.

a. Home
b. Videos listing - If you click on “Explore Videos” button or “Videos” in the navbar, you should land to this page.
c. Liked videos - It should show the list of videos that you have liked. If you click on the Like button on the video listing page, that video should get added to the Liked Videos page. Do this using context.

d. Watch later videos - It should show the list of videos that you have added to watch later. If you click on the Add to watch later button on the video listing page, that video should get added to the Watch Later page. Do this using context.
e. Individual video page - “Watch here” should bring you to the individual video page.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import Headers from "./components/Header";

/* Context */
import VideoLibraryContextProvider, {
  videoLibraryContext,
} from "./context/VideoLibraryContextProvider";

export { videoLibraryContext };

/* Pages */
import Home from "./pages/Home";
import AllVideos from "./pages/AllVideos";
import LikedVideos from "./pages/LikedVideos";
import WatchLater from "./pages/WatchLater";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <VideoLibraryContextProvider>
          <Headers />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allVideos" element={<AllVideos />} />
            <Route path="/likedVideos" element={<LikedVideos />} />
            <Route path="/watchLater" element={<WatchLater />} />
          </Routes>
        </VideoLibraryContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
