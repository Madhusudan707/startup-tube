import { useRef,useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import {useLogin} from './index'
import  {useUser} from '../contexts/index'

export const useOtp = () => {
  const otp = useRef(null);
  let navigate = useNavigate()
  const {loginOtp,setLoginOtp} = useUser()
  // const {setLoginOtp,loginOtp} = useLogin()

  
 

  const otpHandler = async (mobile_no) => {
    try {
      const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY;
      const session_id = await localStorage.getItem("session_id_otp");
      await axios.get(
        `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${session_id}/${otp.current.value}`
      );
      await axios.post("http://startup-tube-backend.herokuapp.com/users",{ mobile:mobile_no})
      // localStorage.setItem("userId",mobile_no)
      setLoginOtp(true)
      console.log("useOtp",loginOtp)
      
      navigate("user_profile")
     
      
      
    } catch (err) {
      console.log(`${err}:Unable to Login`);
    }
  };

  return { otpHandler, otp };
};
