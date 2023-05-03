import React, { useContext } from "react";
import { videoLibraryContext } from "../App";

const VideoCard = ({ videoListItem }) => {
  const { watchLaterVideoData, likeBtnHandler, watchLaterBtnHandler } =
    useContext(videoLibraryContext);

  console.log(watchLaterVideoData);
  return (
    <li>
      <div>
        <img
          width="300"
          height="200"
          src={videoListItem.thumbnail}
          alt={videoListItem.title}
        />
      </div>
      <h3>{videoListItem.title}</h3>
      <p>Duration: {videoListItem.duration}</p>
      <div className="videoCard_btn-container">
        <button
          onClick={() => likeBtnHandler(videoListItem.title)}
          className="btn btn-like"
        >
          Like
        </button>
        <button
          onClick={() => watchLaterBtnHandler(videoListItem.title)}
          className="btn btn-watch-later"
        >
          {watchLaterVideoData.includes(videoListItem)
            ? "Remove from Watch Later"
            : "Add to Watch Later"}
        </button>
      </div>
    </li>
  );
};

export default VideoCard;
