import styles from "../../styles/playlist.module.css";
import { Link } from "react-router-dom";
import { PLAYLIST_THUMBNAILS } from "../../routing/paths";
import { useFetchPlaylist } from "../../hooks/useFetchPlaylist";

export const Playlist = () => {
  const { playlistState } = useFetchPlaylist();
  return (
    <div className={styles.playlist}>
      {playlistState.data.map(({ _id, name }) => {
        return (
         
          <Link to={`${PLAYLIST_THUMBNAILS}?name=${name}`} key={_id}>
            <div className={styles.playlist_box}>{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
