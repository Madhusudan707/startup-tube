import { useContext, createContext, useState } from "react";

export const VideoIdContext = createContext({});

export const VideoIdProvider = ({ children }) => {
  const [videoId, setVideoId] = useState("");
  return (
    <VideoIdContext.Provider value={{vid:videoId,setVid:setVideoId}}>
      {children}
    </VideoIdContext.Provider>
  );
};

export const useVideoId = () => useContext(VideoIdContext);
