import { useRef} from "react";
import axios from "axios";

export const useSignin = () => {

  const mobile_no = useRef("");
  const mobile_no_value = mobile_no.current.value;
  console.log(mobile_no.current.value)

  const signInHandler = async () => {
    try {
          const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY;
          await axios.post("https://startup-tube-backend.herokuapp.com/users",{ mobile:mobile_no.current.value})
         const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${mobile_no.current.value}/AUTOGEN`)
         localStorage.setItem("session_id_otp",response.data.Details)
    } catch (err) {
      console.log(`${err}:Unable to Login`);
    }
  };

  return { signInHandler, mobile_no, mobile_no_value };
};
