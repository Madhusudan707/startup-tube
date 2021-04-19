import { usePlayer} from "../contexts/index";

export const useUrlTitleHandler = () => {
  const { setVideoUrl, setVideoTitle } = usePlayer();

  // const [url, setUrl] = useState();
  // const [title, setTitle] = useState();

  // const urlTitleHandler = ( title,url) => {
  //   setUrl(url);
  //   setTitle(title);
  // };

  // return {urlTitleHandler,url,title}

  const urlTitleHandler = (vTitle, vUrl) => {
    setVideoTitle(vTitle);
    setVideoUrl(vUrl);
  };

  return { urlTitleHandler, setVideoUrl, setVideoTitle };
};
