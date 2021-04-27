import { useEffect } from "react";
import axios from  'axios'
import { Thumbnail } from "../Library/index";
import { PLAYER } from "../../routing/paths";
import { Link } from "react-router-dom";
import styles from '../../styles/playlist_thumnail.module.css'
import {
  useUrlTitleHandler,
  useVideoIdHandler,
} from "../../hooks/index";
import {usePlaylist} from '../../contexts'
export const PlaylistThumbnails = () => {
  
  const {playlistState,playlistDispatch} = usePlaylist();
  const { urlTitleHandler } = useUrlTitleHandler();
  const { videoIdHandler } = useVideoIdHandler();
  const parsedUrl = new URL(window.location.href);
  const playlist_name = parsedUrl.searchParams.get("name");
  console.log(playlist_name);
  useEffect(() => {
    fetchPlaylistByName();
  });

  const fetchPlaylistByName = async () => {
    try {
      const playlistResponse = await axios.get(
        `https://startup-tube-backend.herokuapp.com/playlists/name/${playlist_name}`
      );
      console.log(playlistResponse);
      console.log(playlistResponse.data.playlistName.vid);
      playlistDispatch({type:'PLAYLIST_BY_NAME',payload:{byName:playlistResponse.data.playlistName.vid}})
    } catch (err) {
      console.log(`${err} Unable to load Playlist`);
    }
  };

  return (
    <div className={styles.playlist_thumbnails}>
      {playlistState.data.map(({_id,title,url,thumbnail}) => {
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
