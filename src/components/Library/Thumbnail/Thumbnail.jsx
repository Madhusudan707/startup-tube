import styles from "../../../styles/thumbnail.module.css";

export const Thumbnail = ({ image, func }) => {
  return (
    <div className={styles.thumbnail} onClick={func}>
      <div className={styles.video_thumbnail}>
        <img src={image} alt="video thumbnail" />
      </div>
    </div>
  );
};
