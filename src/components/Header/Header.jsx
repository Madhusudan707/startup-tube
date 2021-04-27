import styles from "../../styles/header.module.css";
import { Brand, NavBar, Login, ProfileIcon } from "./";
import { useNavigate } from "react-router-dom";
import { Button } from "../";
import { useTheme, useUser } from "../../contexts";
import { useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { login, setLogin } = useUser();
  const logoutHandler = async () => {
    setLogin(false);
    await localStorage.removeItem("login")
    await localStorage.removeItem("image")
    await localStorage.removeItem("name")
    await localStorage.removeItem("session_id_otp")
    await localStorage.removeItem("mobile_no")
    await localStorage.removeItem("_id")
    await localStorage.removeItem("fbid")
    navigate("/");
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
