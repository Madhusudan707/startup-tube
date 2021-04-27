import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/index";

export const useFacebook = () => {
  const navigate = useNavigate();
  const {
    login,
    setLogin,
    setImage,
    setName,
    setFbid,
    image,
    name,
    id,
  } = useUser();
  const responseFacebook = async (response) => {

    if (response.id) {
      try {
        await axios.get(
          `https://startup-tube-backend.herokuapp.com/users/fb/${response.id}`
        );
        setLoginData(response);
      } catch (err) {
        console.log(
          `${err}:Unable to find user using fb id, now register the user`
        );
      }
    } else if (response.accessToken) {
      try {
        await axios.post("https://startup-tube-backend.herokuapp.com/users", {
          name: response.name,
          fb_id: response.id,
          image: response.picture.data.url,
        });
        setLoginData(response);
      } catch (err) {
        console.log(`${err}:Unable to login with Facebook`);
      }
    } else {
      setLogin(false);
      navigate("/");
    }
  };

  const setLoginData = async (response) => {
    setImage(response.picture.data.url);
    setName(response.name);
    setFbid(response.id);
    await localStorage.setItem("login", true);
    await localStorage.setItem("fbid", response.id);
    await localStorage.setItem("name", response.name);
    await localStorage.setItem("image", response.picture.data.url);
    setLogin(true);
    navigate("user_profile");
  };

  return { responseFacebook, login, image, name, id };
};