import {useRef} from  'react'
import axios from 'axios'

export const useOtp=()=>{
    const otp=useRef(null);
    const otpHandler = async()=>{
        try{
            const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY;
            const session_id= localStorage.getItem("session_id_otp")
            await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${session_id}/${otp.current.value}`)
            console.log("OTP accepted")
        }catch(err){
            console.log(`${err}:Unable to Login`)
        }
      }

      return {otpHandler,otp}
}