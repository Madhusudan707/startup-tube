import { usePlayer } from "../contexts/index";

export const useUrlTitleHandler = () => {
  const { setVideoUrl, setVideoTitle } = usePlayer();

  const urlTitleHandler = (vTitle, vUrl) => {
    setVideoTitle(vTitle);
    setVideoUrl(vUrl);
  };

  return { urlTitleHandler, setVideoUrl, setVideoTitle };
};
