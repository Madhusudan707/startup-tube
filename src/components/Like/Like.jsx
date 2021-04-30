import { useEffect } from "react";
import axios from "axios";
import { Thumbnail } from "../Library/Thumbnail/index";
import { Link } from "react-router-dom";
import { PLAYER } from "../../routing/paths";
import {
  useUrlTitleHandler,
  useVideoIdHandler,
} from "../../hooks/index";
import { useLike } from "../../contexts/index";
import styles from "../../styles/like.module.css";

export const Like = () => {
    const { likeState, likeDispatch } = useLike();
  const { urlTitleHandler } = useUrlTitleHandler();
  const { videoIdHandler } = useVideoIdHandler();
 
  useEffect(() => {
    fetchLike();
    /**
     * !Below Line remove the useEffect dependency warning
     * */
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLike = async () => {
    const userId = localStorage.getItem("_id")
    try {
      const response = await axios.get(
        `https://startup-tube-backend.herokuapp.com/users-activity/user/like/${userId}`
      );
      likeDispatch({
        type: "FILTER_LIKE_VIDEOS",
        payload: { likeVideos: response.data.data.like},
      });
    } catch (err) {
      console.log(err, "Unable to Load Like, Try Again");
    }
  };
  return (
    <div className={styles.like}>
      {likeState.data.map(({_id,title,url,thumbnail}) => {
        return (
          <Link
            key={_id}
            to={`${PLAYER}`}
            onClick={() => {
              urlTitleHandler(title, url);
            }}
          >
            <Thumbnail
              key={_id}
              image={thumbnail}
              func={() => {
                videoIdHandler(_id);
              }}
            />
          </Link>
        );
      })}
    </div>
  );
};
