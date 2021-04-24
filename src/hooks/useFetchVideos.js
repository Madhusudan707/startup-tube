import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../contexts/index";

export const useFetchVideos = () => {
  const { videoState, videoDispatch } = useVideo();

  useEffect(() => {
    fetchData();
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://startup-tube-backend.herokuapp.com/videos");
      videoDispatch({
        type: "ON_SUCCESS",
        payload: { initialData: response.data.data },
      });
    } catch (err) {
      videoDispatch({ type: "ON_FAILURE", payload: "" });
    }
  };

  return { videoState, videoDispatch };
};
