import { useState } from "react";
import { useVideo, useLike, useVideoId } from "../contexts/index";

export const useLikeHandler = () => {
  const { likeDispatch } = useLike();
  const { videoState, videoDispatch } = useVideo();
  const { vid } = useVideoId();
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setDisLike] = useState(false);

  const likeHandler = () => {
    const newArr = videoState.data.map((video) => {
      if (video.id === vid) {
        if (isDisLike) {
          setIsLike(false);
          setDisLike(true);
        } else {
          setIsLike(true);
          setDisLike(false);
        }

        return { ...video, favorite: !video.favorite };
      }
      return video;
    });
    videoDispatch({ type: "ON-SUCCESS", payload: { initialData: newArr } });

    const likeArray = newArr.filter((video) =>
      video.favorite === true ? video : null
    );
    console.log(likeArray);
    likeDispatch({
      type: "ADDED-LIKE-VIDEO",
      payload: { likeVideo: likeArray },
    });
  };

  const dislikeHandler = () => {
    if (isLike) {
      setIsLike(false);
      setDisLike(true);
    } else {
      setIsLike(true);
      setDisLike(false);
    }
  };
  return {
    likeHandler,
    dislikeHandler,
    isDisLike,
    likeDispatch,
    vid,
    isLike,
  };
};
