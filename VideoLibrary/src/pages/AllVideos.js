import React, { useContext } from "react";
import { videoLibraryContext } from "../App";
import VideoCard from "../components/VideoCard";

const AllVideos = () => {
  const { videoLibraryData, errorLists, isLoading } =
    useContext(videoLibraryContext);

  return (
    <article className="allVideos_container">
      <h2>All Videos</h2>
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : errorLists ? (
          <p>
            {errorLists?.status} {errorLists?.message}
          </p>
        ) : (
          <ul className="">
            {videoLibraryData?.map((videoListItem) => (
              <VideoCard videoListItem={videoListItem} key={videoListItem.id} />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default AllVideos;
