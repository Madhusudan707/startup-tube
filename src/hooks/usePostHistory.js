import axios from "axios";
import { useVideoId } from "../contexts/index";

export const usePostHistory = () => {
  const { setVid } = useVideoId();
  const postHistory = async (videoId) => {
    const userId = await localStorage.getItem("_id");
    setVid(videoId);
    try {
      const response = await axios.get(
        `https://startup-tube-backend.herokuapp.com/users-activity/user/${userId}`
      );

      if (response.data.data) {
        try {
          const response = await axios.get(
            `https://startup-tube-backend.herokuapp.com/users-activity/user/${userId}/history/${videoId}`
          );
          if (!response.data.success) {
            try {
              await axios.post(
                `https://startup-tube-backend.herokuapp.com/users-activity/user/history/update/${userId}`,
                {
                  history: videoId,
                }
              );
            } catch (err) {
              console.log(`${err}: Unable to Save the History, Try again`);
            }
          }
        } catch (err) {}
      } else {
        try {
          await axios.post(`https://startup-tube-backend.herokuapp.com/users-activity`, {
            uid: userId,
            history: videoId,
          });
        } catch (err) {
          console.log(
            `${err}: Unable to Save the History and userID, Try again`
          );
        }
      }
    } catch (err) {
      console.log(err, "Unable to Save History, Try Again");
    }
  };

  return { postHistory };
};
