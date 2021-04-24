import { Thumbnail, ThumbnailFooter } from "../Thumbnail";
import { Link } from "react-router-dom";
import { PLAYER } from "../../../routing/paths";
import styles from "../../../styles/all_thumbnail.module.css";
import {
  useFetchVideos,
  useUrlTitleHandler,
  usePostHistory,
} from "../../../hooks";

export const AllThumbnail = () => {
  const { videoState } = useFetchVideos();
  const { urlTitleHandler } = useUrlTitleHandler();
  const { postHistory } = usePostHistory();

  return (
    <div className={styles.all_thumbnail}>
      {videoState.data.map(({id,title,url,thumbnail,views,timestamp}) => {
        return (
          <Link
            to={PLAYER}
            key={id}
            onClick={() => {
              urlTitleHandler(title,url);
            }}
          >
            <Thumbnail
              image={thumbnail}
              func={() => {
                postHistory(id);
              }}
            />
            <ThumbnailFooter
              title={title}
              views={views}
              timestamp={timestamp}
              isHide="hide"
            />
          </Link>
        );
      })}
    </div>
  );
};
