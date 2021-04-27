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
      const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY;
      const session_id = await localStorage.getItem("session_id_otp");
      await axios.get(
        `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${session_id}/${otp.current.value}`
      );
      if (mobile_no === (await localStorage.getItem("mobile_no"))) {
        setLogin(true);
      } else {
        const response = await axios.post(
          "https://startup-tube-backend.herokuapp.com/users",
          {
            mobile: mobile_no,
          }
        );

        await localStorage.setItem("_id", response.data.users._id);
        await localStorage.setItem("mobile_no", mobile_no);
        setLogin(true);
      }

      navigate("user_profile");
    } catch (err) {
      console.log(`${err}:Unable to Login incorrect otp`);
    }
  };

  return { otpHandler, otp };
};
