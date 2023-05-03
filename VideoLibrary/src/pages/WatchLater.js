import React, { useContext } from "react";
import { videoLibraryContext } from "../App";
import VideoCard from "../components/VideoCard";

const WatchLater = () => {
  const { watchLaterVideoData, errorLists, isLoading } =
    useContext(videoLibraryContext);

  return (
    <article className="allVideos_container">
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : errorLists ? (
          <p>
            {errorLists?.status} {errorLists?.message}
          </p>
        ) : (
          <ul>
            {!watchLaterVideoData.length ? (
              <h3>No Video Selected</h3>
            ) : (
              watchLaterVideoData?.map((videoListItem) => (
                <VideoCard
                  videoListItem={videoListItem}
                  key={videoListItem.id}
                />
              ))
            )}
          </ul>
        )}
      </div>
    </article>
  );
};

export default WatchLater;
