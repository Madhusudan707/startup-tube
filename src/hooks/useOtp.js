import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/index";

export const useOtp = () => {

  const otp = useRef(null);
  let navigate = useNavigate();
  const { setLogin } = useUser();

  const otpHandler = async (mobile_no) => {
    try {
      const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY || process.env.TWO_FACTOR_API;
      const session_id = await localStorage.getItem("session_id_otp");

      await axios.get(
        `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${session_id}/${otp.current.value}`
      );
      if (mobile_no) {
        try {
          const response = await axios.get(
            `https://startup-tube-backend.herokuapp.com/users/mobile/${mobile_no}`
          );
          setLoginData(response,mobile_no)
          
        } catch (err) {
          console.log(`${err}:Unable to Find the user, Now Register the user`);
        }
      } else {
        try {
          const response = await axios.post(
            "https://startup-tube-backend.herokuapp.com/users",
            {
              mobile: mobile_no,
            }
          );
          setLoginData(response,mobile_no)
        } catch (err) {
          console.log(`${err}:Unable to Register the user,Try Again`);
        }
      }
    } catch (err) {
      console.log(`${err}:Unable to Login incorrect otp`);
    }
  };

  const setLoginData = async(response,mobile_no)=>{
    await localStorage.setItem("_id", response.data.data._id);
    await localStorage.setItem("mobile_no", mobile_no);
    await localStorage.setItem("login", true);
    setLogin(true);
    navigate("user_profile");
  }

  return { otpHandler, otp };
};
