import React,{useEffect} from "react";
import axios from 'axios'
import { Thumbnail} from "../Library/Thumbnail/index";
import { Link } from "react-router-dom";
import { PLAYER } from "../../routing/paths";
import { useUrlTitleHandler,useFetchVideos,useVideoIdHandler } from "../../hooks/index";
import {useHistory} from "../../contexts/index"
import  styles from '../../styles/history.module.css'
export const History = () => {
  const { videoState } = useFetchVideos();
  const { historyState, historyDispatch } = useHistory();
  const { urlTitleHandler } = useUrlTitleHandler();
  const {videoIdHandler} = useVideoIdHandler()
  // const {videoIdHandler,historyState} = useFetchHistory()
  /**
   * !Already Created Hook for fetching history but facing some bugs
   * TODO:FIX useFetchHistory hook Bug
   */
  useEffect(() => {
    fetchHistory();
    /** 
     * !Below Line remove the useEffect dependency warning 
     * */
//eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/histories");
     
      const filterVideos = await videoState.data.filter((video) => {
        return  response.data.data.some((history) => {
          return history.vid === video.id;
        });
      });
      console.log("filterVideos",filterVideos)
      historyDispatch({
        type: "FILTER-HISTORY-VIDEOS",
        payload: { historyVideos: filterVideos },
      });
    } catch (err) {
      console.log(err, "Unable to Load History, Try Again");
    }
  };
  return (
    <div className={styles.history}>
      {historyState.data.map((video, index) => {
        return (
        
            <Link key={index}
              to={`${PLAYER}`}
              onClick={(e) => {
                urlTitleHandler(video.title, video.url);
              }}
            >
              <Thumbnail key={index}
                vThumbnail={video.thumbnail}
                func={() => {
                  videoIdHandler(video.id);
                }}
              />
            </Link>
         
        );
      })}
    </div>
  );
};
