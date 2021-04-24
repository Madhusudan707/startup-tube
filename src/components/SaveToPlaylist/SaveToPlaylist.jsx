import styles from "../../styles/saveToPlaylist.module.css";
import { useSaveToPlaylistHandler } from "../../hooks";
import { useVideoId } from "../../contexts";

const SaveToPlaylist = () => {
  const { saveToPlaylistHandler, inputPlaylist } = useSaveToPlaylistHandler();
  const { vid } = useVideoId();
  return (
    <div>
      <div id="saveToPlaylistModal" className={styles.modal} autoFocus={false}>
        <div className={styles.modal_content}>
          <a href="#close" title="Close" className={styles.modal_close}>
            X
          </a>
          <div className={styles.modal_input}>
            <input
              list="playlists"
              ref={inputPlaylist}
              name="playlist"
              id="playlist"
              placeholder="Create New or Select from the List"
            />
            <datalist id="playlists">
              <option value="Watch Later" />
              <option value="Pitch" />
              <option value="Launch" />
              <option value="Safe" />
              <option value="Equity" />
              <option value="Growth" />
            </datalist>
          </div>
          <div className={styles.modal_action}>
            <button
              className={`${styles.btn} ${styles.btn_link}`}
              onClick={() => {
                saveToPlaylistHandler(vid);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveToPlaylist;
