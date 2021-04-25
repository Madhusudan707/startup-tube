import styles from "../../styles/header.module.css";
import { Brand, NavBar, Login, ProfileIcon } from "./";
import { useNavigate } from "react-router-dom";
import { Button } from "../";
import { useTheme, useUser } from "../../contexts";

export const Header = () => {
  const Navigate = useNavigate();
  const { theme } = useTheme();
  const { login, setLogin } = useUser();

  const logoutHandler = () => {
    setLogin(false);
    localStorage.removeItem("login")
    localStorage.removeItem("image")
    localStorage.removeItem("name")
    localStorage.removeItem("session_id_otp")
    localStorage.removeItem("mobile_no")
    localStorage.removeItem("_id")
    Navigate("/");
  };
  return (
    <div className={`${styles.header} ${theme}`}>
      <Brand />
      <NavBar />
      {login ? <ProfileIcon /> : <Login />}
      {console.log("login_header", login)}
      {login && <Button btnText="LOGOUT" func={logoutHandler} />}
    </div>
  );
};
