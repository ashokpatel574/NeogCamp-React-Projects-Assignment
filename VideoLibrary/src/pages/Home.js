import React from "react";
import Headers from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="videoLibrary_container">
        <h2>Welcome to Video Library.</h2>
        <h3>
          To browser all the videos, click below button or go to the video
          pages.
        </h3>
        <div>
          <button className="btn btn-exploreVideos">
            <Link to="allVideos">Explore Videos</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
