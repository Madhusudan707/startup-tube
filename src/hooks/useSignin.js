import {useRef} from  'react'
import axios from 'axios'
export const useSignin=()=>{
    const username=useRef(null);
    const password = useRef(null);
    const signInHandler = async()=>{
        try{
            const API_KEY = process.env.REACT_APP_TWOFACTOR_API_KEY;
            await axios.post("https://startup-tube-backend.herokuapp.com/users",{ username:username.current.value,password:password.current.value})
           const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${username.current.value}/AUTOGEN`)
           localStorage.setItem("session_id_otp",response.data.Details)
           console.log("Login Success")
        }catch(err){
            console.log(`${err}:Unable to Login`)
        }
      }

      return {signInHandler,username,password}
}