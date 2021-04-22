import React from "react";
import styles from "../../styles/playlist.module.css";
import { Link } from "react-router-dom";
import {PLAYLIST_THUMBNAILS} from '../../routing/paths'
import { useFetchPlaylist } from "../../hooks/useFetchPlaylist";
export const Playlist = () => {
  const { playlistState} = useFetchPlaylist();
  return (
    <div className={styles.playlist}>
      {playlistState.data.map((playlist,index) => {
        return (
          <Link to={`${PLAYLIST_THUMBNAILS}?name=${playlist.name}`} key={index}>
            <div className={styles.playlist_box}>{playlist.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
