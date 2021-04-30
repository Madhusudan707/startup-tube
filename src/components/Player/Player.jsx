import styles from "../../styles/player.module.css";
import { usePlayer } from "../../contexts";
import {PlayerFooter} from "./PlayerFooter";

const Player = () => {
  const { videoUrl, videoTitle } = usePlayer();
  return (
    <div className={styles.player_main}>
      <iframe
        className={styles.Iframe_video}
        src={videoUrl}
        title={videoTitle}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <PlayerFooter />
    </div>
  );
};

export default Player;
