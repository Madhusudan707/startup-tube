import React from "react";
import styles from "../../styles/playlist.module.css";
import { Link } from "react-router-dom";
import { useFetchPlaylist } from "../../hooks/useFetchPlaylist";
export const Playlist = () => {
  const { playlistState} = useFetchPlaylist();
  console.log("playlist", playlistState.data);
  return (
    <div className={styles.playlist}>
      {playlistState.data.map((playlist,index) => {
        return (
          <Link to={`${playlist.name}`} key={index}>
            <div className={styles.playlist_box}>{playlist.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
