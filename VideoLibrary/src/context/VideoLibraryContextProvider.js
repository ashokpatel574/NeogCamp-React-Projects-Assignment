import React, { createContext, useEffect, useState } from "react";
import { useFetch } from "../utils/Helper";

export const videoLibraryContext = createContext();

const VideoLibraryContextProvider = ({ children }) => {
  const [videoLibraryData, setVideoLibraryData] = useState(null);
  const [likedVideoData, setLikedVideoData] = useState([]);
  const [watchLaterVideoData, setWatchLaterVideoData] = useState([]);
  const [toggleButton, setToggleButton] = useState(true);
  const { dataLists, errorLists, isLoading } = useFetch(
    "https://example.com/api/videos"
  );

  useEffect(() => {
    setVideoLibraryData(dataLists?.data?.videos);
  }, [dataLists]);

  function likeBtnHandler(selectedVideo) {
    const likedVideo = videoLibraryData.find(
      (item) => item.title === selectedVideo
    );

    likedVideoData.includes(likedVideo)
      ? setLikedVideoData(likedVideoData)
      : setLikedVideoData([...likedVideoData, likedVideo]);
  }

  function watchLaterBtnHandler(selectedVideo) {
    const watchLaterVideo = videoLibraryData.find(
      (item) => item.title === selectedVideo
    );

    console.log(watchLaterVideoData.indexOf(watchLaterVideo));

    watchLaterVideoData.includes(watchLaterVideo)
      ? setWatchLaterVideoData(
          [...watchLaterVideoData].slice(
            watchLaterVideoData.indexOf(watchLaterVideo)
          )
        )
      : setWatchLaterVideoData([...watchLaterVideoData, watchLaterVideo]);
  }
  return (
    <videoLibraryContext.Provider
      value={{
        videoLibraryData,
        likedVideoData,
        watchLaterVideoData,
        errorLists,
        isLoading,
        toggleButton,
        likeBtnHandler,
        watchLaterBtnHandler,
      }}
    >
      {children}
    </videoLibraryContext.Provider>
  );
};

export default VideoLibraryContextProvider;
