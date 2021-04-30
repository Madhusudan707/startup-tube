import { useState } from "react";
import { useVideo, useLike, useVideoId } from "../contexts/index";
import axios from "axios";
export const useLikeHandler = () => {
  const { likeDispatch } = useLike();
  const { videoState, videoDispatch } = useVideo();
  const { vid } = useVideoId();
  const [isLike, setIsLike] = useState(false);

  const likeHandler = async () => {
    const userId = await localStorage.getItem("_id");
    const newArr = videoState.data.map((video) => {
      if (video._id === vid) {
        setIsLike(!isLike);
        return { ...video, favorite: !video.favorite };
      }
      return video;
    });
    videoDispatch({ type: "ON_SUCCESS", payload: { initialData: newArr } });

    const likeArray = newArr.filter((video) =>
      video.favorite === true ? video : null
    );
    likeDispatch({
      type: "ADDED_LIKE_VIDEO",
      payload: { likeVideo: likeArray },
    });

    try {
      const response = await axios.get(
        `https://startup-tube-backend.herokuapp.com/users-activity/user/${userId}`
      );

      if (response.data.data) {
        try {
          const response = await axios.get(
            `https://startup-tube-backend.herokuapp.com/users-activity/user/${userId}/like/${vid}`
          );
          console.log(response.data.success);
          if (!response.data.success) {
            try {
              await axios.post(
                `https://startup-tube-backend.herokuapp.com/users-activity/user/like/update/${userId}`,
                {
                  like: vid,
                }
              );
            } catch (err) {
              console.log(`${err}: Unable to Save the Like, Try again`);
            }
          } else {
            //Remove videoId if it is present
            try {
              await axios.post(
                `https://startup-tube-backend.herokuapp.com/users-activity/user/like/remove/${userId}`,
                {
                  like:vid
                }
              );
            } catch (err) {}
          }
        } catch (err) {}
      } else {
        try {
          await axios.post(`https://startup-tube-backend.herokuapp.com/users-activity`, {
            uid: userId,
            like: vid,
          });
        } catch (err) {
          console.log(`${err}: Unable to Save the Like and userID, Try again`);
        }
      }
    } catch (err) {
      console.log(err, "Unable to Find the user, Try Again");
    }
  };
  return {
    likeHandler,
    likeDispatch,
    vid,
    isLike,
  };
};
