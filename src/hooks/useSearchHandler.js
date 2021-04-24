import axios from "axios";
import { useVideo } from "../contexts/index";

export const useSearchHandler = () => {
  const { videoState, videoDispatch } = useVideo();

  const searchHandler = async (searchStr) => {
    if (searchStr) {
      const data = videoState.data.filter((video) => {
        const response = video.title
          .toUpperCase()
          .includes(searchStr.toUpperCase());
        if (response) {
          return video;
        }
        return null;
      });
      videoDispatch({ type: "ON_SEARCH", payload:{searchData:data}});
    } else {
     
      try {
        console.log("try")
        const response = await axios.get("https://startup-tube-backend.herokuapp.com/videos");
        console.log(response)
        videoDispatch({ type: "RESET", payload:{resetData:response.data.data}});
      } catch (err) {
        videoDispatch({ type: "ON_FAILURE", payload: "" });
      }
    }
  };

  return { searchHandler };
};
