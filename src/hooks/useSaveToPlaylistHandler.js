import { useRef } from "react";
import axios from "axios";
import { useLibrary } from "../contexts/index";

export const useSaveToPlaylistHandler = () => {
  const inputPlaylist = useRef(null);
  const { libraryState, libraryDispatch } = useLibrary();

  const saveToPlaylistHandler = async (videoIdParam) => {
    if (videoIdParam) {
      const userId = await localStorage.getItem("_id");
      const isPlaylist = libraryState.data.some(
        (playlist) => playlist.name === inputPlaylist.current.value
      );
      if (!isPlaylist) {
        const newPlaylistArray = [
          ...libraryState.data,
          {
            uid: userId,
            vid: [videoIdParam],
            name: inputPlaylist.current.value,
          },
        ];
        try {
          await axios.post(
            "https://startup-tube-backend.herokuapp.com/Playlists",
            {
              uid: userId,
              vid: [videoIdParam],
              name: inputPlaylist.current.value,
            }
          );
        } catch (err) {
          console.log(err, "Unable to Save Playlist, Try Again");
        } finally {
          libraryDispatch({
            type: "SAVE_TO_NEW_PLAYLIST",
            payload: { newPlaylist: newPlaylistArray },
          });
        }
      } else {
        const playlistArray = libraryState.data.map((playlist) => {
          if (playlist.name === inputPlaylist.current.value) {
            if (playlist.vid.length === 0) {
              return { ...playlist, vid: [videoIdParam] };
            } else if (
              !playlist.vid.some((videoId) => videoId === videoIdParam)
            ) {
              return { ...playlist, vid: [...playlist.vid, videoIdParam] };
            }
          }
          return playlist;
        });
        try {
          // await axios.post("http://localhost:5000/Playlists",playlistArray)
        } catch (err) {
          console.log(err, "Unable to Add Video to Playlist, Try Again");
        } finally {
          libraryDispatch({
            type: "SAVE_TO_PLAYLIST",
            payload: { playlist: playlistArray },
          });
        }
      }
    }
  };
  return { saveToPlaylistHandler, inputPlaylist };
};
