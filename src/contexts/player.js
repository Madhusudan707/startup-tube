import { useContext, createContext,useState} from "react";


export const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  return (
    <PlayerContext.Provider
      value={{ videoUrl: url, setVideoUrl:setUrl, videoTitle:title,setVideoTitle:setTitle }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
