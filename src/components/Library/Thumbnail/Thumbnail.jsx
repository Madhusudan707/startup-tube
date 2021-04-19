import React from "react";
import styles from '../../../styles/thumbnail.module.css'

export const Thumbnail = ({vThumbnail,func}) => {
  return (
    <div className={styles.thumbnail} onClick={func}>
      <div className={styles.video_thumbnail}>
        <img src={vThumbnail} alt="video thumbnail" />
      </div>
     
    </div>
  );
};



