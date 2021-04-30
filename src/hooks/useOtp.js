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
      // const API_KEY =process.env.TWO_FACTOR_API; //server
      // const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY  //Local
      const session_id = await localStorage.getItem("session_id_otp");

      await axios.get(
        `https://2factor.in/API/V1/9b6af8cc-a271-11eb-80ea-0200cd936042/SMS/VERIFY/${session_id}/${otp.current.value}`
      );

      if(mobile_no){

         try{
          const response = await axios.get(
            `https://startup-tube-backend.herokuapp.com/users/mobile/${mobile_no}`
          );
          if(response.data.data){
            setLoginData(response,mobile_no)
          }else{
            const response = await axios.post(
              "https://startup-tube-backend.herokuapp.com/users",
              {
                mobile: mobile_no,
              }
            );
            setLoginData(response,mobile_no)
          }

         }catch(err){ console.log(`${err}:Unable to Login incorrect otp`);}
      }

    } catch (err) {
      console.log(`${err}:Unable to Login incorrect otp`);
    }
  };

  const setLoginData = async(response,mobile_no)=>{
    await localStorage.setItem("_id", response.data.users._id);
    await localStorage.setItem("mobile_no", mobile_no);
    await localStorage.setItem("login", true);
    setLogin(true);
    navigate("user_profile");
  }

  return { otpHandler, otp };
};
