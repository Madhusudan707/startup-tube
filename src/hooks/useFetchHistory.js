import {useEffect} from 'react'
import axios from "axios";
import { useFetchVideos,useVideoIdHandler } from "../hooks/index";
import {useHistory} from "../contexts/index"

export const useFetchHistory = ()=>{
    const {videoIdHandler} = useVideoIdHandler()
    const { videoState } = useFetchVideos();
    const { historyState, historyDispatch } = useHistory();
    useEffect(() => {
        fetchHistory();
        //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const fetchHistory = async () => {
        try {
          const response = await axios.get("https://startup-tube-backend.herokuapp.com/histories");
         
          const filterVideos = await videoState.data.filter((video) => {
            return  response.data.data.some((history) => {
              return history.vid === video.id;
            });
          });
          historyDispatch({
            type: "FILTER_HISTORY_VIDEOS",
            payload: { historyVideos: filterVideos },
          });
        } catch (err) {
          console.log(err, "Unable to Load History, Try Again");
        }
      };

      return (videoIdHandler,historyState,historyDispatch,fetchHistory)
}