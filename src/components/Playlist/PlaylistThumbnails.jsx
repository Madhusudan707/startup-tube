import { axios, useEffect } from "react";

export const PlaylistThumbnails = () => {
  
  const parsedUrl = new URL(window.location.href);
  const playlist_name = parsedUrl.searchParams.get("name");
  console.log(playlist_name);
  useEffect(() => {
    fetchPlaylistByName();
  });

  const fetchPlaylistByName = async () => {
    try {
      const playlistResponse = axios.get(
        `https://startup-tube-backend.herokuapp.com/playlists/name:${playlist_name}`
      );
      console.log(playlistResponse);
    } catch (err) {
      console.log(`${err} Unable to load Playlist`);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <iframe
        title="about"
        width="820"
        height="615"
        src="https://www.youtube.com/embed/17XZGUX_9iM"
      ></iframe>
    </div>
  );
};
